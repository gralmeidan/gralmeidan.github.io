import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Home(props) {
  const { location: { pathname } } = props;
  return (
    <Header pathname={pathname} />
  );
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
