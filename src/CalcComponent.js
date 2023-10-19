import styles from './Calc.module.css';
import { useState } from 'react';

export const Calc = () => {
    const [result, setResult] = useState('0');

    const onClick = (event) => {
        const value = event.target.dataset.value;
        let returnValue = '';

        if (value !== undefined) {
            switch (value) {
                case 'cancel':
                    returnValue = '0';
                    break;
                case '=':
                    // вызов функции расчета результата
                    returnValue = '0';
                    break;
                case '-':
                    if (result !== '0' && result.length >= 1 && !result.match(/[+-]/)) {
                        returnValue = result + value;
                    } else {
                        returnValue = result;
                    }
                    break;
                case '+':
                    if (result !== '0' && result.length >= 1 && !result.match(/[+-]/)) {
                        returnValue = result + value;
                    } else {
                        returnValue = result;
                    }
                    break;
                default:
                    if (result.length < 14) {
                        returnValue = result + value;
                    }
            }
            if (result === '0') {
                returnValue = value;
            }
            setResult((updatedValue) => (updatedValue = returnValue));
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.calcContainer}>
                <div className={styles.calcDisplay}>{result}</div>
                <div className={styles.panelContainer} onClick={onClick}>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} data-value="1">
                            1
                        </button>
                        <button className={styles.button} data-value="2">
                            2
                        </button>
                        <button className={styles.button} data-value="3">
                            3
                        </button>
                        <button className={styles.button} data-value="4">
                            4
                        </button>
                        <button className={styles.button} data-value="5">
                            5
                        </button>
                        <button className={styles.button} data-value="6">
                            6
                        </button>
                        <button className={styles.button} data-value="7">
                            7
                        </button>
                        <button className={styles.button} data-value="8">
                            8
                        </button>
                        <button className={styles.button} data-value="9">
                            9
                        </button>
                        <button className={styles.button} data-value="0">
                            0
                        </button>
                    </div>
                    <div className={styles.buttonFuncContainer}>
                        <button className={styles.buttonFunc} data-value="cancel">
                            C
                        </button>
                        <button className={styles.buttonFunc} data-value="+">
                            +
                        </button>
                        <button className={styles.buttonFunc} data-value="-">
                            -
                        </button>
                        <button className={styles.buttonFunc} data-value="=">
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
