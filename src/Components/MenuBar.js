import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background : "orange"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button variant="contained" color="success"> <NavLink style={{ textDecoration: "none",color:"white" }} to="/">Inicio</NavLink></Button>
          <Button variant="contained" color="error"><NavLink style={{ textDecoration: "none",color:"white" }} to="/Plotly">Plotly</NavLink></Button>
          <Button variant="contained" color="primary"> <NavLink style={{ textDecoration: "none",color:"white" }} to="/Highchart">HightCharts</NavLink> </Button>
          <Button variant="contained" color="secondary"><NavLink style={{ textDecoration: "none",color:"white" }} to="/Recharts">Recharts</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}