import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '60px',
    marginTop: '40px',
  },
  introTextContainer: {
    flex: '1 1 55%',
    minWidth: '320px',
    maxWidth: '640px',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.25em',
    fontWeight: 500,
    lineHeight: '1.8', // makes it taller and less flat
    paddingRight: '10px',
  },
  introImageContainer: {
    flex: '0 1 340px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileImage: {
    width: '100%',
    maxWidth: '340px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
};

function About({ header }) {
  const [data, setData] = useState(null);

  const parseIntro = (text) => <ReactMarkdown>{text}</ReactMarkdown>;

  useEffect(() => {
    fetch(endpoints.about)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <div style={styles.row}>
                {/* Text on the left */}
                <div style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                </div>

                {/* Image on the right */}
                <div style={styles.introImageContainer}>
                  <img
                    src={data?.imageSource}
                    alt="Profile"
                    style={styles.profileImage}
                  />
                </div>
              </div>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
