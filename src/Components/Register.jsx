import React from 'react';
import '../Style/Register.css';
import bg from '../Assets/bg.jpg';
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaCalendar } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='container' style={{ backgroundImage: `url(${bg})` }}>
            <div className='Left-div-container'>
                <h1>Register</h1>
                <h6>Join us for a healthy living</h6>

                <form className='login-form'>
                    <div className='input-container'>
                        <input placeholder='Name' type='text' required />
                        <FaUser className='input-icon' size={20} />
                    </div>
                    <div className='input-container'>
                        <input placeholder='Email' type='email' required />
                        <FaEnvelope className='input-icon' size={20} />
                    </div>
                    <div className='input-container'>
                        <input placeholder='Password' type='password' required />
                        <FaLock className='input-icon' size={20} />
                    </div>
                    
                    <div className='button-container'>
                        <button className='register-btn'>
                            <FaUserPlus className='btn-icon' />
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

