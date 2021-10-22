import styles from "./Experience.module.scss";
import React from "react";
import {experienceType} from "../../types/experienceType";

type Props = {
    data: experienceType;
}

function Experience({data}: Props) {

    return (
        <div className={styles.experienceContainer}>
            <div className={styles.experienceContent}>
                <div className={styles.titleAndDate}>
                    <h2>{data.title}</h2>
                    <p className={styles.date}>{data.date}</p>
                </div>
                <h3>{data.location}</h3>
                <p className={styles.description}>{data.description}</p>
                <p className={styles.tags}>{data.tags}</p>
            </div>
        </div>
    )
}

export default Experience;