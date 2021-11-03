import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background : "orange"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button variant="contained" color="success"> <a style={{ textDecoration: "none",color:"white" }} href="/">Inicio</a></Button>
          <Button variant="contained" color="error"><a style={{ textDecoration: "none",color:"white" }} href="/Plotly">Plotly</a></Button>
          <Button variant="contained" color="primary"> <a style={{ textDecoration: "none",color:"white" }} href="/Highchart">HightCharts</a> </Button>
          <Button variant="contained" color="secondary"><a style={{ textDecoration: "none",color:"white" }} href="/users">React-Charts2</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}