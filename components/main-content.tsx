import { Box } from 'grommet';
import React from 'react';

const MainContent = ({ children, width= 'xlarge', backgroundColor = null,pad= null }) => {
  return (
    <Box align="center" background={backgroundColor} pad={pad}>
      <Box width={width}>
        {children}
      </Box>
    </Box>
  );
};

export default MainContent;
