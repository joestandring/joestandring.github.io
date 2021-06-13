import React from 'react';
import {
  Typography,
  Row,
  Col,
  Divider,
} from 'antd';
import me from '../media/me.jpg';

const { Title, Text } = Typography;

function About() {
  return (
    <>
      <Title className="page-title">About me</Title>
      <Row gutter={64}>
        <Col flex="220px" className="vert-center relative">
          <div className="blob" />
          <img src={me} alt="This is me!" />
        </Col>

        <Col flex="75%" className="vert-center">
          <Row className="new-line">
            <Text>
              Hi, I&apos;m Joe! I am a recent Informatics graduate and software developer based in
              Peterborough.
              I&apos;m a JavaScript and C# developer intereseted in full-stack web development,
              Linux, and open source software. I have skills in web and
              native app development and have worked on projects using JavaScript, React, C#, shell
              scripting, and Unity. I have a passion for making beautiful, functional, and clean
              designs.
            </Text>
          </Row>

          <Row>
            <Text>
              I am currently looking for work in a software development role. You can get in touch
              with me by
              <a href="mailto:joe@joestandring.com"> email</a>
              , or view my
              <a target="_blank" href="https://linkedin.com/in/joestandring" rel="noreferrer"> LinkedIn </a>
              page for more information.
            </Text>
          </Row>
        </Col>
      </Row>

      <Divider />
    </>
  );
}

export default About;
