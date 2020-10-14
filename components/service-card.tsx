import { Box, Heading, Text } from 'grommet';
import { Home } from 'grommet-icons';
import React from 'react';

const ServiceCard = ({icon}) => {
  return (
    <Box align="center" margin="none">
      <Box margin={{bottom: 'medium'}}>
        {icon}
      </Box>
      <Box>
        <Text color="dark-1" size="large" textAlign="center" margin="none">
          You don't have to code to create your own site. Select one of
          available themes in the Mobirise sitebuilder.
        </Text>
      </Box>
    </Box>
  );
};

export default ServiceCard;
