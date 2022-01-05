import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Landing.module.sass";
import clsx from "clsx";

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>
          Siemanko, tu Anka.
          <br />
          Pomagam ludziom
          <br />
          zdrowiej jeść.
        </h1>
      </div>
      <div className={clsx(styles.tile, styles.workshops)}>
        <p>Warsztaty szamowe</p>
      </div>
      <div className={clsx(styles.tile, styles.consultation)}>
        <p>Konsultacje szamowe</p>
      </div>
      <div className={clsx(styles.tile, styles.workup)}>
        <p>Treningi</p>
      </div>
      <div className={clsx(styles.tile, styles.blog)}>
        <p>Blogasek</p>
      </div>
    </div>
  );
};

export default Home;
