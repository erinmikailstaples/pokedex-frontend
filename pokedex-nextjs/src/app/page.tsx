'use client';

import ClientPokedex from '@/app/components/ClientPokedex';
import styles from '@/app/components/PokemonDisplay.module.scss';
import { usePokemonData } from '@/app/hooks/usePokemonData';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  const { isQuizMode } = usePokemonData();
  const highScores = useQuery(api.getHighScores.getHighScores);

  return (
    <main className={styles.main}>
      <ClientPokedex />
      <div className={styles.highScoresPanel}>
        <h3>High Scores</h3>
        {highScores === undefined ? (
          <p>Loading high scores...</p>
        ) : highScores.length === 0 ? (
          <p>No high scores yet</p>
        ) : (
          highScores.map((highScore, index) => (
            <div key={index}>
              {highScore.initials}: {highScore.score}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
