import { Box, Heading } from 'grommet';
import React from 'react';
import MyNavbar from './my-navbar';
import QuoteForm from './quote-form';

const Header = () => {
  return (
    <Box
      align="center"
      style={{
        backgroundImage: 'url(images/tey.png)',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#FFF',
      }}
      pad={{ vertical: 'large' }}
    >
      <Box align="center" direction="row" gap="xlarge">
        <Box align="center" background="" flex={{ grow: 1 }}>
          <Heading color="light-1" margin="none">
            You Call, We Haul, That's all!
          </Heading>

          <Heading color="light-1" level="3" textAlign="center">
            Montway Auto Transport is the number one rated car transporter in
            the U.S.
          </Heading>
        </Box>
        <Box>
          <QuoteForm />
        </Box>
        {/* <Box background="">
            <QuoteForm />
          </Box> */}
      </Box>
    </Box>
  );
};

export default Header;
