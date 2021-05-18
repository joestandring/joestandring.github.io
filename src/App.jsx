import React from 'react';
import { Layout } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <p>header</p>
      </Header>

      <Content>
        <p>content</p>
      </Content>

      <Footer>
        <p>footer</p>
      </Footer>
    </Layout>
  );
}

export default App;
