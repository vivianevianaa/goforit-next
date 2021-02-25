import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vivianevianaa.png" alt="Viviane Viana Octocat"/>
            <div>
                <strong>Viviane Viana</strong>
                <p>
                <img src="icons/level.svg" alt="Ícone de nível"/>    
                Level 1
                </p>
            </div>
        </div>
    );
}