import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className='mx-5 mb-5'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn btn-warning w-full'>{location.pathname === '/login' ? "Login" : "Register"} With Google</button>
        </div>
    );
};

export default SocialLogin;