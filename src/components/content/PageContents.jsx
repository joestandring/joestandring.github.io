import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Blog from './Blog';

function PageContents() {
  const [tag, setTag] = useState(null);

  const callbackFunction = (data) => {
    setTag(data);
  };

  return (
    <>
      <About parentCallback={callbackFunction} />
      <Portfolio selectedTag={tag} />
      <Blog />
    </>
  );
}

export default PageContents;
