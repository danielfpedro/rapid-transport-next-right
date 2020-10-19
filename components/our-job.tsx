import { Box, Button, ResponsiveContext } from 'grommet';
import { Deliver, DocumentText, StatusGood } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import ServiceCard from './service-card';

const OurJob = ({}) => {
	const size = React.useContext(ResponsiveContext);

	const iconColor = 'dark-2';

	return (
		<MainContent>
			<Box
				direction={size != 'small' ? 'row' : 'column'}
				gap={size != 'small' ? 'large' : 'xlarge'}
				align="start"
			>
				<ServiceCard
					filename="01"
					title="Cotação"
					text="Solicite sua cotação pelo site ou por telefone. Você receberá o orçamento com a garantia do melhor preço."
					// icon={<Contact color={iconColor} size="large" />}
					icon={<DocumentText size="large" />}
				/>
				<ServiceCard
					filename="02"
					title="Nós fazemos tudo"
					text="Na data agendada, seu veículo será transportado com cobertura total pela seguradora."
					icon={<Deliver size="large" />}
				/>
				<ServiceCard
					filename="03"
					title="Entrega"
					text="Após o transporte feito com total cuidado e segurança, você recebe o veículo no endereço combinado."
					icon={<StatusGood size="large" />}
				/>
			</Box>

			<Box pad={{ top: '60px', bottom: 'none' }} align="center">
				<Box width="medium">
					<Button size="large" reverse={true} primary label="Quote now!" />
				</Box>
			</Box>
		</MainContent>
	);
};

export default OurJob;
