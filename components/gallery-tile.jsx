import React from 'react';
import { Box, Card, Image } from 'grommet';

const GalleryTile = ({ filename }) => {
  return (
    <Card background="light-1" height="small" elevation="0">
      <Image src={`images/${filename}.jpg`} fit="cover" />
    </Card>
  );
};

export default GalleryTile;
