import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

import logo from "./logo.png";
import wordlogo from "./wordlogo.png";

function Login() {
    //Hook from StateProvider
    const [state, dispatch] = useStateValue();

    const signIn =() => {
        //sign in using the firebase as database, via google authentication
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert (error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
                <img 
                    src={logo}
                    /*src="https://upload.wikimedia.org/
                    wikipedia/commons/thumb/5/51/
                    Facebook_f_logo_%282019%29.svg/
                    1200px-Facebook_f_logo_%282019%29.
                    svg.png"*/
                    alt="Logo symbol"
                /><img 
                    src={wordlogo}
                    width="300px"
                    height="800px"
                    /*src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"*/
                    alt="Logo words"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
