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
      <Col span={8}>
        <Title
          level={2}
          style={{ color: '#f2f2f2f2', marginTop: '10.5px', marginLeft: '25px' }}
        >
          Joe Standring
        </Title>
      </Col>

      <Col flex={1}>
        <Menu
          theme="dark"
          mode="horizontal"
          className="nav-menu"
        >
          <Menu.Item
            className="nav-item"
            key="about"
          >
            About
          </Menu.Item>
          <Menu.Item
            className="nav-item"
            key="portfolio"
          >
            Portfolio
          </Menu.Item>
          <Menu.Item
            className="nav-item"
            key="blog"
          >
            Blog
          </Menu.Item>
        </Menu>
      </Col>

      <Col span={8} className="align-right">
        <a target="_blank" href="https://github.com/joestandring" rel="noreferrer">
          <GithubFilled className="social-icon" />
        </a>
        <a target="_blank" href="https://linkedin.com/in/joestandring" rel="noreferrer">
          <LinkedinFilled className="social-icon" />
        </a>
        <a target="_blank" href="https://twitter.com/pandaontoast" rel="noreferrer">
          <TwitterCircleFilled className="social-icon social-margin" />
        </a>
      </Col>
    </Row>
  );
}

export default Nav;
