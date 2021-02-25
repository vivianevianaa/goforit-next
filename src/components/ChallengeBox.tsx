import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Uma mão segurando peso" />
                        <strong>Exercite-se</strong>
                        <p>Vivi, bora lá! Caminhe por 3 minutos e estique suas pernas.</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.failedButton}>Não consegui :(</button>
                        <button type="button" className={styles.succeededButton}>Consegui :)</button>
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
