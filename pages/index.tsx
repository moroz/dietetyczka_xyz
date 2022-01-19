import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Landing.module.sass";
import LandingTile from "../components/Landing/Tile";

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>Anna Golińska Dietetyk</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1>
          Ania Golińska
          <br />
          <span className={styles.rainbow}>
            dietetyk kliniczny
            <br /> psychodietetyk
            <br /> trener personalny
          </span>
        </h1>
      </div>
      <LandingTile
        className={styles.workshops}
        hoverPic="/warsztat.jpg"
        href="/warsztaty"
      >
        <p>Warsztaty szamowe</p>
      </LandingTile>
      <LandingTile
        className={styles.consultation}
        href="/konsultacje"
        hoverPic="/foteliki.jpg"
      >
        <p>Konsultacje szamowe</p>
      </LandingTile>
      <LandingTile
        className={styles.workout}
        hoverPic="/pustynia.jpg"
        href="/treningi"
      >
        <p>Treningi</p>
      </LandingTile>
      <LandingTile
        className={styles.blog}
        hoverPic="/fizjognomia.jpg"
        href="/blog"
      >
        <p>Blogasek</p>
      </LandingTile>
    </div>
  );
};

export default Home;
