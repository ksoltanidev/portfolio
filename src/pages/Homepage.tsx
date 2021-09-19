import React from "react";
import styles from './Homepage.module.scss';
import LanguageIcon from '@mui/icons-material/Language';
import ThreeScene from "../components/threeScene/ThreeScene";


function Homepage() {

    return (
        <div className={styles.hompageContainer}>
            <div className={styles.threeSceneContainer}>
                <ThreeScene />
            </div>
            <div className={styles.webContent}>
                <div className={styles.menu}>
                    <ul>
                        <li>Mon parcours</li>
                        <li>Mes compétences</li>
                        <li>Mes travaux</li>
                        <li>Me contacter</li>
                        <li><LanguageIcon className={styles.icon}/><span>FR</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Homepage;