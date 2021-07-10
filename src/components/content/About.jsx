/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Typography,
  Row,
  Col,
  Divider,
  Tabs,
  Popover,
} from 'antd';
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiCplusplus,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodeDotJs,
  SiGit,
  SiMysql,
  SiNpm,
  SiLinux,
  SiEslint,
  SiVim,
  SiVisualstudiocode,
  SiJson,
  SiUnity,
  SiLatex,
  SiOpenapiinitiative,
} from 'react-icons/si';
import {
  GiServerRack,
  GiDatabase,
  GiBookshelf,
  GiBrickPile,
} from 'react-icons/gi';
import {
  GrMonitor,
  GrCycle,
} from 'react-icons/gr';
import me from '../../media/me.jpg';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

function About(props) {
  const sendTag = (tag) => {
    props.parentCallback(tag);
  };

  return (
    <div id="about">
      <Title className="page-title">About me</Title>
      <Row gutter={64} className="about-row min-width-180">
        <Col flex="220px" className="vert-center">
          <div className="blob" />
          <img className="about-img" src={me} alt="This is me!" />
        </Col>

        <Col flex={1} className="vert-center">
          <Text>
            Hi, I&apos;m Joe! I am a full-stack software developer at
            <a target="_blank" href="https://www.generalandmedical.com/" rel="noreferrer"> General and Medical </a>
            based in Peterborough.
            I&apos;m a JavaScript and C# developer intereseted in all things web, open-source, and
            Linux. I have skills in web and
            native app development and have worked on projects using JavaScript, React, C#, shell
            scripting, and Unity. I have a passion for making beautiful, functional, and clean
            designs supported by reliable architechture.
            You can get in touch with me by
            <a href="mailto:joe@joestandring.com"> email</a>
            , or view my
            <a target="_blank" href="https://linkedin.com/in/joestandring" rel="noreferrer"> LinkedIn </a>
            page for more information.
          </Text>
        </Col>
      </Row>

      <Tabs defaultActiveKey="languages" centered className="tab-style">
        <TabPane tab="Programming Languages" key="languages">
          <Popover content="JavaScript">
            <SiJavascript onClick={() => sendTag('JavaScript')} className="skill-icons" style={{ color: '#F7DF1E' }} />
          </Popover>

          <Popover content="TypeScript">
            <SiTypescript onClick={() => sendTag('TypeScript')} className="skill-icons" style={{ color: '#3178C6' }} />
          </Popover>

          <Popover content="C#">
            <SiCsharp onClick={() => sendTag('C#')} className="skill-icons" style={{ color: '#239120' }} />
          </Popover>

          <Popover content="C/C++">
            <SiCplusplus onClick={() => sendTag('C/C++')} className="skill-icons" style={{ color: '#00599C' }} />
          </Popover>

          <Popover content="BASH/Shell">
            <SiGnubash onClick={() => sendTag('BASH/Shell')} className="skill-icons" style={{ color: '#4EAA25' }} />
          </Popover>

          <Popover content="HTML5">
            <SiHtml5 onClick={() => sendTag('HTML5')} className="skill-icons" style={{ color: '#E34F26' }} />
          </Popover>

          <Popover content="CSS3">
            <SiCss3 onClick={() => sendTag('CSS3')} className="skill-icons" style={{ color: '#1572B6' }} />
          </Popover>
        </TabPane>

        <TabPane tab="Software and Frameworks" key="software">
          <Popover content="React">
            <SiReact onClick={() => sendTag('React')} className="skill-icons" style={{ color: '#61DAFB' }} />
          </Popover>

          <Popover content="Node.js">
            <SiNodeDotJs onClick={() => sendTag('Node.js')} className="skill-icons" style={{ color: '#339933' }} />
          </Popover>

          <Popover content="npm">
            <SiNpm onClick={() => sendTag('npm')} className="skill-icons" style={{ color: '#CB3837' }} />
          </Popover>

          <Popover content="Git">
            <SiGit onClick={() => sendTag('Git')} className="skill-icons" style={{ color: '#F05032' }} />
          </Popover>

          <Popover content="MySQL">
            <SiMysql onClick={() => sendTag('MySQL')} className="skill-icons" style={{ color: '#4479A1' }} />
          </Popover>

          <Popover content="GNU/Linux">
            <SiLinux onClick={() => sendTag('GNU/Linux')} className="skill-icons" style={{ color: '#FCC624' }} />
          </Popover>

          <Popover content="ESLint">
            <SiEslint onClick={() => sendTag('ESLint')} className="skill-icons" style={{ color: '#4B32C3' }} />
          </Popover>

          <Popover content="Vim">
            <SiVim onClick={() => sendTag('Vim')} className="skill-icons" style={{ color: '#019733' }} />
          </Popover>

          <Popover content="Visual Studio Code">
            <SiVisualstudiocode onClick={() => sendTag('Visual Studio Code')} className="skill-icons" style={{ color: '#007ACC' }} />
          </Popover>

          <Popover content="JSON">
            <SiJson onClick={() => sendTag('JSON')} className="skill-icons" style={{ color: '#000' }} />
          </Popover>

          <Popover content="LaTeX">
            <SiLatex onClick={() => sendTag('LaTeX')} className="skill-icons" style={{ color: '#008080' }} />
          </Popover>

          <Popover content="Unity">
            <SiUnity onClick={() => sendTag('Unity')} className="skill-icons" style={{ color: '#000' }} />
          </Popover>
        </TabPane>

        <TabPane tab="Technical Knowledge" key="technical">
          <Popover content="Frontend development">
            <GrMonitor onClick={() => sendTag('Frontend development')} className="skill-icons" />
          </Popover>

          <Popover content="Backend development">
            <GiServerRack onClick={() => sendTag('Backend development')} className="skill-icons" />
          </Popover>

          <Popover content="API Development (OpenAPI)">
            <SiOpenapiinitiative onClick={() => sendTag('API Development (OpenAPI)')} className="skill-icons" />
          </Popover>

          <Popover content="Database management">
            <GiDatabase onClick={() => sendTag('Database management')} className="skill-icons" />
          </Popover>

          <Popover content="Documentation">
            <GiBookshelf onClick={() => sendTag('Documentation')} className="skill-icons" />
          </Popover>

          <Popover content="Software development life-cycles">
            <GrCycle onClick={() => sendTag('Software development life-cycles')} className="skill-icons" />
          </Popover>

          <Popover content="Object-oriented programming">
            <GiBrickPile onClick={() => sendTag('Object-oriented programming')} className="skill-icons" />
          </Popover>
        </TabPane>
      </Tabs>

      <Divider />
    </div>
  );
}

export default About;
