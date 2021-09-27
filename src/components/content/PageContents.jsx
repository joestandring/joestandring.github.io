import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';

function PageContents(props) {
  const [tag, setTag] = useState(null);

  // eslint-disable-next-line react/prop-types
  const { windowWidth } = props;

  const callbackFunction = (data) => {
    setTag(data);
  };

  return (
    <>
      <About parentCallback={callbackFunction} windowWidth={windowWidth} />
      <Portfolio selectedTag={tag} />
      <Blog />
    </>
  );
}

export default PageContents;
