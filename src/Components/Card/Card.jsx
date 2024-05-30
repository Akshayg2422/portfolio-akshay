import React from 'react'
import akshay from '../assets/Images/akshay.png'
import styles from '../Components/Card.module.css'

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.cta}>
                <img src={akshay} alt="" />
                <div className={styles.text}>
                    <h2>Akshay G</h2>
                    {/* <p>ipsa officiis a animi esse explicabo repudiandae in, blanditiis cum quam magni? Voluptates illum earum praesentium veniam.</p> */}
                    <p>8754070533 akshayg2422@gmail.com Gummidipoondi, Chennai</p>
                </div>
            </div>
        </div>
    )
}

export default Card