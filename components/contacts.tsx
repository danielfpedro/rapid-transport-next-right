import { Box, Heading } from 'grommet';
import {
  Facebook,
  FacebookOption,
  Instagram,
  MailOption,
  Phone,
} from 'grommet-icons';
import React from 'react';
import CardContact from './card-contact';
import MainContent from './main-content';
import SocialNetworks from './social-networks';

const Contacts = () => {
  return (
    <MainContent>
      <Box background="white" pad="xlarge">
        <Box align="center">
          <Heading
            level="1"
            margin={{ bottom: 'xsmall', top: 'none' }}
            color="dark-1"
          >
            Follow Us
          </Heading>
        </Box>
        {/* <Box direction="row" margin={{ bottom: 'medium' }} gap="medium">
          <Box fill>
            <CardContact
              icon={<MailOption color="brand" size="large" />}
              title="Email"
              content="example@gmail.com"
            />
          </Box>
          <Box fill>
            <CardContact
              icon={<Phone color="brand" size="large" />}
              title="Phone"
              content="(88) 9844-6655"
            />
          </Box>
        </Box> */}

        {/* <Box direction="row" margin="none" gap="medium">
          <Box fill>
            <CardContact
              icon={<Instagram color="instagram" size="large" />}
              title="Instagram"
            />
          </Box>
          <Box fill>
            <CardContact
              icon={<Facebook color="facebook" size="large" />}
              title="Facebook"
            />
          </Box>
        </Box> */}

        <Box align="center" margin={{ top: 'large' }}>
          <SocialNetworks />
        </Box>
      </Box>
    </MainContent>
  );
};

export default Contacts;
