import { Anchor, Box, Button, Image, Nav } from 'grommet';
import React from 'react';

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
    <Box>
      <Box align="center" height="90px" justify="center">
        <Box direction="row" width="xlarge" background="" align="center">
          <Box flex={{ grow: 1 }}>
            <Image src="images/logo.png" width="340px" />
          </Box>
          <Box direction="row" gap="large" align="center">
            {items.map((item) => (  
              <Anchor label={item.label} hoverIndicator color="dark-1" />
            ))}

            <Button label="Get a quote!" primary />
          </Box>
        </Box>
      </Box>
      <Box height="3px" background="brand" flex="grow"></Box>
    </Box>
  );
};

export default MyNavbar;
