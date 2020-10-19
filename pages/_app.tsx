import App from 'next/app';
import { Grommet, grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const myTheme = deepMerge(grommet, {
	global: {
		colors: {
			brand: '#d64541',
			facebook: '#007fff',
			instagram: '#E00086'
		},
		font: {
			family: 'Jost'
		},
		anchor: {
			color: {
				dark: 'green',
				light: 'light-1'
			}
		}
	}
});

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Grommet theme={myTheme} full>
				<Component {...pageProps} />
			</Grommet>
		);
	}
}
