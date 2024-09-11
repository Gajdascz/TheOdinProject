import PropTypes from "prop-types";
import PokedexMonitor from "./Monitor/PokedexMonitor";
import styles from "./Pokedex.module.css";

import { useState, useRef, useEffect, useContext } from "react";
import { GameContext } from "../../contexts/game/GameContext";

Pokedex.propTypes = {
  className: PropTypes.string,
};

export default function Pokedex({ className }) {
  const { dexEntries } = useContext(GameContext);
  const [isOpen, setIsOpen] = useState(false);
  const closeRef = useRef();

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <PokedexMonitor
          isOpen={isOpen}
          dexEntries={dexEntries}
          closeRef={closeRef}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <button
          className={`${styles.case}${className && ` ${className}`}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.top}>
            <div className={styles.dexterLight} />
            <div className={styles.batteryIndicators}>
              <div className={styles.batteryRed} />
              <div className={styles.batteryYellow} />
              <div className={styles.batteryGreen} />
            </div>
          </div>
          <div className={styles.body}>
            <PokedexMonitor isOpen={isOpen} dexEntries={dexEntries} />
          </div>
        </button>
      )}
    </>
  );
}
