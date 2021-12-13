import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import actionButtonStyles from '../styles/ActionButton.module.scss';
import aboutStyles from '../styles/About.module.scss';

const CvLink = () => (
  <>
    <div className={aboutStyles['cv-icon']}>
      <Image src="/img/cv-logo.svg" width="250px" height="250px" />
    </div>
    <div className="links">
      <a
        href="https://drive.google.com/file/d/1d1uJGnRERAOqhEv1dKe3RlGT-gZYFChk/view?usp=sharing"
        className={`btn primary grey-text text-lighten-4 ${actionButtonStyles['action-btn']} ${aboutStyles['cv-btn']}`}
      >
        <span>View CV</span>
        <span>
          <FaExternalLinkAlt />
        </span>
      </a>
      <a
        href="https://github.com/alasdairmoffat"
        className={`btn grey darken-3 grey-text text-lighten-4 ${actionButtonStyles['action-btn']} ${aboutStyles['cv-btn']}`}
      >
        <span>Github</span>
        <span>
          <FaGithub />
        </span>
      </a>
    </div>
  </>
);

export default CvLink;
