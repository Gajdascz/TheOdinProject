import { useContext } from "react";
import { GameContext } from "../../contexts/game/GameContext";
import PropTypes from "prop-types";
import styles from "./Stats.module.css";

Stats.propTypes = {
  containerClass: PropTypes.string,
  sectionsClass: PropTypes.string,
};

export default function Stats({ containerClass, sectionsClass }) {
  const { score, round, highest, onEndRun } = useContext(GameContext);
  return (
    <div className={containerClass ?? styles.container}>
      <div className={sectionsClass ?? styles.sections}>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>Current</h3>
          <p className={styles.statWrapper}>
            <span className={styles.statName}>score:</span>
            <span className={styles.statNumber}>{score}</span>
          </p>
          <p className={styles.statWrapper}>
            <span className={styles.statName}>round:</span>
            <span className={styles.statNumber}>{round}</span>
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionHeader}>Highest</h3>
          <p className={styles.statWrapper}>
            <span className={styles.statName}>score:</span>
            <span className={styles.statNumber}>{highest.score}</span>
          </p>
          <p className={styles.statWrapper}>
            <span className={styles.statName}>round:</span>
            <span className={styles.statNumber}>{highest.round}</span>
          </p>
        </div>
      </div>
      <button className={styles.endRunButton} onClick={onEndRun}>
        End Run
      </button>
    </div>
  );
}
