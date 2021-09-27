/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Input,
  Row,
  Button,
  Divider,
} from 'antd';
import Data from '../../data/portfolio.json';

const { Title, Text } = Typography;

function Portfolio(props) {
  const [search, setSearch] = useState(null);
  const [selectedTag, setSelectedTag] = useState(props.selectedTag);

  useEffect(() => {
    setSelectedTag(props.selectedTag);
  }, [props.selectedTag]);

  const handleChange = (event) => {
    const query = event.target.value;
    setSearch(query);
  };

  const projects = Data.filter((data) => {
    if (search == null) {
      return data;
    }
    if (data.name.toLowerCase().includes(search.toLowerCase())) {
      return data;
    }
  }).filter((data) => {
    if (selectedTag == null) {
      return data;
    }
    if (data.tags.includes(selectedTag)) {
      return data;
    }
  }).map((data) => (
    <Link to={`/project/${data.route}`}>
      <div className="img-link">
        <div className="projects">
          <img src={data.thumb} alt={data.name} />
          <div className="overlay">
            <div className="overlay-text">
              <h3 className="overlay-text-heading">{data.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));

  const ClearTag = () => {
    setSelectedTag(null);
  };

  if (selectedTag != null) {
    return (
      <>
        <Title className="center-text">Portfolio</Title>
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
          {selectedTag}
          {' '}
        </Text>
        <Button size="small" onClick={() => ClearTag()}>Clear</Button>
        <Row className="vert-center">
          {projects}
        </Row>
      </>
    );
  }
  return (
    <div id="portfolio">
      <Title className="center-text">Portfolio</Title>
      <Input
        className="search-bar"
        placeholder="Search projects by name or use the icons above"
        allowClear
        size="large"
        onChange={(e) => handleChange(e)}
      />
      <Row className="vert-center">
        {projects}
      </Row>
      <Divider />
    </div>
  );
}

export default Portfolio;
