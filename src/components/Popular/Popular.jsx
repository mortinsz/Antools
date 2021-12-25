import React from 'react'
import Cart from '../Cart/Cart'
import styles from './Popular.module.css'

function Popular() {
    
    const notionSrc = './img/cart/notion.svg';
    const slackSrc = './img/cart/slack.svg';
    const invision = './img/cart/invision.svg';

    let cardPopulator = [

        {id: 1, CartImg:'./img/cart/figma.svg', color:'white', fontSize:'16px', name:'FIGMA', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 2, CartImg:'./img/cart/sketch.svg', color:'white' , fontSize:'16px', name:'Sketch', price:'Trial & Paid', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 3, CartImg:'./img/cart/vscode.svg', color:'white', fontSize:'16px', name:'Visual Studio Code', price:'Free', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 4, CartImg:'./img/cart/notion.svg', color:'white', fontSize:'16px', name:'Notion', price:'Free & Paid', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 5, CartImg:'./img/cart/slack.svg', color:'white', fontSize:'16px', name:'Slack', price:'Free & Paid', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id: 6, CartImg:'./img/cart/invision.svg', color:'white', fontSize:'16px', name:'Invision', price:'Free & Paid', aboutText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    ]
    
    let cartInside = cardPopulator.map( c => <Cart CartImg={c.CartImg} color={c.сolor} fontSize={c.fontSize} name={c.name} price={c.price} aboutText={c.aboutText} />)
   

    return (
        <div className={styles.Popular}>
            <div className={styles.Popular__wrapper}>
                <div className={styles.popular__text}>
                    <div className={styles.title}>Most Popular Tools</div>
                    <div className={styles.subtitle}>Tools for the best Designers and Developers <br/>most popularly used in the world</div>
                </div>
                <div className={styles.Popular__items}>
                    {cartInside}
                </div>
                <div className={styles.btnMore}>Load more</div>
            </div>
        </div>
    )
}

export default Popular
