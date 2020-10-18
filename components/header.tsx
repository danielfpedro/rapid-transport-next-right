import { Box, Heading } from 'grommet';
import React from 'react';
import MyNavbar from './my-navbar';
import QuoteForm from './quote-form';

const Header = () => {
  return (
    <Box
      align="center"
      style={{
        backgroundImage: 'url(images/header.png)',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#000',
      }}
      pad={{ vertical: '120px' }}
    >
      <Box align="center" width="xlarge" direction="row" gap="xlarge">
        <Box fill>
          <Heading
            color="light-1"
            margin="none"
            textAlign="start"
            style={{ textShadow: '0px 2px 1px rgba(0, 0, 0, 1)' }}
          >
            Rapidez e segurança para transportar seu automóvel!
          </Heading>

          <Heading
            color="light-1"
            level="3"
            margin={{ vertical: 'medium' }}
            textAlign="start"
            style={{ textShadow: '0px 2px 1px rgba(0, 0, 0, 1)' }}
          >
            Com a Rapid Transport USA você pode enviar seu veículo para qualquer
            lugar dos EUA com agilidade e segurança.
          </Heading>
        </Box>

        <Box width="700px">
          <QuoteForm />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
