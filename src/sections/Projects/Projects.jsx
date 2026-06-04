import styles from './ProjectsStyles.module.css';
import cloudy from '../../assets/cloudy.png';
import Dice from '../../assets/dice.png';
import startup from '../../assets/startup.png';
import fitLift from '../../assets/fitlift.png';

const projects = [
  // New projects
  {
    title: 'Construction Site',
    description: 'Full-stack Django real estate & property investment platform with user roles, media gallery, and subscription management.',
    tags: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
    github: 'https://github.com/AnvithGangula/Construction-Site',
    demo: 'https://construction-site-juyj.onrender.com/',
    emoji: '🏗️',
  },
  {
    title: 'AI Lead Generator',
    description: 'Smart lead generation & outreach platform with AI-powered email creation, LinkedIn tracking, SMTP automation, and a live dashboard.',
    tags: ['Python', 'Streamlit', 'AI APIs', 'SQLite'],
    github: 'https://github.com/AnvithGangula/Lead-Generator-LinkedIn-and-Email-using-AI',
    demo: 'https://lead-generator-linkedin-and-email-using-ai.streamlit.app/',
    emoji: '🤖',
  },
  {
    title: 'Finance.OS',
    description: 'Enterprise-grade React finance tracker with BI-first philosophy, transaction tracking, analytics dashboards, and professional reporting.',
    tags: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/AnvithGangula/React-Finance-Tracker',
    demo: 'https://financetrakerme.netlify.app/',
    emoji: '💹',
  },
  {
    title: 'My Company Project',
    description: 'A full business website project showcasing modern design, responsive layouts, and professional company presentation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AnvithGangula/My-Company-Project',
    demo: null,
    emoji: '🏢',
  },
  {
    title: 'Spotify Clone',
    description: 'A front-end clone of the Spotify web player, replicating the UI, music player controls, and playlist interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AnvithGangula/Spotify-Clone',
    demo: null,
    emoji: '🎵',
  },
  // Old projects
  {
    title: 'SkyPredictor',
    description: 'A weather forecast web app that fetches real-time data and displays conditions, temperature, and forecasts with a clean UI.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    github: 'https://github.com/AnvithGangula/SkyPredictor',
    demo: null,
    emoji: '🌤️',
    img: cloudy,
  },
  {
    title: 'FitLift Tracker',
    description: 'A fitness tracking app to log workouts, track progress, and set goals — designed for everyday gym-goers.',
    tags: ['JavaScript', 'CSS'],
    github: null,
    demo: null,
    emoji: '💪',
    img: fitLift,
  },
  {
    title: 'Dice Game',
    description: 'A fun two-player browser dice game with score tracking, win conditions, and smooth interactive UI.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/AnvithGangula/dice-game',
    demo: null,
    emoji: '🎲',
    img: Dice,
  },
  {
    title: 'Space War Game',
    description: 'A 2D space shooter game where you pilot a spaceship, dodge enemies, and survive waves of attacks.',
    tags: ['JavaScript', 'Canvas'],
    github: 'https://github.com/AnvithGangula/space-War',
    demo: null,
    emoji: '🚀',
    img: startup,
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <p className={styles.subtitle}>9 projects across AI, web, finance &amp; gaming</p>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div key={i} className={`${styles.card} ${i < 3 ? styles.featured : ''}`}>
            <div className={styles.cardHeader}>
              <span className={styles.emoji}>{p.emoji}</span>
              <div className={styles.links}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    GitHub
                  </a>
                )}
                {p.demo ? (
                  <a href={p.demo} target="_blank" rel="noreferrer" className={`${styles.linkBtn} ${styles.demoBtn}`}>
                    Live Demo ↗
                  </a>
                ) : (
                  <span className={`${styles.linkBtn} ${styles.demoBtnDisabled}`}>Demo Soon</span>
                )}
              </div>
            </div>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardDesc}>{p.description}</p>
            <div className={styles.tags}>
              {p.tags.map((t, j) => <span key={j} className={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
