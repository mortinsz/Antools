import React from 'react'
import styles from './Mainscreen.module.css'
import ButtonFill from '../../components/Button/Button';

function Mainscreen() {
    return (
        <div className={styles.Mainscreen}>
            <div className={styles.Mainscreen__wrapper}>
                <div className={styles.Mainscreen__text}>
                    <div className={styles.title}>Awesome tools for Designer & Developer.</div>
                    <div className={styles.subtitle}>Antool is a web collection of information on paid or free Design and Development tools</div>
                    <div className={styles.search}>
                        <div className={styles.inputwrapper}>
                            <div className={styles.search__svg}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-opacity="0.38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21 20.9999L16.65 16.6499" stroke="white" stroke-opacity="0.38" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="text"  className={styles.input} placeholder='find more than 430+ tools...'/>
                        </div>
                        <ButtonFill text='Search'/>
                    
                    </div>
                    <div className={styles.socials}>
                        <div>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9791 29.7458V18.1347H22.8962L23.4784 13.5887H18.9791V10.693C18.9791 9.38116 19.3446 8.483 21.2273 8.483H23.613V4.42991C22.4522 4.30552 21.2855 4.24545 20.1181 4.25C16.6557 4.25 14.2786 6.36366 14.2786 10.2439V13.5802H10.387V18.1262H14.2871V29.7458H18.9791Z" fill="white" fill-opacity="0.78"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9985 11.0654C16.159 11.0654 14.3948 11.7962 13.094 13.0969C11.7933 14.3977 11.0625 16.1619 11.0625 18.0014C11.0625 19.841 11.7933 21.6052 13.094 22.9059C14.3948 24.2067 16.159 24.9374 17.9985 24.9374C19.838 24.9374 21.6022 24.2067 22.903 22.9059C24.2037 21.6052 24.9345 19.841 24.9345 18.0014C24.9345 16.1619 24.2037 14.3977 22.903 13.0969C21.6022 11.7962 19.838 11.0654 17.9985 11.0654ZM17.9985 22.5059C16.8034 22.5059 15.6573 22.0312 14.8123 21.1862C13.9672 20.3411 13.4925 19.195 13.4925 17.9999C13.4925 16.8049 13.9672 15.6587 14.8123 14.8137C15.6573 13.9687 16.8034 13.4939 17.9985 13.4939C19.1936 13.4939 20.3397 13.9687 21.1847 14.8137C22.0298 15.6587 22.5045 16.8049 22.5045 17.9999C22.5045 19.195 22.0298 20.3411 21.1847 21.1862C20.3397 22.0312 19.1936 22.5059 17.9985 22.5059Z" fill="white" fill-opacity="0.78"/>
                            <path d="M25.209 12.4275C26.102 12.4275 26.826 11.7035 26.826 10.8105C26.826 9.91744 26.102 9.19348 25.209 9.19348C24.316 9.19348 23.592 9.91744 23.592 10.8105C23.592 11.7035 24.316 12.4275 25.209 12.4275Z" fill="white" fill-opacity="0.78"/>
                            <path d="M30.7995 9.16645C30.4523 8.26972 29.9216 7.45537 29.2415 6.77553C28.5614 6.0957 27.7469 5.56535 26.85 5.21845C25.8005 4.82448 24.6918 4.61146 23.571 4.58845C22.1265 4.52545 21.669 4.50745 18.006 4.50745C14.343 4.50745 13.8735 4.50745 12.441 4.58845C11.3211 4.61028 10.2131 4.82335 9.16501 5.21845C8.26791 5.56495 7.45315 6.09515 6.77301 6.77504C6.09286 7.45493 5.56235 8.26948 5.21551 9.16645C4.82146 10.2159 4.60893 11.3247 4.58701 12.4454C4.52251 13.8884 4.50301 14.3459 4.50301 18.0104C4.50301 21.6734 4.50301 22.1399 4.58701 23.5754C4.60951 24.6974 4.82101 25.8044 5.21551 26.8559C5.56332 27.7526 6.09435 28.5668 6.77466 29.2466C7.45497 29.9264 8.2696 30.4568 9.16651 30.8039C10.2127 31.2137 11.3211 31.442 12.444 31.4789C13.8885 31.5419 14.346 31.5614 18.009 31.5614C21.672 31.5614 22.1415 31.5614 23.574 31.4789C24.6947 31.4562 25.8034 31.2437 26.853 30.8505C27.7496 30.5027 28.5639 29.9719 29.244 29.2919C29.924 28.6119 30.4548 27.7976 30.8025 26.9009C31.197 25.851 31.4085 24.7439 31.431 23.622C31.4955 22.1789 31.515 21.7214 31.515 18.0569C31.515 14.3924 31.515 13.9274 31.431 12.4919C31.4135 11.3554 31.1999 10.2303 30.7995 9.16645ZM28.9725 23.4644C28.9628 24.3289 28.805 25.1853 28.506 25.9964C28.2807 26.5798 27.9359 27.1094 27.4936 27.5515C27.0513 27.9935 26.5214 28.338 25.938 28.5629C25.1358 28.8606 24.2885 29.0184 23.433 29.0294C22.008 29.0954 21.606 29.1119 17.952 29.1119C14.295 29.1119 13.9215 29.1119 12.4695 29.0294C11.6144 29.019 10.7675 28.8612 9.96601 28.5629C9.38054 28.3394 8.84851 27.9955 8.40434 27.5534C7.96017 27.1113 7.61376 26.5809 7.38751 25.9964C7.09268 25.194 6.93497 24.3477 6.92101 23.4929C6.85651 22.0679 6.84151 21.6659 6.84151 18.0119C6.84151 14.3564 6.84151 13.9829 6.92101 12.5294C6.9307 11.6655 7.08849 10.8096 7.38751 9.99895C7.84501 8.81545 8.78251 7.88395 9.96601 7.43095C10.7679 7.13416 11.6145 6.97639 12.4695 6.96445C13.896 6.89995 14.2965 6.88195 17.952 6.88195C21.6075 6.88195 21.9825 6.88195 23.433 6.96445C24.2886 6.97474 25.136 7.13255 25.938 7.43095C26.5214 7.65636 27.0512 8.00125 27.4935 8.44349C27.9357 8.88573 28.2806 9.41555 28.506 9.99895C28.8008 10.8014 28.9585 11.6477 28.9725 12.5024C29.037 13.9289 29.0535 14.3294 29.0535 17.9849C29.0535 21.6389 29.0535 22.0319 28.989 23.466H28.9725V23.4644Z" fill="white" fill-opacity="0.78"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4495 11.9956C29.469 12.2581 29.469 12.5191 29.469 12.7801C29.469 20.7676 23.3895 29.9716 12.279 29.9716C8.856 29.9716 5.676 28.9801 3 27.2581C3.486 27.3136 3.954 27.3331 4.4595 27.3331C7.17899 27.3396 9.82147 26.4303 11.961 24.7516C10.7001 24.7287 9.47786 24.3128 8.46486 23.5617C7.45185 22.8106 6.69868 21.7619 6.3105 20.5621C6.684 20.6176 7.059 20.6551 7.452 20.6551C7.9935 20.6551 8.538 20.5801 9.0435 20.4496C7.67514 20.1733 6.44471 19.4316 5.56143 18.3506C4.67815 17.2696 4.19654 15.916 4.1985 14.5201V14.4451C5.004 14.8936 5.9385 15.1741 6.9285 15.2116C6.09913 14.6604 5.41908 13.9126 4.94901 13.0348C4.47894 12.1569 4.23347 11.1763 4.2345 10.1806C4.2345 9.05857 4.533 8.02957 5.0565 7.13257C6.57471 9.0001 8.46825 10.5279 10.6145 11.6171C12.7608 12.7062 15.1118 13.3324 17.5155 13.4551C17.4225 13.0051 17.3655 12.5386 17.3655 12.0706C17.3651 11.277 17.5211 10.4912 17.8246 9.75793C18.1281 9.0247 18.5732 8.35848 19.1343 7.79735C19.6954 7.23622 20.3616 6.79118 21.0949 6.48768C21.8281 6.18418 22.6139 6.02817 23.4075 6.02857C25.1475 6.02857 26.718 6.75756 27.822 7.93657C29.1747 7.67499 30.4718 7.1812 31.656 6.47706C31.2051 7.87329 30.2606 9.05722 28.9995 9.80707C30.1992 9.67023 31.3717 9.35474 32.478 8.87107C31.6517 10.0757 30.6278 11.1321 29.4495 11.9956Z" fill="white" fill-opacity="0.78"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.Mainscreen__img}>
                    <img src="./img/mainSvgs/Vector.svg" alt=""    className={styles.svg_1}/>
                    <img src="./img/mainSvgs/Vector-1.svg" alt=""  className={styles.svg_2}/>
                    <img src="./img/mainSvgs/Vector-2.svg" alt=""  className={styles.svg_3}/>
                    <img src="./img/mainSvgs/Vector-3.svg" alt=""  className={styles.svg_4}/>
                    <img src="./img/mainSvgs/Vector-4.svg" alt=""  className={styles.svg_5}/>
                    <img src="./img/mainSvgs/Vector-5.svg" alt=""  className={styles.svg_6}/>
                    <img src="./img/mainSvgs/Vector-6.svg" alt=""  className={styles.svg_7}/>
                    <img src="./img/mainSvgs/Vector-7.svg" alt=""  className={styles.svg_8}/>
                    <img src="./img/mainSvgs/Vector-8.svg" alt=""  className={styles.svg_9}/>
                    <img src="./img/mainSvgs/Vector-9.svg" alt=""  className={styles.svg_10}/>
                    <img src="./img/mainSvgs/Vector-10.svg" alt="" className={styles.svg_11} />
                    <img src="./img/mainSvgs/Vector-11.svg" alt="" className={styles.svg_12} />
                    <img src="./img/mainSvgs/Vector-12.svg" alt="" className={styles.svg_13} />
                    <img src="./img/mainSvgs/Vector-13.svg" alt="" className={styles.svg_14} />
                    <img src="./img/mainSvgs/Vector-14.svg" alt="" className={styles.svg_15} />
                    <img src="./img/mainSvgs/Vector-15.svg" alt="" className={styles.svg_16} />
                    {/* <img src="./img/mainSvgs/Vector-16.svg" alt="" className={styles.svg_17} /> */}
                    {/* <img src="./img/mainSvgs/Vector-17.svg" alt="" className={styles.svg_18} /> */}
                    {/* <img src="./img/mainSvgs/Vector-18.svg" alt="" className={styles.svg_19} />
                    <img src="./img/mainSvgs/Vector-19.svg" alt="" className={styles.svg_20} />
                    <img src="./img/mainSvgs/Vector-20.svg" alt="" className={styles.svg_21} />
                    <img src="./img/mainSvgs/Vector-21.svg" alt="" className={styles.svg_22} /> */}
                    <img src="./img/mainSvgs/Vector-22.svg" alt="" className={styles.svg_23} />
                    <img src="./img/mainSvgs/Vector-23.svg" alt="" className={styles.svg_24} />
                    <img src="./img/mainSvgs/Vector-24.svg" alt="" className={styles.svg_25} />
                </div>
            </div>
        </div>
    )
}

export default Mainscreen
