import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.section} id="About">
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>About</h2>
        </div>
        <div className={styles.text}>
          <p>
            Passada na década de 1980, na cidade fictícia de Hawkings, Stranger
            Things conta a história de um garoto que desaparece misteriosamente
            e dos eventos paranormais que se passam em torno desse
            acontecimento.{" "}
          </p>
          <p>
            Os personagens principais são seu grupo de amigos que acabam fazendo
            amizade com uma menina fugida de um laboratório e com poderes
            psicocinéticos. A partir daí eles tentam compreender a relação entre
            o desaparecimento de Will e o surgimento da menina, enquanto acabam
            descobrindo que a cidade esconde segredos bem maiores.
          </p>
          <p>
            O sucesso da série está na forma como ela mistura o paranormal, o
            mistério e o drama com representações fenomenais por parte dos
            atores. Além disso, Stranger Things apela também à nostalgia,
            fazendo uma homenagem à cultura pop dos anos 1980, com episódios
            recheados de referências a filmes e músicas que marcaram a década.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
