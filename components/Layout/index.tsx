import Link from "next/link";
import React from "react";
import styles from "./Layout.module.sass";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <main>
        <Link href="/">
          <a>&lt;&lt; Powrót</a>
        </Link>
        {children}
      </main>
    </div>
  );
};

export default Layout;
