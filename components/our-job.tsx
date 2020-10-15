import { Box, Heading } from 'grommet';
import { Analytics, Bluetooth, Checkmark, Deliver, Home, ScheduleNew } from 'grommet-icons';
import MainContent from './main-content';
import ServiceCard from './service-card';

const OurJob = ({backgroundColor}) => {
  return (
    <Box pad="xlarge">
      {/* <Heading level="1" color="dark-1" textAlign="center" margin={{ bottom: 'large', top: 'none' }}>
        O Que fazemos?
      </Heading> */}

      <Box
        direction="row"
        gap="large"
        align="center"
        margin={{ vertical: 'none' }}
      >
        <ServiceCard filename="01" icon={<ScheduleNew color="dark-1" size="xlarge" />} />
        <ServiceCard filename="02" icon={<Deliver color="dark-1" size="xlarge" />} />
        <ServiceCard filename="03" icon={<Checkmark color="dark-1" size="xlarge" />} />
      </Box>
      </Box>
  );
};

export default OurJob;
