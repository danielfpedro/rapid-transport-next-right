import { Box } from 'grommet';
import React from 'react';
import Contacts from '../components/contacts';
import FollowUs from '../components/follow-us';
import Header from '../components/header';
import MainContent from '../components/main-content';
import MyFooter from '../components/my-footer';
import MyGallery from '../components/my-gallery';
import MyNavbar from '../components/my-navbar';
import OurJob from '../components/our-job';

const Index = () => {
  const blocksPad = 'xlarge';
  return (
    <Box>
      <MyNavbar />
      <Box background="">
        <Header />
      </Box>

      <Box background="light-1" pad={{ vertical: blocksPad }}>
        <OurJob />
      </Box>

      <Box background="" pad={{ vertical: blocksPad }}>
        <MyGallery />
      </Box>

      <Box background="light-1" pad={{ vertical: blocksPad }}>
        <Contacts />
      </Box>

      {/* <Box background="" pad={{ vertical: blocksPad }}>
          <FollowUs />
        </Box> */}

      <MyFooter />
    </Box>
  );
};

export default Index;
