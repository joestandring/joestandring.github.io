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
      <div>
        <About parentCallback={callbackFunction} />
        <Portfolio selectedTag={tag} />
      </div>
    </>
  );
}

export default PageContents;
