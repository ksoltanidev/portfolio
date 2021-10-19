import styles from "./Experience.module.scss";
import React from "react";
import {experienceType} from "../../types/experienceType";

type Props = {
    data: experienceType;
}

function Experience({data}: Props) {

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.dateContainer}>{data.start_date}</div>
            <div className={styles.dotContainer}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.experienceContent}>
                <h2>{data.title}</h2>
                <h3>{data.location}</h3>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Experience;