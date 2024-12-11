import React, { useState } from 'react';
import AuthContext from './AuthContext';
import auth from './../../firebase/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth)
    }

    const authInfo = {
        user,
        loading,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;