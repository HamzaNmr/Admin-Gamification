import Dashboard from '../Dashboard/Dashboard'
import React, { useRef } from 'react'
import './Auth.css'

const Auth = () => {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem('emailData')
    const getPassword = localStorage.getItem('passwordData')
    const handleSubmit = () => {
        if (email.current.value === "admin@gmail.com" && password.current.value === "12345") {
            localStorage.setItem('emailData', "admin@gmail.com")
            localStorage.setItem('passwordData', '12345')

        }
    }
    return (
        <div className='body'>
            {
                getEmail && getPassword ?
                    <Dashboard /> :
                    <>
                        <h1 className='h1'>LogIn Admin</h1>
                        <div class="login-page">
                            <div class="form">
                                <form class="login-form" onSubmit={handleSubmit}>
                                <input type='text' ref={email} className='email' placeholder='email'/>
                                <input type='password' ref={password} className='pasword' placeholder='password'/>
                                    <button>login</button>
                                   
                                </form>
                            </div>
                        </div>
                       
                    </>
            }
        </div>
    )
}

export default Auth
