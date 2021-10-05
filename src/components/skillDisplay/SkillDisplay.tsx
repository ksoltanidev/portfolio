import React, {useEffect, useState} from "react";
import styles from './SkillDisplay.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {Score} from "@mui/icons-material";

export type hardskillType = {
    name: string,
}

type Props = {
    skill: hardskillType,
}

function SkillDisplay({skill}: Props) {

    // function getScoreClass() {
    //     if (skill.score) {
    //         if (skill.score > 4) return styles.score5;
    //         if (skill.score > 3) return styles.score4;
    //         if (skill.score > 2) return styles.score3;
    //         if (skill.score > 1) return styles.score2;
    //         if (skill.score > 0) return styles.score1;
    //         else return styles.score0;
    //     } else return styles.noScore;
    // }

    return (
        <div className={styles.skillContent}>
            <GitHubIcon className={styles.skillIcon}/>
            <div className={styles.titleAndStars}>
                <h3>{skill.name}</h3>
            </div>
        </div>
    )
}

export default SkillDisplay;