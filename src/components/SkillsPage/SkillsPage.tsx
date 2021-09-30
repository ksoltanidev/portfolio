import React, {useEffect, useState} from "react";
import SkillDisplay from "../skillDisplay/SkillDisplay";
import styles from './SkillsPage.module.scss';
import {hardskillType} from "../skillDisplay/SkillDisplay"

function SkillsPage() {

    const codingSkills: hardskillType[] = [
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
            name: "CSS / SASS",
            score: 5
        },
        {
            name: "C#",
            score: 3
        },
        {
            name: "Java",
            score: 2
        },
    ]

    const techSkills: hardskillType[] = [
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

    const softSkills: hardskillType[] = [
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
        <div className={styles.container}>
            <div className={styles.skillSection}>
                <h1>CODING SKILLS</h1>
                {codingSkills.map((hs, index) => (<SkillDisplay key={index} skill={hs}/>))}
            </div>
            <div className={styles.skillSection}>
                <h1>OTHER TECH SKILLS</h1>
                {techSkills.map((hs, index) => (<SkillDisplay key={index} skill={hs}/>))}
            </div>
            <div className={styles.skillSection}>
                <h1>SOFT SKILLS</h1>
                {softSkills.map((hs, index) => (<SkillDisplay key={index} skill={hs}/>))}
            </div>
        </div>
    )
}

export default SkillsPage;