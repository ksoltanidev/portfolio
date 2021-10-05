import React, {useEffect, useState} from "react";
import SkillDisplay from "../skillDisplay/SkillDisplay";
import styles from './SkillsPage.module.scss';
import {hardskillType} from "../skillDisplay/SkillDisplay"
function SkillsPage() {

    const codingSkills: hardskillType[] = [
        {
            name: "React",
        },
        {
            name: "NodeJs",
        },
        {
            name: "ThreeJs",
        },
        {
            name: "TypeScript",
        },
        {
            name: "JavaScript",
        },
        {
            name: "HTML",
        },
        {
            name: "CSS / SASS",
        },
        {
            name: "C#",
        },
        {
            name: "Java",
        },
    ]

    const techSkills: hardskillType[] = [
        {
            name: "Docker",
        },
        {
            name: "GIT",
        },
        {
            name: "Blender",
        },
        {
            name: "Unity",
        },
        {
            name: "GCP",
        },
    ]

    const softSkills: hardskillType[] = [
        {
            name: "Good social skills",
        },
        {
            name: "Team & Project Management",
        },
        {
            name: "Fluent english",
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