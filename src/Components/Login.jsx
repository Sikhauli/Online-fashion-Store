import React from 'react';
import '../Style/Login.css';
import bg from '../Assets/bg.jpg';
import { FaSignInAlt, FaUserPlus, FaGoogle, FaFacebook, FaEnvelope, FaLock } from 'react-icons/fa';


const Login = () => {
    return (
        <div className='container' style={{ backgroundImage: `url(${bg})` }}>
            <div className='Left-div-container'>
                <h1>Login</h1>
                <h6>First step to a healthy living</h6>

                <form className='login-form'>
                    <div className='input-container'>
                        <input placeholder='Email' type='email' required />
                        <FaEnvelope className='input-icon' size={20} />
                    </div>
                    <div className='input-container'>
                        <input placeholder='Password' type='password' required />
                        <FaLock className='input-icon' size={20} />
                    </div>
                    <div className='forgot-container'>
                        <p className='forgot'>Forgot Password?</p>
                    </div>
                    <div className='button-container'>
                        <button className='login-btn'>
                            <FaSignInAlt className='btn-icon' />
                            Login
                        </button>
                        <button className='register-btn'>
                            <FaUserPlus className='btn-icon' />
                            Register
                        </button>
                        <button className='google-btn'>
                            <FaGoogle className='btn-icon' />
                            Sign in with Google
                        </button>
                        <button className='facebook-btn'>
                            <FaFacebook className='btn-icon' />
                            Sign in with Facebook
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
