// import Parallax from './Parallax';
import SkillLogo from './SkillLogo';

import skillsStyles from '../styles/Skills.module.scss';

const logoDir = '/img/logos/';

const bootstrapLogo = `${logoDir}bootstrap.png`;
const css3Logo = `${logoDir}css3.png`;
const githubLogo = `${logoDir}github.png`;
const html5Logo = `${logoDir}html5.png`;
const javascriptLogo = `${logoDir}javascript.png`;
const jQueryLogo = `${logoDir}jquery.png`;
const materializeLogo = `${logoDir}materialize.png`;
const mongodbLogo = `${logoDir}mongodb.png`;
const nodejsLogo = `${logoDir}nodejs.png`;
const reactLogo = `${logoDir}react.png`;
const sassLogo = `${logoDir}sass.png`;
const gitLogo = `${logoDir}git.png`;
const pythonLogo = `${logoDir}python.svg`;
const sqliteLogo = `${logoDir}sqlite.png`;
const nextJsLogo = `${logoDir}nextjs.png`;
const mochaChaiLogo = `${logoDir}mocha-chai.png`;
const travisCILogo = `${logoDir}travis-ci.png`;

// const skillsBackground = '/img/skills-background.jpg';

const Skills = () => (
  <section id="skills" className="grey-text text-lighten-4 grey darken-3">
    <div className="row">
      <div className="primary">
        <h1 className="section-title">Skills</h1>
      </div>
    </div>
    <div className="container grey-text text-lighten-4">
      <div className="card grey darken-3">
        <div className={skillsStyles['skills-card']}>
          <h4 className={`${skillsStyles['skills-title']} grey darken-4`}>
            HTML / CSS
          </h4>
          <div className={`${skillsStyles['skills-grid']} row`}>
            <SkillLogo src={html5Logo} name="HTML5" />
            <SkillLogo src={css3Logo} name="CSS3" />
            <SkillLogo src={sassLogo} name="Sass" />
            <SkillLogo src={bootstrapLogo} name="Bootstrap" />
            <SkillLogo src={materializeLogo} name="Materialize" />
          </div>
        </div>
      </div>

      <div className="card grey darken-3">
        <div className={skillsStyles['skills-card']}>
          <h4 className={`${skillsStyles['skills-title']} grey darken-4`}>
            Javascript
          </h4>
          <div className={`${skillsStyles['skills-grid']} row`}>
            <SkillLogo src={javascriptLogo} name="Javascript" />
            <SkillLogo src={jQueryLogo} name="jQuery" />
            <SkillLogo src={nodejsLogo} name="Node" />
            <SkillLogo src={reactLogo} name="React" />
            <SkillLogo src={nextJsLogo} name="Next.js" />
            <SkillLogo src={mochaChaiLogo} name="Mocha & Chai" />
          </div>
        </div>
      </div>

      <div className="card grey darken-3">
        <div className={skillsStyles['skills-card']}>
          <h4 className={`${skillsStyles['skills-title']} grey darken-4`}>
            Other
          </h4>
          <div className={`${skillsStyles['skills-grid']} row`}>
            <SkillLogo src={pythonLogo} name="Python" />
            <SkillLogo src={gitLogo} name="Git" />
            <SkillLogo src={githubLogo} name="Github" />
            <SkillLogo src={mongodbLogo} name="MongoDB" />
            <SkillLogo src={sqliteLogo} name="SQLite" />
            <SkillLogo src={travisCILogo} name="Travis CI" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
