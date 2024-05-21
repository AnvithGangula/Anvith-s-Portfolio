import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'

function Hero() {
  return(
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero}
        src={heroImg}
        alt="Profile picture of Anvith Gangula" />
        <img className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon" />
      </div>
      <div className={styles.info}>
        <h1>
          Anvith
            <br />
          Gangula
        </h1>
      </div>
    </section>
  )
}

export default Hero;