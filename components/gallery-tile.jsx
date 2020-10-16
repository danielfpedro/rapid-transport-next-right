import { Card, Image } from 'grommet';
import React from 'react';

const GalleryTile = ({ filename }) => {
  return (
    <Card fill elevation="0">
      <Image src={`images/${filename}.jpg`} fit="cover" height="300px" />
    </Card>
  );
};

export default GalleryTile;
