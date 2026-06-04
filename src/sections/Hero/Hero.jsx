import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.imgWrapper}>
          <img src={heroImg} className={styles.hero} alt="Anvith Gangula" />
          <div className={styles.imgGlow}></div>
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.badge}>Open to Work · Hyderabad</div>
        <h1>
          Anvith<br />Gangula
        </h1>
        <h2>AI &amp; Software Developer</h2>
        <span className={styles.socials}>
          <a href="https://github.com/AnvithGangula" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/anvith-gangula-035278309" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          B.Tech CS/AI graduate passionate about building intelligent systems
          and full-stack applications that make life simpler.
        </p>
        <div className={styles.ctas}>
          <a href={CV} download>
            <button className="hover btn-primary">Download CV</button>
          </a>
          <a href="#projects">
            <button className="hover btn-secondary">View Projects</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
