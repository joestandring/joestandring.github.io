import React from 'react';
import {
  Typography,
  Input,
  Row,
} from 'antd';
import Data from '../data/portfolio.json';
// import Project from './Project';

const { Title } = Typography;
const { Search } = Input;

function Portfolio() {
  const projects = Data.map((project) => (
    <div className="img-link">
      <div className="projects">
        <img src={project.thumb} alt={project.name} />
        <div className="overlay">
          <div className="overlay-text">
            <h3 style={{ color: 'white' }}>{project.name}</h3>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Title className="page-title">Portfolio</Title>
      <Search
        className="search-bar"
        placeholder="Search projects by name or use the icons above"
        allowClear
        enterButton
        size="large"
      />
      <Row className="vert-center">
        {projects}
      </Row>
    </>
  );
}

export default Portfolio;
