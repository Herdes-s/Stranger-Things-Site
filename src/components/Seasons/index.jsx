import { useEffect, useRef } from "react";
import AboutSeasons from "../../data/AboutSeasons";
import styles from "./Seasons.module.css";

function Seasons() {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionBottom =
            sectionRef.current.getBoundingClientRect().bottom;

          const trigger = window.innerHeight * 1;

          if (sectionBottom <= trigger) {
            titleRef.current.classList.add(styles.release);
          } else {
            titleRef.current.classList.remove(styles.release);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="Seasons">
      <div className={styles.stickyOffset}></div>
      <h2 ref={titleRef} className={styles.title}>
        Seasons
      </h2>
      <div>
        {AboutSeasons.map((season) => (
          <article key={season.id} className={styles.card}>
            <div className={styles.overlay}></div>
            <div className={styles.image}>
              <img src={season.img} alt="seasons" />
            </div>
            <div className={styles.informate}>
              <h3>{season.nameSeason}</h3>
              <span>{season.ano}</span>
              <p>{season.resumo}</p>
              <button>Assistir</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Seasons;
