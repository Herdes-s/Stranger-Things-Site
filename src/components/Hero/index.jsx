import play from "../../assets/Logos/play-icon.png";
import inf from "../../assets/Logos/info-icon.png";

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1>Stranger Things</h1>
        <p>
          <q>Friends don’t lie</q>
        </p>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>
            <img src={play} alt="icon-play" />
            Assistir
          </button>
          <button className={styles.btnSecondary}>
            <img src={inf} alt="icon-info" />
            Informações
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
