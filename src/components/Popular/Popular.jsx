import React from 'react'
import Cart from '../Cart/Cart'
import styles from './Popular.module.css'

function Popular() {
    const figmsSrc = './img/cart/figma.svg';
    const sketchSrc = './img/cart/sketch.svg';
    const vscodeSrc = './img/cart/vscode.svg';
    const notionSrc = './img/cart/notion.svg';
    const slackSrc = './img/cart/slack.svg';
    const invision = './img/cart/invision.svg';

   

    return (
        <div className={styles.Popular}>
            <div className={styles.Popular__wrapper}>
                <div className={styles.popular__text}>
                    <div className={styles.title}>Most Popular Tools</div>
                    <div className={styles.subtitle}>Tools for the best Designers and Developers <br/>most popularly used in the world</div>
                </div>
                <div className={styles.Popular__items}>
                    <Cart CartImg={figmsSrc} fontSize='16px' name='FIGMA' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={sketchSrc} fontSize='16px' name='Sketch' price='Trial & Paid' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={vscodeSrc} fontSize='16px' name='Visual Studio Code' price='Free' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={notionSrc} fontSize='16px' name='Notion' price='Free & Paid' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={slackSrc}  fontSize='16px' name='Slack' price='Free & Paid' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                    <Cart CartImg={invision}  fontSize='16px' name='Invision' price='Free & Paid' aboutText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'/>
                </div>
                <div className={styles.btnMore}>Load more</div>
            </div>
        </div>
    )
}

export default Popular
