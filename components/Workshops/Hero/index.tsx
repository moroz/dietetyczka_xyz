import React from "react";
import styles from "./Hero.module.sass";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className={styles.workshopHero}>
      <div className={styles.workshopContent}>
        <h1>Szkolenia, warsztaty sportowe i dietetyczne</h1>
        <p>
          Tematyczne szkolenia w zakresie żywienia oraz treningu. Dostosowane do
          potrzeb Twojej firmy i eventów. Współpraca z dziećmi, młodzieżą,
          dorosłymi oraz seniorami.
        </p>

        <div className={styles.columns}>
          <article>
            <h3>Szkolenia dietetyczne</h3>
            <p>
              Wiedza oparta na badaniach medycznych prosto z Warszawskiego
              Łuniwersytetu Medycznego.
            </p>
          </article>
          <article>
            <h3>Pomiary ciała</h3>
            <p></p>
          </article>
          <article>
            <h3>Trening fitness</h3>
            <p></p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
