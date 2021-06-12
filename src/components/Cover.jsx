import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const { Title } = Typography;

function Cover() {
  return (
    <div className="cover">
      <Title style={{ color: '#f2f2f2', textAlign: 'center' }}>
        <div>
          Hi! I&apos;m
          <span className="green"> Joe</span>
          .
        </div>
        <div>
          I&apos;m a
          <span className="green"> full-stack </span>
          web developer.
        </div>
      </Title>
      <Button type="primary" size="large" icon={<ArrowDownOutlined />}>See my work</Button>
    </div>
  );
}

export default Cover;
