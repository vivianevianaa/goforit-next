import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext);
    const [minuteLeft, minutetRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minutetRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

                { hasFinished ? (
                    <button disabled className={styles.countdownButton}>Parabéns! Ciclo finalizado.</button>
                ) : (
                    <>
                        { isActive ? (
                        <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>Abandonar o ciclo</button>
                    ) : (
                        <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar o ciclo</button>
                    )}
                    </>
                )}

        </div>
    );
}