import { Box, Heading } from 'grommet';
import {
  Analytics,
  Bluetooth,
  Checkmark,
  Deliver,
  Home,
  ScheduleNew,
} from 'grommet-icons';
import MainContent from './main-content';
import ServiceCard from './service-card';

const OurJob = ({ backgroundColor }) => {
  
  const iconColor = 'dark-2';

  return (
    <Box
      direction="row"
      gap="large"
      align="center"
      margin={{ vertical: 'xlarge' }}
    >
      <ServiceCard
        filename="01"
        icon={<ScheduleNew color={iconColor} size="xlarge" />}
      />
      <ServiceCard
        filename="02"
        icon={<Deliver color={iconColor} size="xlarge" />}
      />
      <ServiceCard
        filename="03"
        icon={<Checkmark color={iconColor} size="xlarge" />}
      />
    </Box>
  );
};

export default OurJob;
