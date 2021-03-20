import React from 'react';
import '../Navbar/Navbar.css'
const SignIn = () => {
    return (
        <div>
                    <nav className="navbar navbar-dark  navbar-expand-lg">
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
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="px-4 btn login" href="#">Login</a>
                        </li>
                        </ul>
                      
                    </div>
              </div>
          </nav>
             

             
        </div>
    );
};

export default SignIn;