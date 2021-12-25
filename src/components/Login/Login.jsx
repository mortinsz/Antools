import React from 'react'
import styles from './Login.module.css'
import { NavLink } from 'react-router-dom';
import ButtonFill from '../Button/Button';



function Login(state) {


    return (
        <div className={styles.Login}>
            <div className={styles.Login__wrapper}>
                <div className={styles.Login__title}>Log In</div>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Email" className={styles.Login__input}/>
                    <input type="password" placeholder="Password" className={styles.Login__input}/>
                    <NavLink to='/'><ButtonFill text="Log In" /></NavLink>
                </form>
            </div>

        </div>
    )
}

export default Login
