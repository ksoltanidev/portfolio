import React, {useEffect, useState} from "react";
import SkillDisplay from "../skillDisplay/SkillDisplay";
import styles from './SkillsPage.module.scss';
import {hardskillType} from "../skillDisplay/SkillDisplay"
function SkillsPage() {

    const codingSkills: hardskillType[] = [
        {
            name: "React",
            icon: "react"
        },
        {
            name: "NodeJs",
            icon: "nodejs"
        },
        {
            name: "ThreeJs",
            icon: "threejs"
        },
        {
            name: "TypeScript",
            icon: "typescript"
        },
        {
            name: "JavaScript",
            icon: "javascript"
        },
        {
            name: "Jest",
            icon: "jest"
        },
        {
            name: "CSS / SASS",
            icon: "sass"
        },
        {
            name: "C#",
            icon: "csharp"
        },
        {
            name: "Java",
            icon: "java"
        },
    ]

    const techSkills: hardskillType[] = [
        {
            name: "Docker",
            icon: "docker"
        },
        {
            name: "GIT",
            icon: "git"
        },
        {
            name: "Blender",
            icon: "blender"
        },
        {
            name: "Unity",
            icon: "unity"
        },
        {
            name: "GCP",
            icon: "gcp"
        },
    ]

    const softSkills: hardskillType[] = [
        {
            name: "Good social skills",
            icon: "social"
        },
        {
            name: "Team & Project Management",
            icon: "management"
        },
        {
            name: "Fluent english",
            icon: "english"
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