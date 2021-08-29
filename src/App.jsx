import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cover from './components/Cover';
import PageContents from './components/content/PageContents';
import Project from './components/content/Project';
import FooterContent from './components/FooterContent';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Switch>
          <Route path="/:route">
            <Content className="content-style">
              <Project />
            </Content>
          </Route>
          <Route path="/">
            <Cover />
            <Content className="content-style">
              <PageContents />
            </Content>
          </Route>
        </Switch>
        <Header className="header-style">
          <Nav />
        </Header>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
