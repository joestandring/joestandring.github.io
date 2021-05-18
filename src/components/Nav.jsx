import React from 'react';
import { Menu } from 'antd';

function Nav() {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={0}
      >
        <Menu.Item key="about">About</Menu.Item>
        <Menu.Item key="projects">Projects</Menu.Item>
        <Menu.Item key="blog">Blog</Menu.Item>
      </Menu>
    </>
  );
}

export default Nav;
