import React, { useState } from 'react';
import About from './About';
import Portfolio from './Portfolio';

function PageContents() {
  const [tag, setTag] = useState(null);

  const callbackFunction = (data) => {
    setTag(data);
  };

  return (
    <>
      <About parentCallback={callbackFunction} />
      <Portfolio selectedTag={tag} />
    </>
  );
}

export default PageContents;
