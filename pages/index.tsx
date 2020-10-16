import { Box, Heading } from 'grommet';
import React from 'react';
import AboutUs from '../components/about-us';
import Call from '../components/call';
import Contacts from '../components/contacts';
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

      <Call />

      <Box background="black">
        <MyGallery />
      </Box>

      

      <Box background="light-3">
        <Contacts />
      </Box>

      <AboutUs />

      {/* <Box background="" pad={{ vertical: blocksPad }}>
          <FollowUs />
        </Box> */}

      <MyFooter />
    </Box>
  );
};

export default Index;
