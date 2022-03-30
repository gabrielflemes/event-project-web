import { Grid } from '@mui/material';
import Publicidade from './Components/Publicidade';
import Topo from './Components/Topo';
import Rotas from './Page/Routes';



function App() {



  return (
    <>
      <Topo />
      <Publicidade />
      <Grid container spacing={1}>
        <Rotas />
      </Grid>

    </>
  );
}

export default App;
