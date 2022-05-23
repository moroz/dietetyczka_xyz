import React from "react";
import styles from "../../components/Workshops/Hero/Hero.module.sass";
import clsx from "clsx";

interface Props {}

const email = "agolinska.dietetyczka@gmail.com";

const kontakt: React.FC<Props> = () => {
  return (
    <section className={clsx(styles.workshopHero, styles.contactHero)}>
      <div className={styles.workshopContent}>
        <p>Telefonik: +48 534 480 540</p>
        <p>
          Emajl: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </section>
  );
};

export default kontakt;
