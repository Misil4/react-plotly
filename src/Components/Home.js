import { Box,Card,CardContent,CardActions,ImageList,ImageListItem,Typography,Button } from "@mui/material"
import React from "react";
const {images} = require('../data');
console.log(images)
const Home = () =>  {
    return(
        <Box  sx={{
            margin : "250px auto",
            width: 600,
            height: 600
        }} >
            <Card sx={{ maxWidth: 400,maxHeight : 600,margin : "auto" }}>
            <ImageList sx={{ width: 400, height: 200 }} cols={3} rowHeight={164}>
  {images.map((item,index) => (
    <ImageListItem key={index}>
      <img
        src={`${item}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
            
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Bienvenido
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Esta aplicacion esta creada para mostrar ejemplos de varias librerias de graficos JS adaptados a React
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Box>
    )
}
export default Home;