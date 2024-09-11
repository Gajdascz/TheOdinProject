import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import Icon from "../Icon/Icon";

Footer.propTypes = {
  className: PropTypes.string,
  copyrightOrientation: PropTypes.oneOf(["vertical", "horizontal"]),
};

export default function Footer({ className, copyrightOrientation }) {
  return (
    <footer className={className ? className : styles.container}>
      <div
        className={`${styles.copyright} ${copyrightOrientation === "horizontal" ? styles.horizontal : styles.vertical}`}
      >
        <div className={styles.copyrightIconYear}>
          <Icon type="copyright" className={styles.copyrightIcon} />
          <p className={styles.copyrightYear}>2024</p>
        </div>
        <p className={styles.author}>Nolan Gajdascz</p>
      </div>
      <p className={styles.disclaimer}>
        Pokémon and Pokémon character names are trademarks of Nintendo.
      </p>
    </footer>
  );
}
