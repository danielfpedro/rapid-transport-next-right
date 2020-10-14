import { Box, Card, CardBody, Heading } from 'grommet';
import { Home, MailOption } from 'grommet-icons';
import React from 'react';

const CardContact = ({ icon, title, content = null }) => {
  return (
    <Card>
      <CardBody pad="large">
        <Box direction="row" gap="medium">
          <Box>{icon}</Box>
          <Box>
            <Box>
              <Heading level="3" margin="none" color="dark-1">
                {title}
              </Heading>
            </Box>
            {content && (
              <Box>
                <Heading level="3" margin="none" color="dark-1">
                  {content}
                </Heading>
              </Box>
            )}
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardContact;
