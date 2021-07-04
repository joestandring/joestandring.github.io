import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cover from './components/Cover';
import PageContents from './components/content/PageContents';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Cover />

        <Content className="content-style">
          <Switch>
            <Route path="/">
              <PageContents />
            </Route>
          </Switch>
        </Content>

        <Header className="header-style">
          <Nav />
        </Header>
      </Layout>
    </Router>
  );
}

export default App;
