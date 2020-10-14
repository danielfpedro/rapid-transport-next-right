import { Anchor, Box, Footer, Heading, Image, Text } from 'grommet';
import { Facebook, Home, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';

const MyFooter = () => {
  return (
    <Box background="brand" >
      <MainContent>
        <Box align="center" pad={{top: 'large', bottom: 'medium'}} >
          <Box direction="row" gap="large" margin={{'bottom': 'large'}}>
            <Anchor label="Contacts" color="white" />
            <Anchor label="About Us" color="white" />
            <Anchor label="Quote Now!" color="white" />
          </Box>
          
          <Text margin="none" size="medium">Todos os direitos reservados Rapid Transport 2020</Text>

        </Box>
      </MainContent>
    </Box>
  );
};

export default MyFooter;
