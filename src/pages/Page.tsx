import React, { useEffect, useState } from "react";
import styles from './Page.module.scss';
import ThreeScene from "../components/threeScene/ThreeScene";
import Menu from "../components/menu/Menu";
import PageEnum from "../types/PageEnum";
import HomePage from "../components/HomePage/HomePage";
import GithubLink from "../components/GithubLink/GithubLink";

function Page() {
    const [page, setPage] = useState<PageEnum>(PageEnum.HOME)

    function renderContent() {
        if (page === PageEnum.HOME)
            return <HomePage/>
            

        else {
            return (
                <div>

                </div>
            )
        }
    }

    return (
        <div className={styles.hompageContainer}>
            <div className={styles.threeSceneContainer}>
                <ThreeScene currentPage={page} />
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


