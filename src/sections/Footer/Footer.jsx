import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.inner}>
        <p className={styles.name}>Anvith Gangula</p>
        <p className={styles.copy}>© 2025 · Built with React + Vite · Hyderabad, India</p>
        <div className={styles.links}>
          <a href="https://github.com/AnvithGangula" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/anvith-gangula-035278309" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#hero">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
