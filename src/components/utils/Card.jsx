import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { urlFor } from '../../pages/sponsors';

const  MediaCard =({sponsor})=>{
    console.log(sponsor)
    console.log(sponsor.picture.asset._ref)
    // console.log(sponsors[0].picture.asset._ref)
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        sx={{  height: 0,
          padding: '30% 5% 30% 20%', // 16:9 aspect ratio (adjust as needed)
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          alignItems: 'center',  }}
        // image={`https://cdn.sanity.io/images/mmoq24tu/productions/${sponsor.picture.asset._ref}`}
        // image={urlFor(sponsor.picture)}
        image='https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Invite Us</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard