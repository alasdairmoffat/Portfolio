import PropTypes from 'prop-types';

import {
  MdBuild, MdPieChart, MdInfoOutline, MdChat,
} from 'react-icons/md';

import navbarStyles from '../styles/Navbar.module.scss';

const NavList = ({ className }) => (
  <div className={className}>
    <li>
      <a href="#about">
        <div
          className={`${navbarStyles['navbar-button']} grey-text text-lighten-3`}
        >
          <MdInfoOutline size="1.5em" />
          <span>About</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#projects">
        <div
          className={`${navbarStyles['navbar-button']} grey-text text-lighten-3`}
        >
          <MdBuild size="1.5em" />
          <span>Projects</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#skills">
        <div
          className={`${navbarStyles['navbar-button']} grey-text text-lighten-3`}
        >
          <MdPieChart size="1.5em" />
          <span>Skills</span>
        </div>
      </a>
    </li>
    <li>
      <a href="#contact">
        <div
          className={`${navbarStyles['navbar-button']} grey-text text-lighten-3`}
        >
          <MdChat size="1.5em" />
          <span>Contact</span>
        </div>
      </a>
    </li>
  </div>
);

NavList.propTypes = {
  className: PropTypes.string,
};

NavList.defaultProps = {
  className: '',
};

export default NavList;
