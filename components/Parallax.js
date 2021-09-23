import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import parallaxStyles from '../styles/Parallax.module.scss';

const Parallax = ({
  src, speed, darken, children,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [imgPercent, setImgPercent] = useState(0);

  const parallaxContainer = useRef(null);

  const parallaxScroll = () => {
    const windowTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const containerTop = parallaxContainer.current.offsetTop;
    const containerHeight = parallaxContainer.current.clientHeight;
    const containerBottom = containerTop + containerHeight;

    // The next pixel to show on screen
    const windowBottom = windowTop + windowHeight;

    // If block is shown on screen
    if (windowBottom > containerTop && windowTop < containerBottom) {
      // Number of lines of picture shown in pixels
      const imgBottom = windowBottom - containerTop;
      // Max number of pixels before image scrolls off screen
      const imgTop = windowHeight + containerHeight;
      // Percentage between start showing until disappearing
      setImgPercent(((imgBottom * speed) / imgTop) * 100 + (50 - speed * 50));
    }

    Object.assign(parallaxContainer.current.querySelector('img').style, {
      top: `${imgPercent}%`,
      transform: `translateY(-${imgPercent}%)`,
    });
  };

  // Update imgPercent
  useEffect(parallaxScroll);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div
      className={`${parallaxStyles.container} ${
        darken && parallaxStyles.darken
      }`}
      ref={parallaxContainer}
    >
      <div className={parallaxStyles.parallax}>
        <Image src={src} layout="fill" objectFit="cover" />
      </div>
      {children}
    </div>
  );
};

Parallax.propTypes = {
  src: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  darken: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Parallax.defaultProps = {
  darken: false,
};

export default Parallax;
