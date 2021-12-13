import { MouseEvent as ReactMouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProjectFilter } from '../store/actions/filterActions';

import Parallax from './Parallax';
import ProjectCard from './ProjectCard';
import projects from '../projects';

import projectsStyles from '../styles/Projects.module.scss';
import { RootState } from '../store';

const skillsBackground = '/img/skills-background.jpg';

const Projects = () => {
  const activeFilter = useSelector((state: RootState) => state.filter.filter);

  const dispatch = useDispatch();
  const filterClick = (e: ReactMouseEvent<HTMLButtonElement>) =>
    dispatch(setProjectFilter((e.target as HTMLButtonElement).dataset.filter!));

  // Create an array with all filters
  const filtersList = Array.from(
    new Set(
      projects.reduce(
        (acc: string[], project) =>
          acc.concat(project.filters.map((filter) => filter)),
        [],
      ),
    ),
  ).sort();

  filtersList.unshift('all');

  const filterButtons = filtersList.map((filter) => (
    <button
      key={filter}
      data-filter={filter}
      type="button"
      className={`${
        projectsStyles['filter-button']
      } btn-small grey-text text-lighten-4 ${
        filter === activeFilter ? 'grey darken-3' : 'black'
      }`}
      onClick={filterClick}
    >
      {filter}
    </button>
  ));

  return (
    <section id="projects" className="grey-text text-lighten-4">
      <Parallax src={skillsBackground} speed={-0.5} darken>
        <div className="row">
          <h1 className="section-title primary">Projects</h1>
        </div>
        <div className="container">
          <div className="row filters">{filterButtons}</div>

          <div className="row">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Projects;
