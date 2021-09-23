import Image from 'next/image';
import PropTypes from 'prop-types';

import skillLogoStyles from '../styles/SkillLogo.module.scss';

const SkillLogo = ({ src, name }) => (
  <div className={`${skillLogoStyles['skill-logo']} col s4 m2`}>
    <div className={skillLogoStyles['img-container']}>
      <Image src={src} layout="fill" objectFit="contain" alt={`${name} Logo`} />
    </div>
    <span>{name}</span>
  </div>
);

SkillLogo.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillLogo;
