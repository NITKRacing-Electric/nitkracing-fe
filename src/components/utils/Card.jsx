import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { red } from '@mui/material/colors';

export default function MediaCard({eventName , points , eventDescription , img}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {eventName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{color:'red'}}>
            {points} points
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {eventDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
