import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Anvith Gangula. <br />
        All rights reserved/not reserved.
      </p>
    </section>
  );
}

export default Footer;
