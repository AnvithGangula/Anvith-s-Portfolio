import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'C'],
  },
  {
    label: 'Frameworks & Libraries',
    skills: ['React', 'Django', 'Flask', 'Streamlit', 'Pygame'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'MySQL', 'SQLite', 'Netlify', 'Render'],
  },
  {
    label: 'AI & Data',
    skills: ['Machine Learning', 'Generative AI', 'Data Analytics', 'MS Bot Framework'],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.groups}>
        {skillGroups.map((group, i) => (
          <div key={i} className={styles.group}>
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <div className={styles.pills}>
              {group.skills.map((skill, j) => (
                <span key={j} className={styles.pill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
