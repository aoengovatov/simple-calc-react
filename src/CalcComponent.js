import styles from './Calc.module.css';
import { useState } from 'react';

let resultStyle = false;

export const Calc = () => {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const [result, setResult] = useState('0');

    const getMathResult = (str) => {
        let res = null;
        const mathSymbol = str.match(/[+-]/);
        if (mathSymbol !== null && str.split(mathSymbol).length === 2) {
            const args = str.split(mathSymbol);
            if (args[1] !== '') {
                switch (mathSymbol[0]) {
                    case '+':
                        res = Number(args[0]) + Number(args[1]);
                        break;
                    case '-':
                        res = Number(args[0]) - Number(args[1]);
                        break;
                }
            }
        }
        return res;
    };

    const onClick = (event) => {
        const value = event.target.dataset.value;
        let returnValue = '';
        resultStyle = false;

        if (value !== undefined) {
            switch (value) {
                case 'cancel':
                    returnValue = '0';
                    break;
                case '=':
                    console.log(result);
                    const mathRes = getMathResult(result);
                    if (mathRes !== null) {
                        returnValue = String(mathRes);
                        resultStyle = true;
                    } else {
                        returnValue = '0';
                    }
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
                <div className={styles.calcDisplay}>
                    <span
                        className={resultStyle ? styles.textResult : styles.textDefault}
                    >
                        {result}
                    </span>
                </div>
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
