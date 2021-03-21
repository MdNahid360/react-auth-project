import React from 'react';
import img1 from '../../img/Frame.png';
import img2 from '../../img/Frame-2.png';
import img3 from '../../img/Frame-1.png';
import img4 from '../../img/Group.png';
import './Home.css';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

// import React, { useEffect, useState } from 'react';
// import ridesData from '../fakeData/fakeData.json';

 const Home = (props) => {
    
 console.log(props);
//  const [rides, setRides] = useState([])
//  useEffect(() =>{
//      setRides(ridesData);
//      console.log(rides);
//  }, [])

    return (
       


      
        <div className=" ">
       {/* this is navbar */}
       <nav className="navbar bg-light navbar-light fixed-top text-white navbar-expand-lg">
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
                        <li className="nav-item active text-light">
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
                        <li className="nav-item">
                            <Link to="/signUp" className="px-4 btn login" href="#">Login</Link>
                        </li>
                        </ul>
                      
                    </div>
              </div>
          </nav>


         
        {/* {
            rides.map(rd => rides={rd})
          
        }  */}
        
        {/* this is card sections  */}
          <div className="home container">
              <div className="row py-5 mt-5">
                    <div className="col-lg-3 col-md-3 col-12 mt-2">
                    <Link to="/rides">
                        <div className="card">
                            <div className="card-body">
                                <img src={img1} alt="" className="img-fluid w-50"/>
                                 <h5 className="mt-3">
                                     Bike
                                 </h5>
                            </div>
                        </div>
                        </Link>
                        
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 mt-2">
                    <Link to="/rides">
                        <div className="card">
                            <div className="card-body">
                                <img src={img2} alt="" className="img-fluid w-50"/>
                                 <h5 className="mt-3">
                                     Bike
                                 </h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 mt-2">
                    <Link to="/rides">
                        <div className="card">
                            <div className="card-body">
                                <img src={img3} alt="" className="img-fluid w-50"/>
                                 <h5 className="mt-3">
                                     Bike
                                 </h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12 mt-2">
                    <Link to="/rides">
                        <div className="card">
                            <div className="card-body">
                                <img src={img4} alt="" className="img-fluid w-50"/>
                                 <h5 className="mt-3">
                                     Bike
                                 </h5>
                            </div>
                           
                        </div>
                         </Link>
                    </div>
              </div>
          </div>


        </div>
    );
};

export default Home;