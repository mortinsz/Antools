import React from 'react'
import styles from './LinkA.module.css'


function LinkA(props) {
    return (
        <a href="#" className={styles.LinkA}>
            {props.text}
        </a>
    )
}

export default LinkA
