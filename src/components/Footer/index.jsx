import styles from "./Footer.module.css";
import logoStranger from "../../assets/Logos/logoStranger.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>c
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src={logoStranger} alt="logo Stranger Things" />
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#Seasons">Seasons</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Characters">Characters</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Mizum.dev. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
