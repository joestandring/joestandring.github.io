import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card } from 'antd';
import Data from '../../data/blog.json';

const { Title } = Typography;
const { Meta } = Card;

function Blog() {
  // eslint-disable-next-line arrow-body-style
  const projects = Data.map((data) => {
    return (
      <Link to={`/blog/${data.route}`}>
        <Card
          hoverable
          cover={<img alt={data.title} src={data.thumb} />}
          className="blog-card"
        >
          <Meta title={data.title} description={data.date} />
        </Card>
      </Link>
    );
  });

  return (
    <div id="blog">
      <Title className="page-title">Blog</Title>
      {projects}
    </div>
  );
}

export default Blog;
