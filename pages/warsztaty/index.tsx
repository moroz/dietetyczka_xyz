import React from "react";
import HeroColumns from "../../components/HeroColumns";
import styles from "./Warsztaty.module.sass";
import Link from "next/link";
import ContactCTA from "../../components/ContactCTA";

interface Props {}

const WorkshopsPage: React.FC<Props> = () => {
  return (
    <HeroColumns layout="left" background="/warsztaty-bg.jpg">
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
              rel="noopener noreferrer"
            >
              TANITA DC-430 S MA
            </a>
            , wykorzystującego do pomiaru innowacyjną technologię{" "}
            <a
              href="https://pl.wikipedia.org/wiki/Analiza_impedancji_bioelektrycznej"
              target="_blank"
              rel="noopener noreferrer"
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
      <ContactCTA />
    </HeroColumns>
  );
};

export default WorkshopsPage;
