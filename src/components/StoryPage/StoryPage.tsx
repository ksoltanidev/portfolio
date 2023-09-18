import React from "react";
import styles from './StoryPage.module.scss';
import {experienceType} from "../../types/experienceType";
import Experience from "./Experience";

function StoryPage() {

    const experiences: experienceType[] = [
        {
            date: 'march 2023 - august 2023',
            title: 'Lead Frontend Developer',
            location: 'RapidFlyer - Lille, France',
            description: <>
            <span>Rapid-Flyer is one of the first 100% french online printing platform. I joined their team for a period of 6 months to provide guidance and assistance in pursuing their ambitions:</span>
                <ul><li>Critical analysis of existing projects and various technical recommendations.</li>
                    <li>Project breakdown and development task organization.</li>
                    <li>Frontend feature development,</li>
                    <li>Training of new team members for a smooth transition.</li>
                </ul>
            <span>In a proactive capacity, I proposed and implemented several new projects:</span>
                <ul><li>Creation of a React component library (design system) for reusing components across the brand's various websites. A long-term investment.</li>
                    <li>Migration of their Zendesk help center to a completely new frontend using Zendesk API.</li>
                    <li>Upgrade of the main website to a more robust version with Typescript.</li>
                    <li>Implementation of a Headless CMS (Strapi) for managing marketing content across the sites.</li>
                </ul>
            </>,
            tags: 'ReactJS (NextJs), NodeJS (Directus), Docker, Jest, Google Cloud Platform, Postgresql, MongoDB, recruitment, Team & project management'
        },
        {
            date: 'summer 2020 - february 2023',
            title: 'Lead Tech Web Developer',
            location: 'Groupe Projex - Lille, France',
            description: <>
                <span>Groupe Projex is the 7th largest French technical engineering consultancy in 2022. As part of its digitalization strategy, I played a key role in the creation of a development service from inception to completion:</span>

                <ul><li>Research and selection of technical stacks.</li>
                    <li>
                Collaborator recruitment process.</li>
                    <li>
                Strategic meetings, gathering of requirements, and creation of specifications.</li>
                    <li>
                Task organization and agile development planning.</li>
                    <li>
                Design and development of solutions.</li>
                    <li>
                Deployment and maintenance of applications.</li>
                    <li>
                        Ongoing training on trending technologies.</li></ul>
            </>,
            tags: 'ReactJS (NextJs), NodeJS (Directus), Typescript, Jira, Docker, Jest, Google Cloud Platform, Postgresql, MongoDB, recruitment, Team & project management'
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
            location: 'Groupe Projex - Lille, France',
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
            location: 'Groupe Projex - Lille, France',
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