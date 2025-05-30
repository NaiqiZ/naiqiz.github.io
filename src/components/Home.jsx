import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
    fontWeight: 700,
  },
  roleLineStyle: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2em',
    fontWeight: 700, // ensure both text and Typewriter share this weight
  },
  typewriterWrapper: {
    fontWeight: 700,
    fontFamily: 'inherit', // make sure it inherits same font as "I'm"
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return data ? (
    <div style={styles.mainContainer}>
      <h1 style={styles.nameStyle}>{data.name}</h1>
      <h2 style={styles.roleLineStyle}>
        <span style={{ marginRight: 6 }}>I'm</span>
        <span style={styles.typewriterWrapper}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data.roles,
            }}
          />
        </span>
      </h2>
      <Social />
    </div>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;


