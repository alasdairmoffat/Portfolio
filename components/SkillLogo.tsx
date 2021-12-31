import Image from 'next/image';
import PropTypes, { InferType } from 'prop-types';

import skillLogoStyles from '../styles/SkillLogo.module.scss';

const propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

type Props = InferType<typeof propTypes>;

const SkillLogo = ({ src, name }: Props) => (
  <div className={`${skillLogoStyles['skill-logo']} col s4 m2`}>
    <div className={skillLogoStyles['img-container']}>
      <Image src={src} layout="fill" objectFit="contain" alt={`${name} Logo`} />
    </div>
    <span>{name}</span>
  </div>
);

SkillLogo.propTypes = propTypes;

export default SkillLogo;
