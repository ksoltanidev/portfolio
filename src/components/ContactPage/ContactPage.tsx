import React from "react";
import styles from './ContactPage.module.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ContactPage() {

    function copy(text: string){
        navigator.clipboard.writeText(text);
    }

    return (
        <div className={styles.container}>
            <h1>Get in touch:</h1>
            <p>
                <a href='https://www.linkedin.com/in/kian-soltani-155bab135' target='_blank'>Linkedin</a>
                <ContentCopyIcon className={styles.icon} onClick={() => copy('https://www.linkedin.com/in/kian-soltani-155bab135')}/>
            </p>
            <p>
                <a href="mailto: ksoltani.pro@gmail.com" target='_blank'>ksoltani.pro@gmail.com</a>
                <ContentCopyIcon className={styles.icon} onClick={() => copy('ksoltani.pro@gmail.com')}/>
            </p>
        </div>
    )
}

export default ContactPage;