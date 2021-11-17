import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import useInterval from '../Hooks/useInterval';
import Plot from 'react-plotly.js'
import MyScatter from "./plotly/scatter";
import MyIndicator from "./plotly/indicator";
import MyPie from "./plotly/pie";
import MyBar from "./plotly/bar";

const Plotly = () => {
  const [valor, SetValor] = useState(0);
  useInterval(() => {
    if (valor !== 20) SetValor(valor + 1)
  }, 1000);
  return (
    <div>
      <Typography component="div" variant="h6">Los ejemplos mostrados a continuacion se actualizan automaticanmente hasta alcanzar el valor 20</Typography>
      <Grid style={{ margin: "auto 100px" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Fancy Plot</Typography>
         <MyScatter value={valor} />
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Indicator Chart</Typography>
        <MyIndicator value={valor} />
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Pie Chart</Typography>
          <MyPie value={valor} />
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Bar Chart</Typography>
          <MyBar value={valor} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Plotly;
