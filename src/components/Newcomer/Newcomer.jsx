import React from 'react'
import ButtonFill from '../Button/Button';
import Cart from '../Cart/Cart'
import styles from './Newcomer.module.css'

function Newcomer() {

    const zeplinSrc = './img/cart/zeplin.svg';
    const phpstormSrc = './img/cart/phpstorm.svg';
    const toolboxSrc = './img/cart/toolbox.svg';
    const ProcreateSrc = './img/cart/procreate.svg';

    return (
        <div className={styles.newcomer}>
            <div className={styles.newcomer__wrapper}>
                <div className={styles.Newcomer__text}>
                    <div className={styles.title}>Newcomer Tools</div>
                    <div className={styles.subtitle}>Wow! see the latest update of the most recommended tools from reliable designers and developers</div>
                    <ButtonFill text='Explore more'/>

                </div>
                <div className={styles.tools}>
                    <Cart CartImg={zeplinSrc} fontSize='14px' name='Zeplin' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={phpstormSrc} fontSize='14px' name='PHPstorm' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={toolboxSrc} fontSize='14px' name='Toolbox' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={ProcreateSrc} fontSize='14px' name='Procreate' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                </div>
                
            </div>
        </div>
    )
}

export default Newcomer
