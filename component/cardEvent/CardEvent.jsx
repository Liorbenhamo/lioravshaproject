import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './cardEvent.css'
function CardEvent({image,title,content}) {

  return (
    <div>
         <Card sx={{  height: '60vh'}}>
      <CardMedia
      sx={{
        height: 200,
        objectFit: 'cover',
        margin: '8px',
        borderRadius: '4px',
      }}
        image={image}
        title="."
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default CardEvent