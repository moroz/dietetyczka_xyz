import clsx from "clsx";
import Link from "next/link";
import React, { CSSProperties } from "react";
import styles from "./HeroColumns.module.sass";

interface Props {
  children: React.ReactNode;
  layout: "left" | "right";
  background?: string;
}

const HeroColumns: React.FC<Props> = ({ children, layout, background }) => {
  const style = background
    ? ({
        backgroundImage: `url(${background})`
      } as CSSProperties)
    : undefined;

  return (
    <div className={clsx(styles.hero, styles[layout])} style={style}>
      <section className={styles.content}>
        {children}
        <footer>
          <Link href="/">
            <a>&lt;&lt; powrót</a>
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default HeroColumns;
