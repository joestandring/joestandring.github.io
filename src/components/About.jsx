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

import me from '../media/me.jpg';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

function About() {
  return (
    <>
      <Title className="page-title">About me</Title>
      <Row gutter={64} className="about-row min-width-180">
        <Col flex="220px" className="vert-center">
          <div className="blob" />
          <img className="about-img" src={me} alt="This is me!" />
        </Col>

        <Col flex={1} className="vert-center">
          <Text>
            Hi, I&apos;m Joe! I am a recent Informatics graduate and software developer based in
            Peterborough.
            I&apos;m a JavaScript and C# developer intereseted in full-stack web development,
            Linux, and open source software. I have skills in web and
            native app development and have worked on projects using JavaScript, React, C#, shell
            scripting, and Unity. I have a passion for making beautiful, functional, and clean
            designs.
            I am currently looking for work in a software development role. You can get in touch
            with me by
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
            <SiJavascript className="skill-icons" style={{ color: '#F7DF1E' }} />
          </Popover>

          <Popover content="TypeScript">
            <SiTypescript className="skill-icons" style={{ color: '#3178C6' }} />
          </Popover>

          <Popover content="C#">
            <SiCsharp className="skill-icons" style={{ color: '#239120' }} />
          </Popover>

          <Popover content="C/C++">
            <SiCplusplus className="skill-icons" style={{ color: '#00599C' }} />
          </Popover>

          <Popover content="BASH/Shell">
            <SiGnubash className="skill-icons" style={{ color: '#4EAA25' }} />
          </Popover>

          <Popover content="HTML5">
            <SiHtml5 className="skill-icons" style={{ color: '#E34F26' }} />
          </Popover>

          <Popover content="CSS3">
            <SiCss3 className="skill-icons" style={{ color: '#1572B6' }} />
          </Popover>
        </TabPane>

        <TabPane tab="Software and Frameworks" key="software">
          <Popover content="React">
            <SiReact className="skill-icons" style={{ color: '#61DAFB' }} />
          </Popover>

          <Popover content="Node.js">
            <SiNodeDotJs className="skill-icons" style={{ color: '#339933' }} />
          </Popover>

          <Popover content="npm">
            <SiNpm className="skill-icons" style={{ color: '#CB3837' }} />
          </Popover>

          <Popover content="Git">
            <SiGit className="skill-icons" style={{ color: '#F05032' }} />
          </Popover>

          <Popover content="MySQL">
            <SiMysql className="skill-icons" style={{ color: '#4479A1' }} />
          </Popover>

          <Popover content="GNU/Linux">
            <SiLinux className="skill-icons" style={{ color: '#FCC624' }} />
          </Popover>

          <Popover content="ESLint">
            <SiEslint className="skill-icons" style={{ color: '#4B32C3' }} />
          </Popover>

          <Popover content="Vim">
            <SiVim className="skill-icons" style={{ color: '#019733' }} />
          </Popover>

          <Popover content="Visual Studio Code">
            <SiVisualstudiocode className="skill-icons" style={{ color: '#007ACC' }} />
          </Popover>

          <Popover content="JSON">
            <SiJson className="skill-icons" style={{ color: '#000' }} />
          </Popover>

          <Popover content="LaTeX">
            <SiLatex className="skill-icons" style={{ color: '#008080' }} />
          </Popover>

          <Popover content="Unity">
            <SiUnity className="skill-icons" style={{ color: '#000' }} />
          </Popover>
        </TabPane>

        <TabPane tab="Technical Knowledge" key="technical">
          <Popover content="Frontend development">
            <GrMonitor className="skill-icons" />
          </Popover>

          <Popover content="Backend development">
            <GiServerRack className="skill-icons" />
          </Popover>

          <Popover content="API Development (OpenAPI)">
            <SiOpenapiinitiative className="skill-icons" />
          </Popover>

          <Popover content="Database management">
            <GiDatabase className="skill-icons" />
          </Popover>

          <Popover content="Documentation">
            <GiBookshelf className="skill-icons" />
          </Popover>

          <Popover content="Software development life-cycles">
            <GrCycle className="skill-icons" />
          </Popover>

          <Popover content="Object-oriented programming">
            <GiBrickPile className="skill-icons" />
          </Popover>
        </TabPane>
      </Tabs>

      <Divider />
    </>
  );
}

export default About;
