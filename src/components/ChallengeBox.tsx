import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Uma mão segurando peso" />
                        <strong>Exercite-se</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.failedButton} onClick={resetChallenge}>Não consegui :(</button>
                        <button type="button" className={styles.succeededButton} onClick={completeChallenge}>Consegui :)</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio!</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up - Seta para cima" />
                            Suba de nível ao completar os desafios :)
                        </p>
                    </div>
                )}
        </div>
    );
}
