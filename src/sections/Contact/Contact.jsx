import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Get In Touch</h1>
      <p className={styles.subtitle}>
        Open to full-time roles, freelance work, and collaborations in Hyderabad &amp; remote.
      </p>
      <div className={styles.inner}>
        <div className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>📍</span>
            <span>Hyderabad, Telangana, India</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>💼</span>
            <span>Available for opportunities</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🐙</span>
            <a href="https://github.com/AnvithGangula" target="_blank" rel="noreferrer">
              github.com/AnvithGangula
            </a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>🔗</span>
            <a href="https://www.linkedin.com/in/anvith-gangula-035278309" target="_blank" rel="noreferrer">
              linkedin.com/in/anvith-gangula
            </a>
          </div>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Subject" />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Your message..." rows="5" required></textarea>
          </div>
          <button type="submit" className="hover btn-primary">Send Message →</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
