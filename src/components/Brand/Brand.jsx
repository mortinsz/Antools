import React from 'react'
import styles from './Brand.module.css'

function Brand() {
    return (
        <div className={styles.brand}>
            <div className={styles.brand__wrapper}>
                <div className={styles.brandCard}>
                    <div className={styles.title}>Trusted more than 150+ brand</div>
                    <div className={styles.items}>
                        <div className={styles.item}><img src="./img/cart/logosMicrosoft.svg" alt="" /></div>
                        <div className={styles.item}><img src="./img/cart/logoGoogle.svg" alt="" /></div>
                        <div className={styles.item}><img src="./img/cart/logosSlack.svg" alt="" /></div>
                        <div className={styles.item}><img src="./img/cart/logosWordpress.svg" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
