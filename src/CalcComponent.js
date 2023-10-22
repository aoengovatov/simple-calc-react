import styles from './Calc.module.css';
import { useState } from 'react';

let resultStyle = false;

export const Calc = () => {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const buttonsFunc = ['C', '+', '-', '='];
    const [result, setResult] = useState('0');

    const getMathResult = (str) => {
        let total = null;
        const mathSymbol = str.match(/[+-]/);

        if (mathSymbol !== null) {
            str = str.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
            while (str.length) {
                total += parseFloat(str.shift());
            }
        }
        return total;
    };

    const getValuePlusAndMinusOperation = (value, result) => {
        let returnValue = '';
        if (result !== '0' && !result.split('').at(-1).match(/[+-]/)) {
            returnValue = result + value;
        } else {
            returnValue = result;
        }
        return returnValue;
    };

    const onClick = (event) => {
        const value = event.target.dataset.value;
        let returnValue = '';
        resultStyle = false;

        if (value !== undefined) {
            switch (value) {
                case 'C':
                    returnValue = '0';
                    break;
                case '=':
                    const mathRes = getMathResult(result);
                    if (mathRes !== null) {
                        returnValue = String(mathRes);
                        resultStyle = true;
                    } else {
                        returnValue = '0';
                    }
                    break;
                case '-':
                case '+':
                    returnValue = getValuePlusAndMinusOperation(value, result);
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
                        {buttonsFunc.map((button) => (
                            <button
                                className={styles.buttonFunc}
                                data-value={button}
                                key={button}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
