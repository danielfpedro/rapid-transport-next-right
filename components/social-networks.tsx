import { Anchor, Box } from 'grommet';
import { FacebookOption, Instagram } from 'grommet-icons';

const items = [
  {
    icon: <FacebookOption size="large" color="white" />,
    backgroundColor: 'facebook',
  },
  {
    icon: <Instagram size="35px" color="white" />,
    backgroundColor: 'instagram',
  },
];

const size = 75;

const SocialNetworks = () => {
  return (
    <Box direction="row" gap="medium">
      {items.map((item) => (
        <Box direction="row" gap="medium">
          <Anchor
            href="#"
            label={
              <Box
                background={item.backgroundColor}
                round="full"
                align="center"
                justify="around"
                width={size + 'px'}
                height={size + 'px'}
              >
                {item.icon}
              </Box>
            }
          />
        </Box>
      ))}
    </Box>
  );
};

export default SocialNetworks;
