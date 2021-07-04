import React from 'react';
import { Typography, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { HashLink } from 'react-router-hash-link';

const { Title } = Typography;

function Cover() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

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
      <HashLink smooth to="/#about" scroll={(el) => scrollWithOffset(el)}>
        <Button type="primary" size="large" icon={<ArrowDownOutlined />}>See my work</Button>
      </HashLink>
    </div>
  );
}

export default Cover;
