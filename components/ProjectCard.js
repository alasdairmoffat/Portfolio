import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { MdClose, MdMoreVert } from 'react-icons/md';

import { useSelector } from 'react-redux';

import Image from 'next/image';

import projectCardStyles from '../styles/ProjectCard.module.scss';
import actionButtonStyles from '../styles/ActionButton.module.scss';

const ProjectCard = ({ project }) => {
  const filter = useSelector((state) => state.filter.filter);

  const {
    title, descriptionParagraphs, image, url, repository, filters,
  } = project;

  const hidden = !(filter === 'all' || filters.includes(filter));

  const showReveal = (e) => {
    const card = e.target.closest('.card');
    card.style.overflow = 'hidden';
    const cardReveal = card.querySelector('.card-reveal');
    cardReveal.style.display = 'block';

    // M already imported in _app.js
    M.anime({
      targets: cardReveal,
      translateY: '-100%',
      duration: 300,
      easing: 'easeInOutQuad',
    });
  };

  const hideReveal = (e) => {
    const card = e.target.closest('.card');
    const initialOverflow = card.style.overflow;

    const cardReveal = card.querySelector('.card-reveal');

    M.anime({
      targets: cardReveal,
      translateY: 0,
      duration: 225,
      easing: 'easeInOutQuad',
      complete(anim) {
        const el = anim.animatables[0].target;
        el.style.display = 'none';
        card.style.overflow = initialOverflow;
      },
    });
  };

  return (
    <div
      className={`${
        projectCardStyles['project-card']
      } col s12 m6 xl4 project-card ${
        hidden ? projectCardStyles['filtered-out'] : ''
      }`}
    >
      <div className="card hoverable sticky-action grey darken-3 grey-text text-lighten-4">
        <button
          className={`${projectCardStyles['toggle-button']} ${projectCardStyles.image} card-image grey darken-3`}
          onClick={showReveal}
          type="button"
        >
          <Image
            src={`/img/projects/${image}`}
            alt={title}
            width={480}
            height={270}
          />
        </button>
        <div className={`${projectCardStyles['card-content']} card-content`}>
          <button
            className={`${projectCardStyles['toggle-button']} ${projectCardStyles['flex-title']}`}
            onClick={showReveal}
            type="button"
          >
            <span>{title}</span>
            <MdMoreVert className={projectCardStyles.icon} />
          </button>
        </div>
        <div className="card-reveal grey darken-3">
          <button
            className={`${projectCardStyles['toggle-button']} ${projectCardStyles['flex-title']}`}
            onClick={hideReveal}
            type="button"
          >
            <span>{title}</span>
            <MdClose className={projectCardStyles.icon} />
          </button>
          <div className={`${projectCardStyles.description} left-align`}>
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="card-action">
          <p>
            <a
              href={url}
              className={`${actionButtonStyles['action-btn']} ${projectCardStyles.mb} btn primary grey-text text-lighten-4 row`}
            >
              <span className="col s3 offset-s3">View</span>
              <span className="col s3">
                <FaExternalLinkAlt />
              </span>
            </a>
            <a
              href={repository}
              className={`${actionButtonStyles['action-btn']} btn grey darken-3 grey-text text-lighten-4 row`}
            >
              <span className="col s3 offset-s3">Github</span>
              <span className="col s3">
                <FaGithub />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    descriptionParagraphs: PropTypes.arrayOf(PropTypes.string.isRequired)
      .isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProjectCard;
