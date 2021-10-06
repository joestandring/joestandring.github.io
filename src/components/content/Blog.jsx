import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography, Card } from 'antd';
import Data from '../../data/blog.json';

const { Title } = Typography;
const { Meta } = Card;

function Blog(props) {
  const { windowWidth } = props;

  const projects = Data.map((data) => (
    <Link to={`/blog/${data.route}`}>
      <Card
        hoverable
        cover={<img alt={data.title} src={data.thumb} />}
        className={windowWidth > 600 ? 'blog-card' : 'blog-card-mobile'}
      >
        <Meta title={data.title} description={data.date} />
      </Card>
    </Link>
  ));

  return (
    <>
      <Title className="center-text">Blog</Title>
      {projects}
    </>
  );
}

Blog.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Blog;
