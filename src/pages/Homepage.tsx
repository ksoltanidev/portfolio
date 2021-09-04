import React from "react";
import styles from './Homepage.module.scss';

import ThreeScene from "../components/threeScene/ThreeScene";


function Homepage() {
 
    return (
        <div className={styles.hompageContainer}>
            <ThreeScene/>
            This is Homepage
        </div>
    )
}

export default Homepage;