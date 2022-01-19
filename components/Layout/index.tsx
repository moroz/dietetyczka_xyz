import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../Footer";
import styles from "./Layout.module.sass";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <Head>
        <title>
          {title}
          {title ? " – " : ""}Ania Golińska Dietetyk
        </title>
      </Head>
      <main>
        <Link href="/">
          <a>&lt;&lt; Powrót</a>
        </Link>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
