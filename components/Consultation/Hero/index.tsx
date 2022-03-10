import React from "react";
import styles from "./Hero.module.sass";

interface Props {}

const ConsultationsHero: React.FC<Props> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Was mich nicht umbringt, macht mich stärker.</h1>
        <p>
          Współpracuję z pacjentami którzy mają za sobą nieudane próby
          odchudzania oraz które w wyniku choroby, zmian życiowych potrzebują
          zmodyfikować swój dotychczasowy jadłospis.
        </p>
      </div>
    </section>
  );
};

export default ConsultationsHero;
