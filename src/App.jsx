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
      <Header style={{ padding: 0, position: 'fixed', width: '100%' }}>
        <Nav />
      </Header>

      <Cover />

      <Content style={{ padding: '30px' }}>
        <About />
      </Content>
    </Layout>
  );
}

export default App;
