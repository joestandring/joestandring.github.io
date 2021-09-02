import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';
import Data from '../../data/blog.json';

const { Title, Text } = Typography;

function Post() {
  const [post, setPost] = useState();
  const { route } = useParams();

  function GetPost(postRoute) {
    return Data.find((p) => p.route === postRoute);
  }

  useEffect(() => {
    setPost(GetPost(route));
  }, route);

  // TODO: Fix styling and linkedin route to correct place
  if (post != null) {
    return (
      <>
        <Title className="page-title" style={{ paddingTop: '50px' }}>{post.title}</Title>
        <Title className="page-title" level={3} type="secondary"><i>{post.subtitle}</i></Title>
        <div className="vert-center">
          <img
            src={`/${post.thumb}`}
            alt={post.name}
            width="60%"
          />
        </div>
        <div className="vert-center">
          <a href="google.com">View on LinkedIn</a>
        </div>
        <div>
          <Text type="secondary">{post.date}</Text>
        </div>
        <div>
          <Text>{post.content}</Text>
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

export default Post;
