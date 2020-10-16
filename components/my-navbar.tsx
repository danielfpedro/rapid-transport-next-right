import { Anchor, Box, Button, Image, Nav, Text } from 'grommet';
import { Facebook, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import NavbarSecondary from './navbar-secondary';

const items = [
  {
    label: 'O que fazemos?',
  },
  {
    label: 'About Us',
  },
  {
    label: 'Contact Us',
  },
];

const MyNavbar = () => {
  return (
    <Box background="white">
      {/* <Box height="4px" background="brand" flex="grow"></Box>       */}

      {/* <NavbarSecondary /> */}

      <MainContent>
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
            {items.map((item) => (
              <Anchor label={item.label} color="dark-1" />
            ))}

            {/* <Button label="Get a quote!" primary /> */}

            <Box direction="row" gap="small">
              <Facebook color="facebook" />
              <Instagram color="instagram" />
            </Box>
          </Box>
        </Box>
      </MainContent>

      <Box height="5px" background="brand" flex="grow"></Box>      
    </Box>
  );
};

export default MyNavbar;
