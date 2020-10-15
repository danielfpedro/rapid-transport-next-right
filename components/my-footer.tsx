import { Anchor, Box, Footer, Heading, Image, Text } from 'grommet';
import { Facebook, Home, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';

const MyFooter = () => {
  return (
    <Box background="light-2" >
      <MainContent>
        <Box align="center" pad={{top: 'large', bottom: 'medium'}} >
          <Box direction="row" gap="large" margin={{'bottom': 'large'}}>
            <Anchor label="Contacts" color="dark-1" />
            <Anchor label="About Us" color="dark-1" />
            <Anchor label="Quote Now!" color="dark-1" />
          </Box>
          
          <Text margin="xsmall" size="medium">Phoenix, Arizona USA . (88) 87445544</Text>
          <Text margin="none" size="medium">Todos os direitos reservados Rapid Transport 2020</Text>

        </Box>
      </MainContent>
    </Box>
  );
};

export default MyFooter;
