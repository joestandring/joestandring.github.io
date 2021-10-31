import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Row } from 'antd';
import Data from '../../data/blog.json';

const { Title } = Typography;
const { Meta } = Card;

function Blog() {
  const projects = Data.map((data) => (
    <Link to={`/blog/${data.route}`}>
      <Card
        hoverable
        cover={<img alt={data.title} src={data.thumb} />}
        className="blog"
      >
        <Meta title={data.title} description={data.date} />
      </Card>
    </Link>
  ));

  return (
    <div id="blog">
      <Title className="center-text">Blog</Title>
      <Row className="vert-center">
        {projects}
      </Row>
    </div>
  );
}

export default Blog;
