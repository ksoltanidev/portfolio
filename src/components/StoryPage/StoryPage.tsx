import React from "react";
import styles from './StoryPage.module.scss';
import {experienceType} from "../../types/experienceType";
import Experience from "./Experience";

function StoryPage() {

    const experiences: experienceType[] = [
        {
            start_date: 'summer 2020',
            title: 'Lead Tech Web Developer',
            location: 'Groupe Projex - France',
            description: 'bla bla bla blaadjdqd qpod oq pzjzqncp cd'
        },
        {
            start_date: 'summer 2019',
            title: 'Computer science engineer degree',
            location: 'IMT Lille Douai (Télécom Lille)',
            description: 'I completed my fifth and last year at IMT Lille Douai.',
            isEvent: true,
        },
        {
            start_date: 'summer 2019',
            title: 'C# & web Developer Apprentice',
            location: 'Groupe Projex - France',
            description: 'bla bla bla blaadjdqd qpod oq pzjzqncp cd'
        },
        {
            start_date: 'summer 2018',
            end_date: 'winter 2019',
            title: 'C# Developer intern',
            location: 'Groupe Projex - France',
            description: 'bla bla bla blaadjdqd qpod oq pzjzqncp cd'
        },
        {
            start_date: 'summer 2019',
            title: 'C# & web Developer Apprentice',
            location: 'Groupe Projex - France',
            description: 'bla bla bla blaadjdqd qpod oq pzjzqncp cd'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.timelineContainer}>
                <div className={styles.line}/>
                <div className={styles.experiences}>
                    {experiences && experiences.map(exp => (
                        <Experience data={exp}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StoryPage;