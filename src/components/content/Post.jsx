import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import Data from '../../data/blog.json';

function Post() {
  const [post, setPost] = useState();
  const { route } = useParams();

  function GetPost(postRoute) {
    return Data.find((p) => p.route === postRoute);
  }

  useEffect(() => {
    setPost(GetPost(route));
  }, route);

  if (post != null) {
    return post.title;
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <Spin size="large" />
    );
  }
}

export default Post;
