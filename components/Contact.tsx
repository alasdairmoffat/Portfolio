import { FaEnvelope, FaGithubSquare } from 'react-icons/fa';

import contactStyles from '../styles/Contact.module.scss';
import mediaQueriesStyles from '../styles/MediaQueries.module.scss';

const Contact = () => (
  <section id="contact" className="grey darken-4 grey-text text-lighten-4">
    <div className="row">
      <div className="primary grey-text text-lighten-4">
        <h1 className="section-title">Contact</h1>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <a
          href="mailto:contact@alasdairmoffat.com"
          className={`${contactStyles['contact-link']} ${mediaQueriesStyles['contact-link']}`}
        >
          <button
            type="button"
            className="btn-floating btn-large grey darken-3"
          >
            <div className={contactStyles.icon}>
              <FaEnvelope />
            </div>
          </button>
          contact@alasdairmoffat.com
        </a>
      </div>

      <div className="row">
        <a
          href="https://github.com/alasdairmoffat"
          className={`${contactStyles['contact-link']} ${mediaQueriesStyles['contact-link']}`}
        >
          <button
            type="button"
            className="btn-floating btn-large grey darken-3"
          >
            <div className={contactStyles.icon}>
              <FaGithubSquare />
            </div>
          </button>
          <span>github.com/alasdairmoffat</span>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
