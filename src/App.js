import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from './component/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './component/Home/Home';
import Rides from './component/Rides/Rides';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();
 
firebase.initializeApp(firebaseConfig);


function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
     <div className="App">
       
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>   
          <Router>
            <Navbar></Navbar>
            
              <Switch>
               
                  <PrivetRoute path="/rides">
                     <Rides></Rides>
                  </PrivetRoute>

                  <Route path="/signIn">
                      <SignIn></SignIn>
                  </Route>
                  <Route path="/signUp">
                      <SignUp></SignUp>
                  </Route>

                  <Route path="/">
                    <Home></Home>
                </Route>
                  <Route path="/home">
                    <Home></Home>
                </Route>
                </Switch> 
              
          </Router>    
       
    </UserContext.Provider>
     </div>
  );
}

export default App;
