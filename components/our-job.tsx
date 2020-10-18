import { Box, Heading } from 'grommet';
import { Contact, Calendar, Deliver } from 'grommet-icons';
import ServiceCard from './service-card';

const OurJob = ({ backgroundColor }) => {
  const iconColor = 'dark-2';

  return (
    <Box align="center" margin={{ vertical: 'xlarge' }}>
      {/* <Heading level="2" textAlign="center" margin={{ bottom: 'xlarge' }}>
        Como funciona?
      </Heading> */}

      <Box direction="row" gap="large" align="center">
        <ServiceCard
          filename="01"
          text="Você solicita sua cotação online ou por telefone inserindo dados como a origem e o destino do seu veículo."
          icon={<Contact color={iconColor} size="xlarge" />}
        />
        <ServiceCard
          filename="02"
          text="No dia programado para a viagem, seu automóvel será coletado e estará totalmente seguro do início ao fim da viagem."
          icon={<Calendar color={iconColor} size="xlarge" />}
        />
        <ServiceCard
          filename="03"
          text="Ao fim do transporte, seu veículo é entregue exatamente da mesma forma em que foi coletado."
          icon={<Deliver color={iconColor} size="xlarge" />}
        />
      </Box>
    </Box>
  );
};

export default OurJob;
