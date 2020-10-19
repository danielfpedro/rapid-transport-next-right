import { Box, Heading, ResponsiveContext } from 'grommet';
import { Clock, Facebook, FacebookOption, Instagram, MailOption, Map, MapLocation, Phone } from 'grommet-icons';
import { Head } from 'next/document';
import React from 'react';
import CardContact from './card-contact';
import MainContent from './main-content';
import SocialNetworks from './social-networks';

const Contacts = () => {
	const size = React.useContext(ResponsiveContext);

	return (
		<Box background="light-3">
			<MainContent>
				<Box align="center">
					<Heading level="2" margin={{ bottom: 'large', top: 'none' }}>
						Get In Touch With Us
					</Heading>
				</Box>
				<Box gap="large">
					<Box direction={size != 'small' ? 'row' : 'column'} gap="large">
						<Box fill>
							<CardContact
								icon={<MailOption color="brand" size="large" />}
								title="Email"
								content="example@gmail.com"
							/>
						</Box>
						<Box fill>
							<CardContact
								icon={<Phone color="brand" size="large" />}
								title="Phone"
								content="(88) 9844-6655"
							/>
						</Box>
					</Box>

					<Box direction={size != 'small' ? 'row' : 'column'} gap="large">
						<Box fill>
							<CardContact
								icon={<Map color="brand" size="large" />}
								title="Location"
								content="Phoenix, Arizona USA"
							/>
						</Box>
						<Box fill>
							<CardContact
								icon={<Clock color="brand" size="large" />}
								title="Working Hour"
								content="09:00 - 16:00"
							/>
						</Box>
					</Box>
				</Box>
			</MainContent>
		</Box>
	);
};

export default Contacts;
