import { Box, Grid, Heading, Text } from 'grommet';
import { Home } from 'grommet-icons';
import React from 'react';
import GalleryTile from './gallery-tile';
import MainContent from './main-content';

const MyGallery = () => {
  return (
    <MainContent>
      <Box pad="xlarge">
        <Box align="">
          <Heading
            color="light-1"
            level="1"
            margin={{ bottom: 'medium', top: 'none' }}
          >
            Sobre Nós
          </Heading>
          <Heading
            level="3"
            margin={{ bottom: 'large', top: 'none' }}
            textAlign=""
            color="light-2"
          >
            Rapid Transport é uma company maneira de confiança e tal.
          </Heading>
        </Box>

        <Box direction="row" fill gap="medium" margin={{ bottom: 'medium' }}>
          <GalleryTile filename="gal-1" />
          <GalleryTile filename="gal-2" />
          <GalleryTile filename="gal-3" />
          <GalleryTile filename="gal-4" />
        </Box>
        {/* <Box direction="row" fill gap="medium">
          
        </Box> */}
      </Box>
    </MainContent>
  );
};

export default MyGallery;
