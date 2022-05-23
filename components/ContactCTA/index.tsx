import React from "react";
import styles from "./ContactCTA.module.sass";
import Link from "next/link";

interface Props {}

const ContactCTA: React.FC<Props> = () => {
  return (
    <div className={styles.cta}>
      <Link href="/kontakt">
        <a className={styles.cta}>Skontaktuj się ze mną</a>
      </Link>
    </div>
  );
};

export default ContactCTA;
