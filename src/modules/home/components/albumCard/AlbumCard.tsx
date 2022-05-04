import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { TableSearhAlbumResult } from '../albumList/AlbumList';

type AlbumCardProps = {
  data: TableSearhAlbumResult
};

const AlbumCard = ({ data }: AlbumCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={data.artworkUrl100}
        alt={data.collectionName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.artistName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.collectionName}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AlbumCard