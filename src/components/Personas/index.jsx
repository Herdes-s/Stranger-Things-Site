import styles from "./Personas.module.css";
import Aboutpersonas from "../../data/AboutPersonas";

function Personas() {
  return (
    <section className={styles.section} id="Characters">
      <div className={styles.overlay}></div>
      <h2 className={styles.title}>Personas</h2>
      <div className={styles.persona}>
        {Aboutpersonas.map((persona) => (
          <div key={persona.id} className={styles.container}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.img}
                src={persona.img}
                alt={persona.nameActor}
              />
            </div>
            <div className={styles.subTitles}>
              <h3>{persona.nameActor}</h3>
              <h4>{persona.namePersona}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Personas;
