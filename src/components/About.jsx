import React from 'react';
import {
  Typography,
  Row,
  Col,
  Image,
} from 'antd';
import me from '../media/me.jpg';

const { Title, Text } = Typography;

function About() {
  return (
    <>
      <Row gutter={16}>
        <Col flex="220px">
          <Image src={me} style={{ borderRadius: '50%' }} />
          <Title level={2} style={{ textAlign: 'center' }}>Joe Standring</Title>
        </Col>

        <Col flex="75%">
          <Text>
            Hi, I&apos;m Joe! I am currently a student at Coventry University studying Informatics.
            I&apos;m a JavaScript and C# developer intereseted in full-stack web development,
            artificial intelligence, Linux, and open source software. I have skills in web and
            native app development and have worked on projects using JavaScript, React, C#, shell
            scripting, and Unity.
          </Text>
        </Col>
      </Row>
    </>
  );
}

export default About;
