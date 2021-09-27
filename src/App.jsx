import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Cover from './components/Cover';
import PageContents from './components/content/PageContents';
import Project from './components/content/Project';
import FooterContent from './components/FooterContent';
import Post from './components/content/Post';

const { Header, Content, Footer } = Layout;

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

function App() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Layout className="layout">
        <Switch>
          <Route path="/blog/:route">
            <Content className="content-style">
              <Post />
            </Content>
          </Route>
          <Route path="/project/:route">
            <Content className="content-style">
              <Project />
            </Content>
          </Route>
          <Route path="/">
            <Cover />
            <Content className="content-style">
              <PageContents windowWidth={windowWidth} />
            </Content>
          </Route>
        </Switch>
        <Header className="header-style">
          <Nav windowWidth={windowWidth} />
        </Header>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
