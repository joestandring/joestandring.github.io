import React from 'react';
import {
  Menu,
  Row,
  Col,
  Typography,
} from 'antd';
import { GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';

const { Title } = Typography;

function Nav() {
  return (
    <Row>
      <Col flex={1}>
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
          style={{ justifyContent: 'center' }}
        >
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="projects">Projects</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
        </Menu>
      </Col>

      <Col flex={1} style={{ textAlign: 'right' }}>
        <GithubFilled className="social-icon" />
        <LinkedinFilled className="social-icon" />
        <TwitterCircleFilled className="social-icon" style={{ marginRight: '10.5px' }} />
      </Col>
    </Row>
  );
}

export default Nav;
