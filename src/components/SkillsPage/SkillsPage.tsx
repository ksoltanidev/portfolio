import React, { useEffect, useState } from "react";
import SkillDisplay from "../skillDisplay/SkillDisplay";
import styles from './SkillsPage.module.scss';
import {hardskillType} from "../skillDisplay/SkillDisplay"

function SkillsPage() {

    const hardskills : hardskillType[] = [
        {
            name: "React",
            score: 4
        },
        {
            name: "NodeJS",
            score: 3
        },
        {
            name: "Javascript",
            score: 5
        },
        {
            name: "HTML",
            score: 5
        },
        {
            name: "CSS",
            score: 5
        }
    ]

    return (
        <div className={styles.content}>
            {hardskills.map((hs, index) => (<SkillDisplay key={index} skill={hs}/>))}
        </div>
    )
}

export default SkillsPage;