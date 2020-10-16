import { Box, Heading } from 'grommet';
import {
  Clock,
  Facebook,
  FacebookOption,
  Instagram,
  MailOption,
  Map,
  MapLocation,
  Phone,
} from 'grommet-icons';
import { Head } from 'next/document';
import React from 'react';
import CardContact from './card-contact';
import MainContent from './main-content';
import SocialNetworks from './social-networks';

const Contacts = () => {
  return (
    <MainContent width="xlarge">
      {/* <Box background="white" pad="xlarge">
        <Box align="center">
          <Heading
            level="1"
            margin={{ bottom: 'xsmall', top: 'none' }}
            color="dark-1"
          >
            Follow Us
          </Heading>
        </Box> */}

      <Box pad={{ vertical: 'xlarge' }}>
        <Box align="center">
          <Heading level="1" margin={{ bottom: 'large', top: 'none' }}>
            Get In Touch With Us
          </Heading>
          {/* <Heading level="3" textAlign="center" margin={{ bottom: 'xlarge' }}>
            If you’d like a free consultation, please start by completing the
            form:
          </Heading> */}
        </Box>
        <Box direction="row" gap="large">
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
        </Box>

        <Box direction="row" gap="large" pad={{ top: 'large' }}>
          <Box fill>
            <CardContact
              icon={<Map color="brand" size="large" />}
              title="Location"
              content="Phoenix, Arizona USA"
            />
          </Box>
          <Box fill>
            <CardContact
              icon={<Clock color="brand" size="large" />}
              title="Working Hour"
              content="09:00 - 16:00"
            />
          </Box>
        </Box>
      </Box>

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
      {/* 
        <Box align="center" margin={{ top: 'large' }}>
          <SocialNetworks />
        </Box>
      </Box> */}
    </MainContent>
  );
};

export default Contacts;
