import React, {useState} from "react";
import styles from './Page.module.scss';
import ThreeScene from "../components/threeScene/ThreeScene";
import Menu from "../components/menu/Menu";
import PageEnum from "../types/PageEnum";
import HomePage from "../components/HomePage/HomePage";
import GithubLink from "../components/GithubLink/GithubLink";
import SkillsPage from "../components/SkillsPage/SkillsPage";
import ContactPage from "../components/ContactPage/ContactPage";
import StoryPage from "../components/StoryPage/StoryPage";

function Page() {
    const [page, setPage] = useState<PageEnum>(PageEnum.HOME)

    function renderContent() {
        if (page === PageEnum.HOME)
            return <HomePage/>
        else if (page === PageEnum.SKILLS)
            return <SkillsPage/>
        else if (page === PageEnum.CONTACT)
            return <ContactPage/>
        else if (page === PageEnum.STORY)
            return <StoryPage/>
        else return <HomePage/>
    }

    return (
        <div className={styles.hompageContainer}>
            <div className={styles.threeSceneContainer}>
                <ThreeScene currentPage={page}/>
            </div>
            <div className={styles.webContent}>
                <Menu onPageClick={setPage} currentPage={page}/>
                <div className={styles.pageContent}>
                    {renderContent()}
                </div>
                <div className={styles.githubLink}>
                    <GithubLink/>
                </div>
            </div>
        </div>
    )
}

export default Page;


