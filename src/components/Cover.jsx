import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

const { Title } = Typography;

function Cover() {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Title style={{ color: '#f2f2f2', textAlign: 'center' }}>
        <div>
          Hi! I&apos;m
          <span style={{ color: '#3D9970' }}> Joe</span>
          .
        </div>
        <div>
          I&apos;m a
          <span style={{ color: '#3D9970' }}> full-stack </span>
          web developer.
        </div>
      </Title>
      <Button type="primary" size="large" icon={<ArrowDownOutlined />}>See my work</Button>
    </div>
  );
}

export default Cover;
