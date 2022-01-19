import styles from "./Footer.module.sass";

const email = "anidietetycznie@gmail.com";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <p className={styles.contactDetails}>
        <span>tel. +48 534 480 540</span>
        <span>
          e-mail: <a href={`mailto:${email}`}>{email}</a>
        </span>
      </p>
      <p>&copy; 2022 by Anna Golińska. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
