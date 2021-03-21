import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLdoggedInUser] = useContext(UserContext);
    
    return (
       
        <Route
        {...rest}
        render={({ location }) =>
       loggedInUser.email ? (
             children
         ):(
            <Redirect
              to={{
                pathname: "/signUp",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;