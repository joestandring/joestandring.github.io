/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
      <div className="projects">
        <img src={data.thumb} alt={data.name} />
        <div className="overlay">
          <div className="overlay-text">
            <h3 className="overlay-text-heading">{data.name}</h3>
          </div>
        </div>
      </div>
    </Link>
  ));

  const ClearTag = () => {
    setSelectedTag(null);
  };

  const InfoText = () => (
    <p className="center-text">
      The following projects are those maintained/developed by me, and are mostly hosted on my
      <a target="_blank" href="https://github.com/joestandring" rel="noreferrer"> GitHub </a>
      . For my commercial portfolio, please see my
      <a target="_blank" href="https://linkedin.com/in/joestandring" rel="noreferrer"> LinkedIn </a>
      profile or contact me directly via
      <a href="mailto:joe@joestandring.com"> email</a>
      .
    </p>
  );

  if (selectedTag != null) {
    return (
      <div id="portfolio">
        <Title className="center-text">Portfolio</Title>
        <InfoText />
        <div className="vert-center">
          <Input
            className="search-bar"
            placeholder="Search projects by name or use the icons above"
            allowClear
            size="large"
            onChange={(e) => handleChange(e)}
          />
        </div>
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
      </div>
    );
  }
  return (
    <div id="portfolio">
      <Title className="center-text">Portfolio</Title>
      <InfoText />
      <div className="vert-center">
        <Input
          className="search-bar"
          placeholder="Search projects by name or use the icons above"
          size="large"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Row className="vert-center">
        {projects}
      </Row>
      <Divider />
    </div>
  );
}

Portfolio.propTypes = {
  selectedTag: PropTypes.string.isRequired,
};

export default Portfolio;
