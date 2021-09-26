import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './GithubLink.module.scss';

function GithubLink() {


    return (
        <div className={styles.content}>
            <a href="https://github.com/ksoltanidev/portfolio">
                <GitHubIcon className={styles.githubIcon}/>
                <p>Check the source code</p>
            </a>
        </div>
    )
}

export default GithubLink;