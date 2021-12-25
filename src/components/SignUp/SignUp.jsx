import React from 'react'
import styles from './SignUp.module.css'
import { NavLink } from 'react-router-dom';
import ButtonFill from '../Button/Button';


function SignUp() {
    return (
        <div className={styles.SignUp}>
            <div className={styles.SignUp__wrapper}>
                <div className={styles.SignUp__title}>Sign Up</div>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Email" className={styles.SignUp__input}/>
                    <input type="password" placeholder="Password" className={styles.SignUp__input}/>
                    <input type="password" placeholder="Varify Password" className={styles.SignUp__input}/>
                    <div className={styles.discription}>By clicking the Register button, you accept the Terms, Data Usage Policy and Cookie Policy.</div>
                    <NavLink to='/'><ButtonFill text="Sign Up" /></NavLink>
                </form>
            </div>

        </div>
    )
}

export default SignUp
