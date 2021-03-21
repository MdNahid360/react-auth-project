import React, { useContext, useState } from 'react';
 import './SignUp.css'
import firebase from "firebase/app";
import google from '../../img/google.png';
import fb from '../../img/fb.png';
import firebaseConfig from '../../firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



const SignUp = () => {
    
    const [newUser, setNewUser] = useState(true)
      const [user, setUser] = useState({
          isSignIn: false,
           name: '',
          email:'',
          password:'',
          photoURL:'',
          error: '',
          success:false
      });
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    let {from} = location.state || { from:  { pathname: "/"} };

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () =>{
             
        firebase.auth()
        .signInWithPopup(provider)
        .then((res) => {
            const {displayName, photoURL, email} = res.user;
               const signInUser = {
                isSignedIn: true,
                name: displayName,
                email:email,
                photo: photoURL
               }
               setUser(signInUser)
               history.replace(from);

            console.log(displayName, photoURL, email);
     
          })
          
          .catch((error) => {
                console.log(error);
                console.log(error.message);
        //    const errorCode = error.code;

        // const errorMessage = error.message;

        //    const email = error.email; 

        //    const credential = error.credential;
        });
        
    }


    const handleFacebookSignIn =()=>{

        firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((res) => {
            const {displayName, photoURL, email} = res.user;
            const signInUser = {
             isSignedIn: true,
             name: displayName,
             email:email,
             photo: photoURL
            }
            setUser(signInUser)
         console.log(displayName, photoURL, email);
          
        })
        .catch((error) => {

            var errorCode = error.code;
          var errorMessage = error.message;

          var email = error.email;

          var credential = error.credential;
            
          console.log(errorCode, errorMessage, email, credential);

        });

    }
    const handleSubmit =(event) => {
        // console.log(user.email, user.password);
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
             .then(res =>{
                 const newUserInfo = {...user}
                 newUserInfo.error = '';
                 newUserInfo.success = true;
                 setUser(newUserInfo);

                 updatUserName(user.name);
             })
            .catch(error  => {
                const newUserInfo = {...user}
                newUserInfo.success = false;
                newUserInfo.error=error.message;
                setUser(newUserInfo);
            });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                                history.replace(from);

                const newUserInfo = {...user}
                newUserInfo.success = true;
                newUserInfo.error='';
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                console.log('sign in user info', res.user);

            })
            .catch((error) => {
                const newUserInfo = {...user}
                newUserInfo.success = false;
                newUserInfo.error=error.message;
                setUser(newUserInfo);
            });
        }
        event.preventDefault();
    }
    const handleBlure =(event)=>{
        let isBoxValid  = true;
            if(event.target.name === 'email'){
                isBoxValid = /\S+@\S+\.\S+/.test(event.target.value);
                console.log('submiting');
            }
            if(event.target.name === 'password'){
                    const isPasswordValid = event.target.value.length > 6;
                    const  passwordWithNumber =  /\d{1}/.test(event.target.value);
                    isBoxValid = isPasswordValid && passwordWithNumber;
            }
            if(isBoxValid){
                const newUserInfo = {...user};
                newUserInfo[event.target.name] = event.target.value;
                setUser(newUserInfo);
            }
    }
  const updatUserName = name =>{
           
    var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name
}).then(function() {
  console.log('user name update successfully');
}).catch(function(error) {
  console.log(error);
});

  }
    return (
        <div className="main">
                  <nav className="navbar navbar-light  navbar-expand-lg">
              <div className="container">
                  
                    <a className="navbar-brand" href="../Home/Home.js">
                        <h3>
                        <span className="b text-success font-weight-bold">B</span><span className="d font-weight-bold text-danger">D</span>rider
                        </h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                   
                            <li className="nav-item">
                            <Link to="/home" className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home"className="nav-link" href="#">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home"className="nav-link" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/home"className="nav-link" href="#">Contact</Link>
                            </li>
                            
                        <li className="d-flex nav-item align-items-center mx-auto">
                        {
               user.isSignedIn && <img src={user.photo} alt="logo" className="logo"/>
            }
              
                        </li>
                        <li className="text-center m-auto nav-item">
                        {
               user.isSignedIn && <small className="text-dark user-name px-2"><b>{user.name}</b></small>
            }
                        </li>
                       
                        </ul>
                      
                    </div>
              </div>
          </nav>  





    <div className="container py-4 d-flex justify-content-center align-items-center">
  <div>
    <form onSubmit={handleSubmit}>
    <h4 className="text-left pb-1">{newUser ? 'Create an account' : 'Sign in'}</h4>

        {newUser && <input className="form-control inp" onBlur={handleBlure} name="name" type="text" required placeholder="Name"/>
        
        }       
        
        <input className="form-control mt-3 inp" onBlur={handleBlure} name="email" type="text" required placeholder="User name or email"/>
        <input className="form-control mt-3 inp" onBlur={handleBlure} name="password" type="password" required placeholder="Password"/>
        {newUser &&   <input className="form-control mt-3 inp" onBlur={handleBlure} name="password" type="password" required placeholder="Confarm password"/>
            }       

 <input className="btn btn-primary w-100 mt-3" value={newUser ? 'Sign Up' : 'Sign in'} type="submit" />
   <p className="mt-3">Already have an account? <a href="#" onClick={()=> setNewUser(!newUser) }>Sign In</a></p>
   
    </form>
    
    <small className="text-center text-danger">{user.error}</small>
    
    {
        user.success && <small className="text-center text-success">{user.success}Your account {newUser ? 'create' : 'Logged In'} successfuly</small>
    }
    <br/>
    <h6>or</h6>
<br/>
    <button onClick={handleFacebookSignIn} className="btn bbtn2 m-auto mt-3 d-flex">
             <img src={fb} className="img-fluid" alt=""/><span>
             Continu with facebook
             </span>
           </button>
               
            <button className="btn bbtn py-2 m-auto mt-3 d-flex" onClick={handleGoogleSignIn}><img className="img-fluid" src={google} alt=""/> <span className="text-center m-auto" >Continue with Google</span></button>
    </div>


        </div>
         </div>
    );
};

export default SignUp;