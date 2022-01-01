import React from 'react'
import styles from './Button.module.css'

function ButtonFill(props) {
    return (
        <button type={props.type} disabled={props.disabled} className={styles.button} padding={props.padding}>
            {props.text}
        </button>
    )
}

export default ButtonFill

