import { Box, Card, CardBody, CardHeader, Heading, Image, Text } from 'grommet';
import { Home } from 'grommet-icons';
import { Head } from 'next/document';
import React from 'react';

const ServiceCard = ({ icon, filename }) => {
  return (
    <Card>
      <CardHeader pad="medium" align="center" alignSelf="center">
        {/* <Image src={`images/vectors/${filename}.svg`} fill /> */}
        {icon}
      </CardHeader>
      <CardBody pad="medium">
        <Heading level="3" color="dark-1" margin={{ bottom: 'small', top: 'none' }}>
          Its title Here
        </Heading>
        You don't have to code to create your own site. Select one of available
        themes in the Mobirise sitebuilder.
      </CardBody>
    </Card>
    // <Box align="center" margin="none">
    //   <Box margin={{bottom: 'medium'}}>
    //     {icon}
    //   </Box>
    //   <Box>
    //     <Text color="dark-2" size="large" textAlign="center" margin="none">
    //       You don't have to code to create your own site. Select one of
    //       available themes in the Mobirise sitebuilder.
    //     </Text>
    //   </Box>
    // </Box>
  );
};

export default ServiceCard;
