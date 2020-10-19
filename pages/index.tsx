import { createMedia } from '@artsy/fresnel';
import { Box } from 'grommet';
import { UserNew } from 'grommet-icons';
import Head from 'next/head';
import React from 'react';
import Contacts from '../components/contacts';
import Header from '../components/header';
import { Media, MediaContextProvider, mediaStyles } from '../components/media';
import MyFooter from '../components/my-footer';
import MyGallery from '../components/my-gallery';
import MyNavbar from '../components/my-navbar';
import OurJob from '../components/our-job';

const Index = () => {
	return (
		<Box>
			<MediaContextProvider>
				<Head>
					<title>Rapid Transport USA, LLC</title>
				</Head>
				<MyNavbar />
				<Header />
				<OurJob />
				<MyGallery />
				<Contacts />
				<MyFooter />
			</MediaContextProvider>
		</Box>
	);
};

export default Index;
