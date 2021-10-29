import React from 'react';
import './signin.css'
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const SignIn = () => {
    const { user, setUser, error, setError, signInWithGoogle } = useFirebase()
    const history = useHistory()
    const location = useLocation()
    console.log(user)
    console.log('History rd', history)
    console.log('Location rd', location)

    // const redirectURI = '/'
    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                console.log(user)
                console.log("rd uri", redirectURI)
                history.push(redirectURI)
            })
            .catch(e => {
                console.log(e)
                setError(e.message)
            })
    }



    return (
        <div>
            <div id="login" className="container my-5 w-25 h-70 align-items-center">
                <div className="row">
                    <h2 className="text-center py-3 text-warning">Login with</h2>

                </div>
                <div className="text-center py-3">
                    <button onClick={handleGoogleSignIn} className="btn btn-warning text-white py-5"> Sign in with Google </button>
                    <br />
                    <br />
                    <p>Please, Sign in with Google Account. </p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    );
};

export default SignIn;