/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { useState } from 'react';
import {
  Typography,
  Input,
  Row,
} from 'antd';
import Data from '../../data/portfolio.json';

const { Title, Text } = Typography;

function Portfolio(props) {
  const [search, setSearch] = useState(null);

  /*
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
  */

  const handleChange = (event) => {
    const query = event.target.value;
    setSearch(query);
  };

  // eslint-disable-next-line array-callback-return
  const projects = Data.filter((data) => {
    if (search == null) {
      return data;
    } if (data.name.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  }).map((data) => (
    <div className="img-link">
      <div className="projects">
        <img src={data.thumb} alt={data.name} />
        <div className="overlay">
          <div className="overlay-text">
            <h3 style={{ color: 'white' }}>{data.name}</h3>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Title className="page-title">Portfolio</Title>
      <Input
        className="search-bar"
        placeholder="Search projects by name or use the icons above"
        allowClear
        size="large"
        onChange={(e) => handleChange(e)}
      />
      <Text>
        Searching projects tagged with:
        {' '}
        {props.selectedTag}
      </Text>
      <Row className="vert-center">
        {projects}
      </Row>
    </>
  );
}

export default Portfolio;
