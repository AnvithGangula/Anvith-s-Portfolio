import styles from './ProjectsStyles.module.css';
import cloudy from '../../assets/cloudy.png';
import Dice from '../../assets/dice.png';
import startup from '../../assets/startup.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cloudy}
          link="https://github.com/AnvithGangula/weather-forecast"
          h3="SkyPredictor"
          p="weather-forecast"
        />
        <ProjectCard
          src={Dice}
          link="https://github.com/AnvithGangula/dice-game"
          h3="Dice Game"
          p="basic dice game"
        />
        <ProjectCard
          src={startup}
          link="https://github.com/AnvithGangula/space-War"
          h3="Space Game"
          p="A small game about space ship 2d game"
        />
      </div>
    </section>
  );
}

export default Projects;
