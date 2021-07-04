import React from 'react';
import {
  Menu,
  Row,
  Col,
  Typography,
} from 'antd';
import { GithubFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons';
import { HashLink } from 'react-router-hash-link';

const { Title } = Typography;

function Nav() {
  const scrollWithOffsetAbout = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -65;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Row>
      <Col span={8}>
        <HashLink smooth to="/#top">
          <Title
            level={2}
            style={{ color: '#f2f2f2f2', marginTop: '10.5px', marginLeft: '25px' }}
          >
            Joe Standring
          </Title>
        </HashLink>
      </Col>

      <Col flex={1}>
        <Menu
          theme="dark"
          mode="horizontal"
          className="nav-menu"
        >
          <HashLink smooth to="/#about" scroll={(el) => scrollWithOffsetAbout(el)}>
            <div className="nav-item">
              About
            </div>
          </HashLink>

          <HashLink smooth to="/#portfolio" scroll={(el) => scrollWithOffset(el)}>
            <div className="nav-item">
              Portfolio
            </div>
          </HashLink>

          <HashLink smooth to="/#blog" scroll={(el) => scrollWithOffset(el)}>
            <div className="nav-item">
              Blog
            </div>
          </HashLink>
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
