import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background : "orange"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button variant="contained" color="success"> <a style={{ textDecoration: "none",color:"white" }} href="/">Inicio</a></Button>
          <Button variant="contained" color="error"><a style={{ textDecoration: "none",color:"white" }} href="/Plotly">Plotly</a></Button>
          <Button variant="contained" color="primary"> <a style={{ textDecoration: "none",color:"white" }} href="/Highchart">HightCharts</a> </Button>
          <Button variant="contained" color="secondary"><a style={{ textDecoration: "none",color:"white" }} href="/Recharts">Recharts</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}