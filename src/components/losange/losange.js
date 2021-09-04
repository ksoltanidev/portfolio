import styles from './losange.module.scss';

function Losange() {
    return (
/*         <div className={styles.losangeComponent}> */
            <div className={styles.losangeContainer}>
                <div className={styles.losangeHover}>
                    <div className={styles.losangeHoverBorder}>
                        <div className={styles.losangeHoverItem}>
                        </div>
                    </div>
                    <div className={styles.losangeHoverBorder}>
                        <div className={styles.losangeHoverItem}>
                        </div>
                    </div>
                </div>
                <div className={styles.losangeItemBorder}>
                    <div className={styles.losangeItem}>
                </div>
                </div>

            </div>
/*         </div> */
);
}

export default Losange;
