import React, { useEffect, useState } from "react";
import styles from './Homepage.module.scss';
import ThreeScene from "../components/threeScene/ThreeScene";
import Menu from "../components/menu/Menu";
import PageEnum from "../types/PageEnum";


function Homepage() {
    const [page, setPage] = useState<PageEnum>(PageEnum.HOME)

    useEffect(() => {
        console.log("Page changed", page)
    },[page])

    return (
        <div className={styles.hompageContainer}>
            <div className={styles.threeSceneContainer}>
                <ThreeScene currentPage={page}/>
            </div>
            <div className={styles.webContent}>
                <Menu onPageClick={setPage}/>
            </div>

        </div>
    )
}

export default Homepage;


