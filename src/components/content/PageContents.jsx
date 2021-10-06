import React, { useState } from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';

function PageContents(props) {
  const [tag, setTag] = useState(null);

  const { windowWidth } = props;

  const callbackFunction = (data) => {
    setTag(data);
  };

  return (
    <>
      <About parentCallback={callbackFunction} windowWidth={windowWidth} />
      <Portfolio selectedTag={tag} />
      <Blog windowWidth={windowWidth} />
    </>
  );
}

PageContents.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default PageContents;
