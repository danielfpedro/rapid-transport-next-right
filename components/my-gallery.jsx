import { Box, Grid, Heading, Text } from 'grommet';
import { Home } from 'grommet-icons';
import React from 'react';
import GalleryTile from './gallery-tile';
import MainContent from './main-content';

const MyGallery = () => {
  return (
    // <MainContent>
    //   <Box pad={{ vertical: 'xlarge' }}>
    //     <Box align="" direction="row" gap="large">
    //       <Box>
    //         <GalleryTile filename="gal-3" />
    //       </Box>
    //       <Box flex={{ grow: 1 }} background="">
    //         <Heading color="light-1" level="1">
    //           Sobre Nós
    //         </Heading>
    //         <Heading
    //           level="4"
    //           color="light-2"

    //         >
    //           We are South Asia's premier courier, and integrated express
    //           package ion ye We have the most extensive domestic network vering
    //           over 60 locatins, da service more than 220 countries and
    //           territories worldwid.
    //         </Heading>
    //       </Box>
    //     </Box>

    //     {/* <Box direction="row" fill gap="medium" margin={{ bottom: 'medium' }}>
    //       <GalleryTile filename="gal-1" />
    //       <GalleryTile filename="gal-2" />

    //     </Box> */}
    //     {/* <Box direction="row" fill gap="medium">

    //   </Box> */}
    //   </Box>
    // </MainContent>
    <MainContent>
      <Box pad={{ vertical: 'xlarge' }}>
        <Box align="">
          <Heading
            color="light-1"
            level="1"
            margin={{ bottom: 'medium', top: 'none' }}
          >
            About Us
          </Heading>
          <Box>
            <Heading
              level="3"
              margin={{ bottom: 'large', top: 'none' }}
              color="light-1"
            >
              A Rapid Transport USA faz transportes de veículos em todo o país
              garantindo rapidez e economia.
            </Heading>
          </Box>
        </Box>

        <Box
          direction="row"
          height="500px"
          gap="medium"
          margin={{ bottom: 'medium' }}
        >
          <Box flex={{ grow: '2' }}>
            <GalleryTile filename="gal-5" />
          </Box>
          <Box flex={{ grow: '1' }} gap="medium">
            <GalleryTile filename="gal-8" />
            <GalleryTile filename="gal-1" />
          </Box>
        </Box>

        {/* <Box direction="row" fill gap="medium">

        </Box> */}
      </Box>
    </MainContent>
  );
};

export default MyGallery;
