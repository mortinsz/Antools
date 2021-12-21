import React from 'react'
import styles from './Button.module.css'

function ButtonFill(props) {
    return (
        <div className={styles.button} padding={props.padding}>
            {props.text}
        </div>
    )
}

export default ButtonFill

