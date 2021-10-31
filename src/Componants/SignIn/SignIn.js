import React from 'react';
import './signin.css'
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';

const SignIn = () => {
    const { setUser, setIsLoading, signInWithGoogle } = useFirebase()
    const history = useHistory()
    const location = useLocation()

    // const redirectURI = '/'
    const redirectURI = location.state?.from.pathname || '/'

    const handleGoogleSignIn = () => {
        console.log('clicked')
        signInWithGoogle()
            .then(result => {
                setUser(result.user)
                history.push(redirectURI)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => setIsLoading(false))

    }


    return (
        <div>
            <div id="login" className="container my-5 w-25 h-70 align-items-center">
                <div className="row">
                    <h2 className="text-center py-3 text-warning">Login with</h2>

                </div>
                <div className="text-center py-3">
                    <button onClick={handleGoogleSignIn} className="btn btn-warning text-white px-3"> Sign in with Google </button>
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