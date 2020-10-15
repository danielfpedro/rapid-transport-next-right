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
    <Box background="light-3">
      <MyNavbar />

      <Box background="">
        <Header />
      </Box>

      <Box background="white">
        <MainContent>
          <OurJob backgroundColor="white" />
        </MainContent>
      </Box>

      <Box background="black">
        <MyGallery />
      </Box>

      <Box background="white">
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
