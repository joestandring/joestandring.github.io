import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

function FooterContent() {
  return (
    <div className="footer">
      <Text>
        <div>
          ©&nbsp;
          { new Date().getFullYear() }
          ,
          Joe Standring
        </div>
        <div>
          <a href="mailto:joe@joestandring.com">Contact</a>
        </div>
      </Text>
    </div>
  );
}

export default FooterContent;
