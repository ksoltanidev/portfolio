import React from "react";
import styles from './StoryPage.module.scss';
import {experienceType} from "../../types/experienceType";
import Experience from "./Experience";

function StoryPage() {

    const experiences: experienceType[] = [
        {
            date: 'summer 2020 - now',
            title: 'Lead Tech Web Developer',
            location: 'Groupe Projex - France',
            description: 'Leading the three man developer team into the development of a web app using NextJS(React) and NodeJS languages.',
            tags: 'ReactJS (NextJs), NodeJS (Directus), Docker, Jest, Google Cloud Platform, Postgresql, MongoDB, recruitment, Team & project management'
        },
        {
            date: 'fall 2014 - summer 2020',
            title: 'Computer science engineer degree',
            location: 'IMT Lille Douai (Télécom Lille)',
            description: 'I successfully completed my fifth and last year at IMT Lille Douai. A french computer science engineering school.',
            tags: 'Engineer degree'
        },
        {
            date: 'summer 2019 - summer 2020',
            title: 'web Developer Apprentice',
            location: 'Groupe Projex - France',
            description: 'Teaming with a second apprentice developer, I conducted and developed a few web/C# projects.' +
                ' I organized meetings with the (insider) client and learned basics about project management.' +
                ' I created a small Intranet for the company using NodeJS, ReactJS and a PostgreSQL database.' +
                ' This project was my first web project. It was a very good opportunity to acquire some important knowledge about web applications (REST API, databases, password hashing/salting etc.)' +
                ' as well as a first experience with Cloud hosting (Google Cloud Platform).',
            tags: 'NodeJS, Express, ReactJS, Git, Google Cloud Platform, PostgreSQL, MongoDB'
        },
        {
            date: 'summer 2018 - winter 2019',
            title: 'C# Developer intern',
            location: 'Groupe Projex - France',
            description: 'This was first developer experience inside a company. I autonomously learned .NET language in order to create multiple small windows programs as well as a few Autodesk plugins.',
            tags: 'C#, .NET, Autodesk Navisworks, OfficeAPI'
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.timelineContainer}>
                    {experiences && experiences.map(exp => (
                        <Experience data={exp}/>
                    ))}
            </div>
        </div>
    )
}

export default StoryPage;