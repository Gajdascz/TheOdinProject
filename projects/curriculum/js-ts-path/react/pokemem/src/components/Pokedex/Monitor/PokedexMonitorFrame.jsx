import PropTypes from "prop-types";
import styles from "./PokedexMonitor.module.css";

PokedexMonitorFrame.propTypes = {
  display: PropTypes.node,
  isOpen: PropTypes.bool,
};

export default function PokedexMonitorFrame({ isOpen, display }) {
  return (
    <div className={`${styles.monitor}${isOpen ? ` ${styles.viewing}` : ""}`}>
      <div className={styles.monitorTop}>
        <div className={styles.monitorBrightness} />
        <div className={styles.monitorBrightness} />
      </div>
      <div className={styles.monitorScreen}>{display}</div>
      <div className={styles.monitorBottom}>
        <div className={styles.monitorIndicator} />
        <div className={styles.monitorSpeaker}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
