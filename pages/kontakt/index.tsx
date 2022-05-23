import React from "react";
import HeroColumns from "../../components/HeroColumns";

interface Props {}

const email = "agolinska.dietetyczka@gmail.com";

const kontakt: React.FC<Props> = () => {
  return (
    <HeroColumns layout="left" background="/kontakt-bg.jpg">
      <h1>Kontakt</h1>
      <p>Telefon: +48 534 480 540</p>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </HeroColumns>
  );
};

export default kontakt;
