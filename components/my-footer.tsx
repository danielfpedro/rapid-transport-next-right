import { Anchor, Box, Footer, Heading, Image, Text } from 'grommet';
import { Facebook, Home, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import NavbarItems from './navbar-items';

const MyFooter = () => {
  return (
    <Box background="light-2" pad={{ bottom: 'medium', top: 'large' }}>
      <MainContent>
        <Box align="center">
          <Box margin={{ bottom: 'medium', top: 'none' }}>
            <NavbarItems />
          </Box>

          <Box pad={{ bottom: 'medium', top: 'none' }}>
            <Box direction="row" gap="small">
              <Facebook color="dark-4" />
              <Instagram color="dark-4" />
            </Box>
          </Box>

          <Text margin="xsmall" size="medium">
            Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544
          </Text>
        </Box>
      </MainContent>
    </Box>
  );
};

export default MyFooter;
