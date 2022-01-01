import React from 'react'
import ButtonFill from '../Button/Button';
import Cart from '../Cart/Cart'
import styles from './Newcomer.module.css'

function Newcomer() {
 
    let cardNewcomer = [

        {id: 1, CartImg:'./img/cart/zeplin.svg', color:'white', fontSize:'16px', name:'Zeplin', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, CartImg:'./img/cart/phpstorm.svg', color:'white' , fontSize:'16px', name:'PHPstorm', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 3, CartImg:'./img/cart/toolbox.svg', color:'white', fontSize:'16px', name:'Toolbox', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 4, CartImg:'./img/cart/procreate.svg', color:'white', fontSize:'16px', name:'Procreate', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},     
    ]

    let newcomerInside = cardNewcomer.map( nc => <Cart CartImg={nc.CartImg} color={nc.сolor} fontSize={nc.fontSize} name={nc.name} price={nc.price} aboutText={nc.aboutText} />)

    return (
        <div className={styles.newcomer}>
            <div className={styles.newcomer__wrapper}>
                <div className={styles.Newcomer__text}>
                    <div className={styles.title}>Newcomer Tools</div>
                    <div className={styles.subtitle}>Wow! see the latest update of the most recommended tools from reliable designers and developers</div>
                    <ButtonFill text='Explore more'/>

                </div>
                <div className={styles.tools}>
                    {newcomerInside}
                </div>
                
            </div>
        </div>
    )
}

export default Newcomer
