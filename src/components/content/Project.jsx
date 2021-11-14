/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Spin,
  Tag,
  Divider,
} from 'antd';
import ReactMarkdown from 'react-markdown';
import Data from '../../data/portfolio.json';
import Tags from '../../data/tags.json';

const { Title, Text } = Typography;

function Project() {
  const [project, setProject] = useState();
  const { route } = useParams();
  const [markdown, setMarkdown] = useState('');

  const GetProject = (projectRoute) => Data.find((p) => p.route === projectRoute);

  useEffect(() => {
    setProject(GetProject(route));
  }, route);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/joestandring/${route}/master/README.md`)
      .then((response) => (response.text()))
      .then((text) => {
        setMarkdown(text);
      })
      .catch(() => {
        setMarkdown('');
      });
  }, project);

  if (project != null) {
    const tags = [];

    project.tags.forEach((tagName) => {
      tags.push(Tags.find((tag) => tag.name === tagName));
    });

    const projectTags = tags.map((tag) => (
      <Tag color={tag.color}>{tag.name}</Tag>
    ));

    const Readme = () => {
      if (markdown !== '404: Not Found') {
        return (
          <>
            <Divider />
            <div className="readme">
              <ReactMarkdown
                components={{
                  img: (props) => <img {...props} style={{ maxWidth: '100%', display: 'block' }} />,
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </>
        );
      }
      return <></>;
    };

    return (
      <div className="wide-window">
        <Title className="project-title">{project.name}</Title>
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
        <div className="center-text new-line">
          <a href={project.link}>
            Link
          </a>
        </div>
        <div className="center-text new-line">
          {project.desc}
        </div>
        <div className="center-text">
          {projectTags}
        </div>
        <Readme />
      </div>
    );
  }
  return (
    <Spin size="large" />
  );
}

export default Project;
