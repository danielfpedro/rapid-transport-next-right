import {
  Anchor,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from 'grommet';
import { Home } from 'grommet-icons';
import { Head } from 'next/document';
import React from 'react';

const items = [
  {
    label: 'How It Works',
  },
  {
    label: 'About Us',
  },
  {
    label: 'Contact',
  },
];

const NavbarItems = () => {
  return (
    <Box gap="large" direction="row">
      {items.map((item) => (
        <Anchor label={item.label} color="dark-1" />
      ))}
    </Box>
  );
};

export default NavbarItems;
