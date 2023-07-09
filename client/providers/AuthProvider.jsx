import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        fname: '',
        lname: '',
        mobile: '',
        picture: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{
            userDetails,
            setUserDetails,
            isLoggedIn,
            setIsLoggedIn,
        }}>
            { children }
        </AuthContext.Provider>
    );

}

export default AuthProvider;