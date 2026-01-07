import { useEffect, useState } from "react";
import logoStranger from "../../assets/Logos/logoStranger.svg";
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoStranger} alt="Logo Stranger Things" />
      </div>
        <button
          className={`${styles.menuButton} ${open ? styles.active : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={() => setOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#Seasons" onClick={() => setOpen(false)}>Seasons</a>
          </li>
          <li>
            <a href="#About" onClick={() => setOpen(false)}>About</a>
          </li>
          <li>
            <a href="#Characters" onClick={() => setOpen(false)}>Characters</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
