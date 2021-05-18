import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Nav from './components/Nav';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Nav />
      </Header>

      <Content>
        <p>content</p>
      </Content>
    </Layout>
  );
}

export default App;
