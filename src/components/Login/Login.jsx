import React, { useState, useEffect } from 'react'
import styles from './Login.module.css'
import { NavLink } from 'react-router-dom';
import ButtonFill from '../Button/Button';


function Login(state) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setemailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Input cannot be empty')
    const [passwordError, setpasswordError ] = useState('Input cannot be empty')
    const [formValid, setFormValid] = useState(false)



    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setemailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Email is incorrect')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8 ){
            // setpasswordError('Password must be more than 8 characters')
            setpasswordError('Password is incorrect')
            if(!e.target.value){
                setpasswordError('Input cannot be empty')
            }
        } else {
            setpasswordError('')
        }
    }


    return (
        <div className={styles.Login}>
            <div className={styles.Login__wrapper}>
                <div className={styles.Login__title}>Log In</div>
                <form action="/" className={styles.form}>

                    {(emailError && emailDirty) && <label style={{color: 'red'}}>{emailError}</label>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Email" className={styles.Login__input}/>
                   
                    {(passwordError && passwordDirty) && <label style={{color: 'red'}}>{passwordError}</label>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Password" className={styles.Login__input}/>
                    
                    <ButtonFill text="Log In" type="submit"/>
                </form>
            </div>

        </div>
    )
}

export default Login
