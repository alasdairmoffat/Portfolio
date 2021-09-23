import CvLink from './CvLink';

import aboutStyles from '../styles/About.module.scss';
import mediaQueriesStyles from '../styles/MediaQueries.module.scss';

const About = () => (
  <section id="about">
    <div className="grey darken-4 grey-text text-lighten-4">
      <div className="primary">
        <h1 className="section-title">About</h1>
      </div>
      <div className="container">
        <div className="row">
          <div
            className={`${aboutStyles.grid} ${mediaQueriesStyles['about-grid']}`}
          >
            <div
              className={`card ${aboutStyles['about-card']} ${mediaQueriesStyles['cv-card']}`}
            >
              <div
                className={`card-panel grey darken-2 ${aboutStyles['cv-card']}`}
              >
                <CvLink />
              </div>
            </div>
            <div className={`card ${aboutStyles['about-card']}`}>
              <div
                className={`${aboutStyles['about-text']} ${mediaQueriesStyles['about-text']} grey darken-3 card-panel`}
              >
                <div>
                  <p>
                    I am a self taught Full Stack Web Developer and have been
                    coding since 2018.
                  </p>
                  <p>
                    I am driven to expand my capabilities and am strongly
                    passionate about learning and creating.
                  </p>
                  <p>
                    Challenges highly motivate me and I love overcoming
                    problems. Building tools to provide solutions to users, or
                    to optimise a process are deeply rewarding to me.
                  </p>
                  <h4>
                    Whatever you want to build, I would love to aid you in
                    making it real.
                  </h4>
                </div>

                <div
                  className={`hide ${aboutStyles['about-cv-link']} ${mediaQueriesStyles['small-screen-cv-link']}`}
                >
                  <CvLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
