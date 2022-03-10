import Link from "next/link";
import React from "react";
import styles from "./Hero.module.sass";

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

const ConsultationsHero: React.FC<Props> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Dietetyk kliniczny. Psychodietetyk</h1>
        <p>
          Współpracuję z pacjentami którzy mają za sobą nieudane próby
          odchudzania oraz które w wyniku choroby, zmian życiowych potrzebują
          zmodyfikować swój dotychczasowy jadłospis.
        </p>
        <ul className={styles.bullets}>
          {bullets.map((bull, i) => (
            <li key={i}>
              <span>{bull}</span>
            </li>
          ))}
        </ul>
        <footer>
          <p>Spotkania online lub stacjonarnie.</p>
          <p>
            Czas trwania konsultacji: 50 minut
            <br />
            Cena konsultacji: 150 PLN
          </p>
          <Link href="/">
            <a>&lt;&lt; powrót</a>
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default ConsultationsHero;
