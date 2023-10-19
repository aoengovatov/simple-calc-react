import styles from './Calc.module.css';
import { useState } from 'react';

export const Calc = () => {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
                    if (result !== '0' && !result.match(/[+-]/)) {
                        returnValue = result + value;
                    } else {
                        returnValue = result;
                    }
                    break;
                case '+':
                    if (result !== '0' && !result.match(/[+-]/)) {
                        returnValue = result + value;
                    } else {
                        returnValue = result;
                    }
                    break;
                default:
                    if (result === '0') {
                        returnValue = value;
                    } else if (result !== '0' && result.length < 14) {
                        returnValue = result + value;
                    }
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
                        {buttons.map((button) => (
                            <button
                                className={styles.button}
                                key={button}
                                data-value={button}
                            >
                                {button}
                            </button>
                        ))}
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
