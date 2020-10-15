import { Box } from 'grommet';
import React from 'react';

const MainContent = ({ children, backgroundColor = null,pad= null }) => {
  return (
    <Box align="center" background={backgroundColor} pad={pad}>
      <Box width="xxlarge">
        {children}
      </Box>
    </Box>
  );
};

export default MainContent;
