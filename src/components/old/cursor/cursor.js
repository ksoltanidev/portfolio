import React, {useState, useEffect, useContext }  from "react";
import styles from './cursor.module.scss';
import { CursorContext } from "../cursorContext/cursorContext";
import lerp from "lerp";

function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [cursorVisible, setCursorVisible] = useState("hidden");
    const [cursor] = useContext(CursorContext);

    let positiontmp = {x: 0, y: 0};
    let mousePosition = {x: 0, y: 0};
    let cursorRotateDeg = 0;
    const easeRate = 0.3;
  
    useEffect(() => {
        addEventListeners();
        const interval = setInterval(moveCursor,1000/60);

        return () => {
            removeEventListeners();
            clearInterval(interval);
        }
    }, []);
 
    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
    };
 
    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
    };

    function onMouseEnter() {
        setCursorVisible("visible");
    }

    function onMouseLeave() {
        setCursorVisible("hidden");
    }
    function moveCursor() {
        let newX = lerp(positiontmp.x, mousePosition.x, easeRate);
        let newY = lerp(positiontmp.y, mousePosition.y, easeRate);
        positiontmp = {x: newX, y: newY};
        setPosition({x: newX, y: newY});
    }
 
    const onMouseMove = (e) => {
        mousePosition = {x: e.clientX, y:e.clientY};
    };

    function getActiveCursorClass() {
        //console.log("CURSOR " + cursor.active.value);
        if (cursor.active.value) {
            let dist = {
                x: cursor.active.x - position.x,
                y: cursor.active.y - position.y,
            }
            cursorRotateDeg = Math.atan(dist.y/dist.x)*(180/Math.PI) - 90;
            if (dist.x < 0) cursorRotateDeg = cursorRotateDeg + 180;
            return styles.activeCursor;
        } else {
            cursorRotateDeg = 0;
            return "";
        }
    }

    return (
        <div className={styles.cursorContainer}>
{/*             <div className={[styles.losangeContainer, getActiveCursorClass()].join(' ')}
                style={{ left: `${position.x}px`, top: `${position.y}px`, visibility: `${cursorVisible}` }}>  */}
            <div className={[styles.losangeContainer, getActiveCursorClass()].join(' ')}
                style={{ left: `${position.x}px`, top: `${position.y}px`, visibility: `${cursorVisible}`
                , transform: `translate(-50%, -50%) scale(${cursor.active.value ? 0.5 : 1}) rotate(${cursor.active.value ? `${cursorRotateDeg}deg` : `0deg`})`, }}>
                <div className={styles.losangeItemBorder}>
                    <div className={styles.losangeItem}></div>
                </div>
            </div>
        </div>
    );
}

export default Cursor;
