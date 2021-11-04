/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
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
  SiCsharp,
  SiCplusplus,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodeDotJs,
  SiGit,
  SiAzuredevops,
  SiMicrosoftsqlserver,
  SiNpm,
  SiLinux,
  SiEslint,
  SiVisualstudiocode,
  SiJson,
  SiUnity,
  SiOpenapiinitiative,
  SiDotNet,
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
  const { windowWidth } = props;

  const sendTag = (tag) => {
    props.parentCallback(tag);
  };

  const Description = () => {
    const AboutText = () => (
      <Text>
        Hi, I&apos;m Joe! I am a full-stack software developer at
        <a target="_blank" href="https://www.generalandmedical.com/" rel="noreferrer"> General & Medical </a>
        based in Peterborough.
        I&apos;m a JavaScript and C# developer interested in all things web, open-source, and
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
    );

    const Avi = () => (
      <div className="avi">
        <div className="blob2" />
        <div className="blob" />
        <img className="about-img" src={me} alt="This is me!" />
      </div>
    );

    if (windowWidth > 600) {
      return (
        <Row gutter={64} className="about-row min-width-180">
          <Col flex="220px" className="vert-center">
            <Avi />
          </Col>

          <Col flex={1} className="vert-center">
            <AboutText />
          </Col>
        </Row>
      );
    }
    return (
      <>
        <div className="vert-center avi-mobile">
          <Avi />
        </div>

        <div className="center-text">
          <Text>
            <AboutText />
          </Text>
        </div>
      </>
    );
  };

  const Skills = () => {
    const Languages = () => (
      <>
        <Popover content="JavaScript">
          <SiJavascript onClick={() => sendTag('JavaScript')} className="skill-icons" style={{ color: '#F7DF1E' }} />
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
      </>
    );

    const Software = () => (
      <>
        <Popover content="React">
          <SiReact onClick={() => sendTag('React')} className="skill-icons" style={{ color: '#61DAFB' }} />
        </Popover>

        <Popover content="Node.js">
          <SiNodeDotJs onClick={() => sendTag('Node.js')} className="skill-icons" style={{ color: '#339933' }} />
        </Popover>

        <Popover content="npm">
          <SiNpm onClick={() => sendTag('npm')} className="skill-icons" style={{ color: '#CB3837' }} />
        </Popover>

        <Popover content="ASP.NET">
          <SiDotNet onClick={() => sendTag('ASP.NET')} className="skill-icons" style={{ color: '#5c2d91' }} />
        </Popover>

        <Popover content="Git">
          <SiGit onClick={() => sendTag('Git')} className="skill-icons" style={{ color: '#F05032' }} />
        </Popover>

        <Popover content="Azure DevOps">
          <SiAzuredevops onClick={() => sendTag('Azure DevOps')} className="skill-icons" style={{ color: '#0078d4' }} />
        </Popover>

        <Popover content="SQL">
          <SiMicrosoftsqlserver onClick={() => sendTag('SQL')} className="skill-icons" style={{ color: '#c02525' }} />
        </Popover>

        <Popover content="GNU/Linux">
          <SiLinux onClick={() => sendTag('GNU/Linux')} className="skill-icons" style={{ color: '#FCC624' }} />
        </Popover>

        <Popover content="ESLint">
          <SiEslint onClick={() => sendTag('ESLint')} className="skill-icons" style={{ color: '#4B32C3' }} />
        </Popover>

        <Popover content="Visual Studio Code">
          <SiVisualstudiocode onClick={() => sendTag('Visual Studio Code')} className="skill-icons" style={{ color: '#007ACC' }} />
        </Popover>

        <Popover content="JSON">
          <SiJson onClick={() => sendTag('JSON')} className="skill-icons" style={{ color: '#000' }} />
        </Popover>

        <Popover content="Unity">
          <SiUnity onClick={() => sendTag('Unity')} className="skill-icons" style={{ color: '#000' }} />
        </Popover>
      </>
    );

    const Technical = () => (
      <>
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
      </>
    );

    if (windowWidth > 600) {
      return (
        <Tabs defaultActiveKey="languages" centered className="tab-style">
          <TabPane tab="Programming Languages" key="languages">
            <Languages />
          </TabPane>

          <TabPane tab="Software and Frameworks" key="software">
            <Software />
          </TabPane>

          <TabPane tab="Technical Knowledge" key="technical">
            <Technical />
          </TabPane>
        </Tabs>
      );
    }
    return (
      <>
        <Title level={4} className="page-subtitle">Programming Languages</Title>
        <div className="skill-container">
          <Languages />
        </div>
        <Title level={4} className="page-subtitle">Software and Frameworks</Title>
        <div className="skill-container">
          <Software />
        </div>
        <Title level={4} className="page-subtitle">Technical Knowledge</Title>
        <div className="skill-container">
          <Technical />
        </div>
      </>
    );
  };

  return (
    <div id="about">
      <Title className="center-text">About me</Title>
      <Description />
      <Skills />
      <Divider />
    </div>
  );
}

About.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  parentCallback: PropTypes.func.isRequired,
};

export default About;
