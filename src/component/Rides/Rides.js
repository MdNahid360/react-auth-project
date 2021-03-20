import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import './Rides.css';
import img from '../../img/Frame-2.png'
import { Link } from 'react-router-dom';
const Rides = () => {
   const[data, setData] = useState("");
   const[lastInput, setLastInput]= useState('');
    const [fromData, setFromData] = useState("");
    const [addData, setAddData] = useState("");

    const clickHandler =(event)=>{
            console.log(event.target.value);
              setData(event.target.value);

    }
    const clickHandler2 =(event)=>{
            console.log(event.target.value);
            setLastInput(event.target.value);
    }

const onSubmit = (event) =>{
    event.preventDefault();
    setFromData(data);
    setAddData(lastInput);
}
    return (
        <div className="bg-white main">
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
                        <ul className="navbar-nav ml-auto text-dark">
                       <li className="nav-item">
                        <Link to="/home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signUp"className="nav-link" href="#">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signUp"className="nav-link" href="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signUp"className="nav-link" href="#">Contact</Link>
                        </li>
                        
                        </ul>
                      
                    </div>
              </div>
          </nav>

        <div className="container py-4">
            <div className="row">
                <div className="col-lg-4 col-md-5 col-12">
                        <div className="card bg-light py-0 ">
                              <div className="card-body pt-3 pb-1 ">
                                   <form onSubmit={onSubmit} className="pb-2 pt-0 w-100">
                                  <input required  className="form-control mt-2" placeholder="Mirpur 10" type="text" id="myText"    onChange={clickHandler} Value={data}/>
                                
                                  <input required  className="form-control mt-2" placeholder="Mymenshing" type="text" id="myText"    onChange={clickHandler2} Value={lastInput}/>
                                  
                                  <input className="form-control btn button mt-2" type="submit" value="Search" onClick={onSubmit}/>
                                  
                                 </form><br/>
                                 <div className="card bg-primary">
                                     <div className="card-body">
                                     <div className="card text-left p-1">
                                       <div className="card-body p-1 px-3">
                                       <small><strong>From : {fromData}</strong></small>
                                       </div>
                                    </div>  <br/>
                                      <div className="card mt-3 p-1 text-left">
                                     <div className="card-body p-1 px-3">
                                        <small><strong>From : {addData}</strong></small>
                                     </div>
                                      </div> 
                                     </div>
                                 </div>
                                    <br/>
                                 <div className="card">
                                  <div className="card-body">
                                           <div className="d-flex">
                                               <div className="box1 mr-auto">
                                                   <img src={img} className="img-fluid w-25" alt=""/>
                                               </div>
                                               <div className="box1">
                                                    <span><b>Car</b></span>
                                               </div>
                                               <div className="box1">
                                                    <span><b>$ 90</b></span>
                                               </div>
                                           </div>
                                  </div>
                              </div>
                              <br/>
                                 <div className="card">
                                  <div className="card-body">
                                           <div className="d-flex">
                                               <div className="box1 mr-auto">
                                                   <img src={img} className="img-fluid w-25" alt=""/>
                                               </div>
                                               <div className="box1">
                                                    <span><b>Car</b></span>
                                               </div>
                                               <div className="box1">
                                                    <span><b>$ 90</b></span>
                                               </div>
                                           </div>
                                  </div>
                              </div>
                              <br/>


                                 <div className="card">
                                  <div className="card-body">
                                           <div className="d-flex">
                                               <div className="box1 mr-auto">
                                                   <img src={img} className="img-fluid w-25" alt=""/>
                                               </div>
                                               <div className="box1">
                                                    <span><b>Car</b></span>
                                               </div>
                                               <div className="box1">
                                                    <span><b>$ 90</b></span>
                                               </div>
                                           </div>
                                  </div>
                              </div>
                              <br/>




                              </div>
                             


                              
                        </div>
                </div>
                <div className="col-lg-8 col-md-7 col-12">
                        <h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22202.528180910933!2d90.3622259782181!3d23.808720643717486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1616166709360!5m2!1sen!2sbd"allowfullscreen="" loading="lazy"></iframe>
                        </h2>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Rides;