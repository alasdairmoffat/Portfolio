import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import NavList from './NavList';

import navbarStyles from '../styles/Navbar.module.scss';
import mediaQueriesStyles from '../styles/MediaQueries.module.scss';

const logo = '/img/logo.svg';

const Navbar = () => (
  <>
    <div className="navbar-fixed">
      <nav className={navbarStyles.nav}>
        <div className="nav-wrapper black">
          <a href="#welcome" className="brand-logo center">
            <div className={navbarStyles.logo}>
              <Image src={logo} alt="AM logo" height="48px" width="48px" />
            </div>
          </a>
          <a
            href="#!"
            data-target="mobile-demo"
            className={`sidenav-trigger ${navbarStyles['sidenav-trigger']} ${mediaQueriesStyles['hide-on-extra-large']} grey-text text-lighten-4`}
          >
            <div className={navbarStyles['sidenav-icon']}>
              <MdMenu size="2em" />
            </div>
          </a>
          <ul
            className={`right ${mediaQueriesStyles['hide-on-large-and-down']}`}
          >
            <NavList
              className={`${navbarStyles.navlist} ${navbarStyles.center}`}
            />
          </ul>
        </div>
      </nav>
    </div>

    <ul
      className={`sidenav sidenav-close black left-align ${navbarStyles.sidenav}`}
      id="mobile-demo"
    >
      <li>
        <a href="#welcome" className="center">
          <div className={navbarStyles.logo}>
            <Image src={logo} alt="AM logo" width="36px" height="36px" />
          </div>
        </a>
      </li>
      <NavList className={navbarStyles.navlist} />
    </ul>
  </>
);

export default Navbar;
