import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Nav from './components/Nav';
import Cover from './components/Cover';
import About from './components/About';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Cover />

      <Content className="content-style">
        <About />
      </Content>

      <Header className="header-style">
        <Nav />
      </Header>
    </Layout>
  );
}

export default App;
