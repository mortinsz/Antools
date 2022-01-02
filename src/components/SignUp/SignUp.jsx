import React, {useState, useEffect} from 'react'
import styles from './SignUp.module.css'
import { NavLink } from 'react-router-dom';
import ButtonFill from '../Button/Button';


function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [doublePassword, setDoublePassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [doublePasswordDirty, setDoublePasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Input cannot be empty')
    const [passwordError, setPasswordError] = useState('Input cannot be empty')
    const [doublePasswordError, setDoublePasswordError] = useState('Input cannot be empty')
    const [formValid, setFormValid] = useState(false)


    useEffect(() => {
        if(emailError || passwordError || doublePasswordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError, doublePasswordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Email is invalid')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError('Password must be more than 8 characters')
            if(e.target.value){
                setPasswordError('Input cannot be empty')
            }
        }else{
            setPasswordError('')
        }
    }

    const passwordCheck = (e) => {
        setDoublePassword('')
        if(!(e.target.value == password)) {
            setDoublePasswordError('Passwords do not match')    
        } else {
            setDoublePasswordError('')
        }

    }
    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'doublePassword':
                setDoublePasswordDirty(true)
                break
        }
    }




    return (
        <div className={styles.SignUp}>
            <div className={styles.SignUp__wrapper}>
                <div className={styles.SignUp__title}>Sign Up</div>
                <form action="/" className={styles.form}>

                    {(emailError && emailDirty) && <label style={{color: 'red'}}>{emailError}</label>}  
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type="text" placeholder="Email" className={styles.SignUp__input}/>

                    {(passwordError && passwordDirty) && <label style={{color: 'red'}}>{passwordError}</label>}  
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder="Password" className={styles.SignUp__input}/>

                    {(doublePasswordError && doublePasswordDirty) && <label style={{color: 'red'}}>{doublePasswordError}</label>}  
                    <input name="doublePassword" onBlur={e => blurHandler(e)} onChange={e => passwordCheck(e)} type="password" placeholder="Varify Password" className={styles.SignUp__input}/>

                    <div className={styles.discription}>By clicking the Register button, you accept the Terms, Data Usage Policy and Cookie Policy.</div>
                    <ButtonFill disabled={!formValid} type='submit' text="Sign Up" />
                </form>
            </div>

        </div>
    )
}

export default SignUp
