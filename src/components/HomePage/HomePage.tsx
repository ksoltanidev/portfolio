import React, { useEffect, useState } from "react";
import styles from './HomePage.module.scss';

function HomePage() {
    

    return (
        <div className={styles.content}>
            <h1>Hello there!</h1>
            <p>My name is Kian. I'm a passionate (full stack) developper. I love to learn and make digital stuff with other people.</p>
        </div>
    )
}

export default HomePage;