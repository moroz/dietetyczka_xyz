import React from "react";
import styles from "./Hero.module.sass";
import Link from "next/link";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className={styles.workshopHero}>
      <div className={styles.workshopContent}>
        <h1>Szkolenia, warsztaty sportowe i dietetyczne</h1>
        <p>
          Tematyczne szkolenia w zakresie żywienia oraz treningu. Dostosowane do
          potrzeb Twojej firmy i&nbsp;eventów. Współpraca z dziećmi, młodzieżą,
          dorosłymi oraz seniorami.
        </p>

        <div className={styles.columns}>
          <article>
            <h3>Szkolenia dietetyczne</h3>
            <p>
              Wiedza oparta na badaniach medycznych prosto z Warszawskiego
              Uniwersytetu Medycznego.
            </p>
          </article>
          <article>
            <h3>Pomiary ciała</h3>
            <p>
              Przy użyciu profesjonalnego analizatora składu ciała{" "}
              <a
                href="http://www.tanitapolska.pl/"
                target="_blank"
                rel="noopener noreferer"
              >
                TANITA DC-430 S MA
              </a>
              , wykorzystującego do pomiaru innowacyjną technologię{" "}
              <a
                href="https://pl.wikipedia.org/wiki/Analiza_impedancji_bioelektrycznej"
                target="_blank"
                rel="noopener noreferer"
              >
                BIA
              </a>
              .
            </p>
          </article>
          <article>
            <h3>Trening fitness</h3>
            <p>
              Zajęcia sportowe pod okiem wykwalifikowanej instruktorki Fitness.
            </p>
          </article>
        </div>
        <div className={styles.cta}>
          <Link href="/kontakt">
            <a className={styles.cta}>Skontaktuj się ze mną</a>
          </Link>
        </div>
        <Link href="/">
          <a>&lt;&lt; powrót</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
