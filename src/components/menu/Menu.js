import React, { useState, useRef, useContext } from "react";
import { CursorContext } from "../cursorContext/cursorContext";
import styles from './Menu.module.scss';

import Losange from '../losange/losange';
import ThreeScene from "../threeScene/ThreeScene";
import {Link} from "react-router-dom";
  



function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [, setCursor] = useContext(CursorContext);
    const [isMenuItemOnLeft, SetIsMenuItemOnLeft] = useState([true,false,true,false]);
    const [rerender, setRerender] = useState(true);
    const menuButtonRef = useRef(null);

    function getMenuOpenClass(state) {
        if (state) return styles.menuOpen;
        else return styles.menuClose;
    }

    function getMenuItemsOpenClass(state) {
        if (state) return styles.menuItemOpen;
        else return styles.menuItemClose;
    }
    
    function getSceneOpenClass(state) {
        if (state) return styles.sceneOpen;
        else return styles.sceneClose;
    }

    function getContentOpenClass(state) {
        if (state) return styles.buttonOpen;
        else return styles.buttonClose;
    }

    function getClassOpen(state){
        if (state) return styles.openClass;
        else return styles.closeClass;
    }

    const toggleCursor = () => {
        const boundingBox =  menuButtonRef.current.getBoundingClientRect();
/*         console.log("LEFT " + menuButtonRef.current.getBoundingClientRect().left);
        console.log("TOP " + menuButtonRef.current.getBoundingClientRect().top);
        console.log("C LEFT " + (boundingBox.left + boundingBox.width/2));
        console.log("C TOP " + (boundingBox.top + boundingBox.height/2));
        
        console.log("C width " + boundingBox.width);
        console.log("C width " + boundingBox.height);
        console.log(boundingBox); */
        setCursor(({ active }) => ({
            active: {
                value: !(active.value),
                x: boundingBox.left + boundingBox.width/2,
                y: boundingBox.top + boundingBox.height/2,
            }
        }));
    };

    function getMenuItemClass(state){
        let r = Math.floor(Math.random() * Math.floor(2));
         if (state) {
            if (r == 0) return [styles.hoverFromLeft, styles.color].join(' ');;
            return [styles.hoverFromLeft, styles.color].join(' ');;
        }
        else { 
            if (r == 0) return [styles.hoverFromRight, styles.color].join(' ');;
            return [styles.hoverFromRight, styles.color].join(' ');;
        }
/*          if (state) {
            if (r == 0) return [styles.hoverFromLeft, styles.color1].join(' ');
            return [styles.hoverFromLeft, styles.color2].join(' ');
        }
        else { 
            if (r == 0) return [styles.hoverFromRight, styles.color1].join(' ');
            return [styles.hoverFromRight, styles.color2].join(' ');
        } */
    }

    function toggleMenuHover(menuIndex){
        let isMenuItemOnLeft_tmp = isMenuItemOnLeft;
        isMenuItemOnLeft_tmp[menuIndex] = !isMenuItemOnLeft_tmp[menuIndex];
        SetIsMenuItemOnLeft(isMenuItemOnLeft_tmp);
        setRerender(!rerender);
    }

    return (
        <div className={styles.menuContainer}>
            <div className={[styles.menu, getMenuOpenClass(menuOpen)].join(' ')}>
            </div>
            <div className={[styles.sceneContainer, getSceneOpenClass(menuOpen)].join(' ')}>
            {/* <ThreeScene />  */}
            </div>
            <div className={styles.content}>
                <ul className={[styles.menuItems, getClassOpen(menuOpen)].join(' ')}>
                    <li className={getMenuItemsOpenClass(menuOpen)}><Link to="/aboutme" style={{ textDecoration: 'none' }}><div className={getMenuItemClass(isMenuItemOnLeft[0])} onMouseOver={() => toggleMenuHover(0)}>A PROPOS DE MOI</div></Link></li>
                    <li className={getMenuItemsOpenClass(menuOpen)}><Link to="/portofolio" style={{ textDecoration: 'none' }}><div className={getMenuItemClass(isMenuItemOnLeft[1])} onMouseOver={() => toggleMenuHover(1)}>MES PROJETS</div></Link></li>
                    <li className={getMenuItemsOpenClass(menuOpen)}><Link to="/contacts" style={{ textDecoration: 'none' }}><div className={getMenuItemClass(isMenuItemOnLeft[2])} onMouseOver={() => toggleMenuHover(2)}>INFOS ET CONTACT</div></Link></li>
                    <li className={getMenuItemsOpenClass(menuOpen)}><Link to="/freestyle" style={{ textDecoration: 'none' }}><div className={getMenuItemClass(isMenuItemOnLeft[3])} onMouseOver={() => toggleMenuHover(3)}>FREESTYLE</div></Link></li>
                </ul>
                <div className={[styles.menuButton, getContentOpenClass(menuOpen)].join(' ')}
                onClick={() => setMenuOpen(!menuOpen)}
                onMouseEnter={toggleCursor}
                onMouseLeave={toggleCursor}
                ref={menuButtonRef}>
                    <Losange />
                </div>
            </div>

        </div>
    );
}

export default Menu;
