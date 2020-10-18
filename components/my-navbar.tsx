import { Anchor, Box, Button, Image, Nav, Text } from 'grommet';
import { Facebook, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import NavbarItems from './navbar-items';
import NavbarSecondary from './navbar-secondary';

const MyNavbar = () => {
  return (
    <Box background="white">
      {/* <Box height="4px" background="brand" flex="grow"></Box>       */}

      {/* <NavbarSecondary /> */}

      <MainContent width="xxlarge">
        <Box
          direction="row"
          fill
          align="center"
          pad={{ horizontal: 'none', vertical: '30px' }}
        >
          <Box flex={{ grow: 1 }}>
            <Image src="images/logo.png" width="340px" />
          </Box>

          <Box gap="large" direction="row">
            
            <NavbarItems />

            <Box direction="row" gap="small">
              <Facebook color="facebook" />
              <Instagram color="instagram" />
            </Box>
            {/* <Text>Phoenix, Arizona USA . (88) 9956-55666</Text> */}
          </Box>
        </Box>
      </MainContent>

      {/* <Box height="2px" background="brand" flex="grow"></Box> */}
    </Box>
  );
};

export default MyNavbar;
