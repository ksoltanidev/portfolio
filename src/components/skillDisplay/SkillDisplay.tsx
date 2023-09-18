import React from "react";
import styles from './SkillDisplay.module.scss';
import { ReactComponent as Git} from "./icons/git.svg";
import { ReactComponent as Blender} from "./icons/blender.svg";
import { ReactComponent as Csharp} from "./icons/csharp.svg";
import { ReactComponent as Docker} from "./icons/docker.svg";
import { ReactComponent as English} from "./icons/english.svg";
import { ReactComponent as Gcp} from "./icons/gcp.svg";
import { ReactComponent as Html} from "./icons/html.svg";
import { ReactComponent as Java} from "./icons/java.svg";
import { ReactComponent as Javascript} from "./icons/javascript.svg";
import { ReactComponent as Jest} from "./icons/jest.svg";
import { ReactComponent as Management} from "./icons/management.svg";
import { ReactComponent as Nodejs} from "./icons/nodejs.svg";
import { ReactComponent as ReactIcon} from "./icons/react.svg";
import { ReactComponent as Sass} from "./icons/sass.svg";
import { ReactComponent as Social} from "./icons/social.svg";
import { ReactComponent as Threejs} from "./icons/threejs.svg";
import { ReactComponent as Typescript} from "./icons/typescript.svg";
import { ReactComponent as Unity} from "./icons/unity.svg";

export type hardskillType = {
    name: string,
    icon?: string,
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

    function RenderIcon(icon: string){
        if (icon === "blender") return <Blender className={styles.skillIcon}/>
        if (icon === "unity") return <Unity className={styles.skillIcon}/>
        else if (icon === "typescript") return <Typescript className={styles.skillIcon}/>
        else if (icon === "threejs") return <Threejs className={styles.skillIcon}/>
        else if (icon === "social") return <Social className={styles.skillIcon}/>
        else if (icon === "sass") return <Sass className={styles.skillIcon}/>
        else if (icon === "react") return <ReactIcon className={styles.skillIcon}/>
        else if (icon === "nodejs") return <Nodejs className={styles.skillIcon}/>
        else if (icon === "management") return <Management className={styles.skillIcon}/>
        else if (icon === "javascript") return <Javascript className={styles.skillIcon}/>
        else if (icon === "jest") return <Jest className={styles.skillIcon}/>
        else if (icon === "java") return <Java className={styles.skillIcon}/>
        else if (icon === "html") return <Html className={styles.skillIcon}/>
        else if (icon === "gcp") return <Gcp className={styles.skillIcon}/>
        else if (icon === "english") return <English className={styles.skillIcon}/>
        else if (icon === "docker") return <Docker className={styles.skillIcon}/>
        else if (icon === "csharp") return <Csharp className={styles.skillIcon}/>
        else return <Git className={styles.skillIcon}/>
    }

    return (
        <div className={styles.skillContent}>
            {skill.icon && RenderIcon(skill.icon)}
            <div className={styles.titleAndStars}>
                <h3>{skill.name}</h3>
            </div>
        </div>
    )
}

export default SkillDisplay;