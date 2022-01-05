import React from "react";
import styles from "../../../styles/Landing.module.sass";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  hoverPic?: string;
  className?: string;
  href: string;
}

const LandingTile: React.FC<Props> = ({
  children,
  hoverPic,
  className,
  href
}) => {
  return (
    <Link href={href}>
      <a className={clsx(styles.tile, className)}>
        {hoverPic ? (
          <img className={styles.hoverPic} src={hoverPic} alt="" />
        ) : null}
        <div className={styles.tileContent}>{children}</div>
      </a>
    </Link>
  );
};

export default LandingTile;
