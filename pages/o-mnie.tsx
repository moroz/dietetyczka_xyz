import React from "react";
import ContactCTA from "../components/ContactCTA";
import HeroColumns from "../components/HeroColumns";

interface Props {}

const AboutPage: React.FC<Props> = () => {
  return (
    <HeroColumns layout="right" background="/o-mnie-bg.jpg">
      <h1>O mnie</h1>
      <p>
        Nazywam się Anna Golińska. Ukończyłam studia magisterskie na kierunku
        dietetyka na Warszawskim Uniwersytecie Medycznym.
      </p>
      <p>
        Współpracuję z pacjentami poprzez zmianę nawyków żywieniowych oraz
        edukację żywieniową. Najbardziej podczas współpracy z pacjentami cenię
        sobie szczerość oraz wzajemne zrozumienie. W pracy z pacjentem słucham i
        podążam za indywidualnymi możliwościami. Pracuję z dziećmi, młodzieżą,
        dorosłymi i seniorami. W zakresie żywienia bazuję na wiedzy opartej na
        dowodach naukowych.
      </p>
      <p>
        Współpracuję głównie z pacjentami, którzy na swoim koncie mają nieudane
        próby odchudzania, chcieliby zmienić swój styl życia lub w wyniku
        choroby potrzebują zmienić sposób żywienia.
      </p>
      <ContactCTA />
    </HeroColumns>
  );
};

export default AboutPage;
