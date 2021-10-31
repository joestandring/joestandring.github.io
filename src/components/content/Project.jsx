import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Spin,
  Tag,
  Divider,
} from 'antd';
import Data from '../../data/portfolio.json';
import Tags from '../../data/tags.json';

const { Title, Text } = Typography;

function Project(props) {
  const [project, setProject] = useState();
  const { route } = useParams();

  const GetProject = (projectRoute) => Data.find((p) => p.route === projectRoute);

  useEffect(() => {
    setProject(GetProject(route));
  }, route);

  if (project != null) {
    const tags = [];

    const { windowWidth } = props;

    project.tags.forEach((tagName) => {
      tags.push(Tags.find((tag) => tag.name === tagName));
    });

    const projectTags = tags.map((tag) => (
      <Tag color={tag.color}>{tag.name}</Tag>
    ));

    const ProjectImage = () => {
      if (windowWidth > 600) {
        return (
          <img
            className="project-image"
            src={`/${project.thumb}`}
            alt={project.name}
            width="60%"
          />
        );
      }
      return (
        <img
          className="project-image"
          src={`/${project.thumb}`}
          alt={project.name}
          width="100%"
        />
      );
    };
    // https://github.com/remarkjs/react-markdown/issues/76
    return (
      <>
        <div className="vert-center">
          <ProjectImage />
        </div>
        <Title className="center-text">{project.name}</Title>
        <div className="center-text">
          <Text>
            {project.start}
            {' '}
            -
            {' '}
            {project.end}
          </Text>
        </div>
        <div className="center-text">
          <Text>{project.org}</Text>
        </div>
        <div className="center-text">
          <a href={project.link}>
            Link
          </a>
        </div>
        <Divider />
        <div className="center-text">
          {projectTags}
        </div>
        <Divider />
        <div className="center-text">
          <Text>{project.desc}</Text>
        </div>
      </>
    );
  }
  return (
    <Spin size="large" />
  );
}

Project.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Project;
