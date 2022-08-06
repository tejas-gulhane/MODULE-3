import React from "react";
// create context
const AuthContext = React.createContext({
    // set object to hold state variables
    isLoggedIn: false
});

export default AuthContext;

