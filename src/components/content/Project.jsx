import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Typography,
  Spin,
  Tag,
  Divider,
} from 'antd';
import Data from '../../data/portfolio.json';
import Tags from '../../data/tags.json';

const { Title, Text } = Typography;

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
    const tags = [];

    project.tags.forEach((tagName) => {
      tags.push(Tags.find((tag) => tag.name === tagName));
    });

    const projectTags = tags.map((tag) => (
      <Tag color={tag.color}>{tag.name}</Tag>
    ));

    return (
      <>
        <div className="vert-center">
          <img
            className="project-image"
            src={project.thumb}
            alt={project.name}
            width="60%"
          />
        </div>
        <Title className="page-title">{project.name}</Title>
        <div style={{ textAlign: 'center' }}>
          <Text>
            {project.start}
            {' '}
            -
            {' '}
            {project.end}
          </Text>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Text>{project.org}</Text>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link to={project.link}>
            Link
          </Link>
        </div>
        <Divider />
        <div style={{ textAlign: 'center' }}>
          {projectTags}
        </div>
        <Divider />
        <div style={{ textAlign: 'center' }}>
          <Text>{project.desc}</Text>
        </div>
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
