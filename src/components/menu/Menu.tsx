import styles from './Menu.module.scss';
import LanguageIcon from '@mui/icons-material/Language';
import PageEnum from '../../types/PageEnum';
//import HomeIcon from '@mui/icons-material/Home';

type Props = {
    onPageClick: React.Dispatch<React.SetStateAction<PageEnum>>
}

function Menu({onPageClick}: Props) {

    return (
        <div className={styles.menu}>
            <ul>
                <li onClick={() => onPageClick(PageEnum.HOME)}>Accueil</li>
                <li onClick={() => onPageClick(PageEnum.STORY)}>Mon parcours</li>
                <li onClick={() => onPageClick(PageEnum.SKILLS)}>Mes compétences</li>
                <li onClick={() => onPageClick(PageEnum.PROJECTS)}>Mes travaux</li>
                <li onClick={() => onPageClick(PageEnum.CONTACT)}>Me contacter</li>
                <li><LanguageIcon className={styles.icon} /><span>FR</span></li>
            </ul>
        </div>
    );
}

export default Menu;
