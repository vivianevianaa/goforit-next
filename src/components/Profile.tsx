import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/vivianevianaa.png" alt="Viviane Viana Octocat"/>
            <div>
                <strong>Viviane Viana</strong>
                <p>
                <img src="icons/level.svg" alt="Ícone de nível"/>    
                Level {level}
                </p>
            </div>
        </div>
    );
}