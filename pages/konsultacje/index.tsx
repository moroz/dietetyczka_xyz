import React from "react";
import ContactCTA from "../../components/ContactCTA";
import HeroColumns from "../../components/HeroColumns";
import styles from "./Konsultacje.module.sass";

interface Props {}

const bullets = [
  "zrozumienie",
  "wsparcie",
  "wiedza medyczna",
  "analiza składu masy ciała",
  "analiza dotychczasowego jadłospisu",
  "narzędzia do zmiany nawyków",
  "jadłospis",
  "motywacja",
  "inspiracje kulinarne"
];

const ConsultationsPage: React.FC<Props> = () => {
  return (
    <HeroColumns layout="right" background="/konsultacje-bg.jpg">
      <h1>Dietetyk kliniczny. Psychodietetyk</h1>
      <p>
        Współpracuję z pacjentami którzy mają za sobą nieudane próby odchudzania
        oraz które w wyniku choroby, zmian życiowych potrzebują zmodyfikować
        swój dotychczasowy jadłospis.
      </p>
      <p>Spotkania online lub stacjonarnie.</p>
      <ul className={styles.bullets}>
        {bullets.map((bull, i) => (
          <li key={i}>
            <span>{bull}</span>
          </li>
        ))}
      </ul>
      <ContactCTA />
    </HeroColumns>
  );
};

export default ConsultationsPage;
