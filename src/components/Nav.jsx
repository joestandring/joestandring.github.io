import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Row,
  Col,
  Typography,
  Drawer,
} from 'antd';
import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi';

const { Title } = Typography;

function Nav(props) {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { windowWidth } = props;

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  if (windowWidth > 870) {
    return (
      <Row>
        <Col span={8}>
          <HashLink smooth to="/#top">
            <Title
              level={2}
              className="nav-logo"
            >
              Joe Standring
            </Title>
          </HashLink>
        </Col>

        <Col flex={1}>
          <Menu
            theme="dark"
            mode="horizontal"
            className="vert-center"
          >
            <HashLink smooth to="/#about" scroll={(el) => scrollWithOffset(el)}>
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
  return (
    <Row style={{ width: windowWidth }}>
      <Col flex={1}>
        <HashLink smooth to="/#top">
          <Title
            level={2}
            className="nav-logo"
          >
            JS
          </Title>
        </HashLink>
      </Col>

      <GiHamburgerMenu size={35} className="hamburger" onClick={toggleDrawer} cursor="pointer" />
      <Drawer
        bodyStyle={{ backgroundColor: '#222', padding: '0' }}
        headerStyle={{ color: '#f2f2f2', height: '64px', padding: '0' }}
        visible={drawerVisible}
        onClose={toggleDrawer}
        closeIcon={<CloseCircleFilled className="close-icon" />}
        title="Go to..."
      >
        <HashLink smooth to="/#about" scroll={(el) => scrollWithOffset(el)} onClick={toggleDrawer}>
          <div className="mobile-nav-item">
            About me
          </div>
        </HashLink>
        <HashLink smooth to="/#portfolio" scroll={(el) => scrollWithOffset(el)} onClick={toggleDrawer}>
          <div className="mobile-nav-item">
            Portfolio
          </div>
        </HashLink>
        <HashLink smooth to="/#blog" scroll={(el) => scrollWithOffset(el)} onClick={toggleDrawer}>
          <div className="mobile-nav-item">
            Blog
          </div>
        </HashLink>
        <a target="_blank" href="https://github.com/joestandring" rel="noreferrer">
          <div className="mobile-nav-item">
            GitHub
          </div>
        </a>
        <a target="_blank" href="https://linkedin.com/in/joestandring" rel="noreferrer">
          <div className="mobile-nav-item">
            LinkedIn
          </div>
        </a>
        <a target="_blank" href="https://twitter.com/pandaontoast" rel="noreferrer">
          <div className="mobile-nav-item">
            Twitter
          </div>
        </a>
      </Drawer>
    </Row>
  );
}

Nav.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Nav;
