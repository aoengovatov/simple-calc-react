import styles from './Calc.module.css';

export const Calc = () => {
    return (
        <div className={styles.container}>
            <div className={styles.calcContainer}>
                <div className={styles.calcDisplay}>0</div>
                <div className={styles.panelContainer}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>1</button>
                        <button className={styles.button}>2</button>
                        <button className={styles.button}>3</button>
                        <button className={styles.button}>4</button>
                        <button className={styles.button}>5</button>
                        <button className={styles.button}>6</button>
                        <button className={styles.button}>7</button>
                        <button className={styles.button}>8</button>
                        <button className={styles.button}>9</button>
                        <button className={styles.button}>0</button>
                    </div>
                    <div className={styles.buttonFuncContainer}>
                        <button className={styles.buttonFunc}>C</button>
                        <button className={styles.buttonFunc}>+</button>
                        <button className={styles.buttonFunc}>-</button>
                        <button className={styles.buttonFunc}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
