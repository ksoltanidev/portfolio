import styles from './Menu.module.scss';
import LanguageIcon from '@mui/icons-material/Language';
import PageEnum from '../../types/PageEnum';
//import HomeIcon from '@mui/icons-material/Home';

type Props = {
    onPageClick: React.Dispatch<React.SetStateAction<PageEnum>>
    currentPage: PageEnum,
}

function Menu({ onPageClick, currentPage }: Props) {

    function getMenuClassName(page: PageEnum){
        if (page === currentPage) return styles.currentPageLink;
        else return styles.notCurrentPageLink;
    }

    return (
        <div className={styles.menu}>
            <ul>
                <li className={getMenuClassName(PageEnum.HOME)}
                    onClick={() => onPageClick(PageEnum.HOME)}>
                    Accueil
                </li>
                <li className={getMenuClassName(PageEnum.STORY)}
                    onClick={() => onPageClick(PageEnum.STORY)}>
                    Parcours
                </li>
                <li className={getMenuClassName(PageEnum.SKILLS)}
                    onClick={() => onPageClick(PageEnum.SKILLS)}>
                    Compétences
                </li>
                {/* <li onClick={() => onPageClick(PageEnum.PROJECTS)}>Mes travaux</li> */}
                <li className={getMenuClassName(PageEnum.CONTACT)}
                    onClick={() => onPageClick(PageEnum.CONTACT)}>
                    Contact
                </li>
                <li><LanguageIcon className={styles.icon} /><span>EN</span></li>
            </ul>
        </div>
    );
}

export default Menu;
