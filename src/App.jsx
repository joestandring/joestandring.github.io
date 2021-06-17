import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Nav from './components/Nav';
import Cover from './components/Cover';
import PageContents from './components/content/PageContents';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Cover />

      <Content className="content-style">
        <PageContents />
      </Content>

      <Header className="header-style">
        <Nav />
      </Header>
    </Layout>
  );
}

export default App;
