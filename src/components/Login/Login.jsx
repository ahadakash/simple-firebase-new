import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {

    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleAuth = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div>
            {/* user ? logout : sign in */}

            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleGoogleAuth}>Google Login</button>
            }

            {user && <div>
                <h3>Name: {user.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;