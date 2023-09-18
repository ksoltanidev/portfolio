import styles from './Menu.module.scss';
import PageEnum from '../../types/PageEnum';

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
                    Home
                </li>
                <li className={getMenuClassName(PageEnum.STORY)}
                    onClick={() => onPageClick(PageEnum.STORY)}>
                    Experiences
                </li>
                <li className={getMenuClassName(PageEnum.SKILLS)}
                    onClick={() => onPageClick(PageEnum.SKILLS)}>
                    Skills
                </li>
                {/* <li onClick={() => onPageClick(PageEnum.PROJECTS)}>Mes travaux</li> */}
                <li className={getMenuClassName(PageEnum.CONTACT)}
                    onClick={() => onPageClick(PageEnum.CONTACT)}>
                    Contact
                </li>
            </ul>
        </div>
    );
}

export default Menu;
