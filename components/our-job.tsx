import { Box, Heading } from 'grommet';
import { Analytics, Bluetooth, Home } from 'grommet-icons';
import MainContent from './main-content';
import ServiceCard from './service-card';

const OurJob = () => {
  return (
    <MainContent>
      <Heading color="dark-1" textAlign="center" margin={{ bottom: 'large', top: 'none' }}>
        O Que fazemos?
      </Heading>

      <Box
        direction="row"
        gap="xlarge"
        align="center"
        margin={{ vertical: 'none' }}
      >
        <ServiceCard icon={<Home color="brand" size="xlarge" />} />
        <ServiceCard icon={<Analytics color="brand" size="xlarge" />} />
        <ServiceCard icon={<Bluetooth color="brand" size="xlarge" />} />
      </Box>
    </MainContent>
  );
};

export default OurJob;
