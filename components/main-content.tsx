import { Box } from 'grommet';
import React from 'react';

const MainContent = ({ children }) => {
  return (
    <Box align="center">
      <Box width="xlarge">
        {children}
      </Box>
    </Box>
  );
};

export default MainContent;
