import PropTypes from 'prop-types';

import skillLogoStyles from '../styles/SkillLogo.module.scss';

const SkillLogo = ({ src, name }) => (
  <div className={`${skillLogoStyles['skill-logo']} col s4 m2`}>
    <div className={skillLogoStyles['img-container']}>
      <img src={src} alt={`${name} Logo`} className={skillLogoStyles['skills-logo']} />
    </div>
    <span>{name}</span>
  </div>
);

SkillLogo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillLogo;
