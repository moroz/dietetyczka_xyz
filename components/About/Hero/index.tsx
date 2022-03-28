import React from "react";
import styles from "./Hero.module.sass";

interface Props {}

const AboutHero: React.FC<Props> = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>O mnie</h1>
        <p>
          Moją misją życiową jest przekazanie wiedzy na temat zdrowego żywienia
          oraz umiejętnego komponowania posiłków bez poczucia lęku i kartki.
        </p>
        <p>
          Współpracuję z pacjentami poprzez zmianę nawyków żywieniowych oraz
          edukację żywieniową. Najbardziej podczas współpracy z pacjentami cenię
          sobie szczerość oraz wzajemne zrozumienie. W pracy z pacjentem słucham
          i podążam za indywidualnymi możliwościami. Pracuję z dziećmi,
          młodzieżą, dorosłymi i seniorami. W zakresie żywienia bazuję na wiedzy
          opartej na dowodach naukowych.
        </p>
        <p>
          Współpracuję głównie z pacjentami, którzy na swoim koncie mają
          nieudane próby odchudzania, chcieliby zmienić swój styl życia lub w
          wyniku choroby potrzebują zmienić sposób żywienia.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
