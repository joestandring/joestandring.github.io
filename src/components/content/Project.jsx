import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import Data from '../../data/portfolio.json';

const { Title } = Typography;

function Project() {
  const [project, setProject] = useState();
  const { route } = useParams();

  function GetProject(projectRoute) {
    return Data.find((p) => p.route === projectRoute);
  }

  useEffect(() => {
    setProject(GetProject(route));
  }, route);

  if (project != null) {
    return (
      <>
        <Title>{project.name}</Title>
      </>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <Spin size="large" />
    );
  }
}

export default Project;
