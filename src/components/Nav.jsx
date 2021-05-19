import React from 'react';
import {
  Menu,
  Row,
  Col,
  Typography,
} from 'antd';

const { Title } = Typography;

function Nav() {
  return (
    <Row>
      <Col flex="auto">
        <Title
          level={2}
          style={{
            color: '#f2f2f2',
            marginTop: '10.5px',
            marginLeft: '10.5px',
          }}
        >
          Joe Standring
        </Title>
      </Col>

      <Col>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys="about"
        >
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="projects">Projects</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="github">GitHub</Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default Nav;
