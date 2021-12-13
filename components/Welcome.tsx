import Parallax from './Parallax';

import welcomeStyles from '../styles/Welcome.module.scss';
import mediaQueriesStyles from '../styles/MediaQueries.module.scss';

const Welcome = () => (
  <section id="welcome">
    <Parallax src="/img/welcome-background.jpg" speed={-0.5} darken>
      <div className={`${welcomeStyles.welcome} container`}>
        <div className={`${welcomeStyles['welcome-text']}  section no-pad-bot`}>
          <h1
            className={`${welcomeStyles['welcome-title']} ${mediaQueriesStyles['welcome-title']} header center grey-text text-lighten-4`}
          >
            Alasdair Moffat
          </h1>
          <div className="row center">
            <h4 className="header col s12 grey-text">
              Full Stack Web Development
            </h4>
          </div>
        </div>
      </div>
    </Parallax>
  </section>
);

export default Welcome;
