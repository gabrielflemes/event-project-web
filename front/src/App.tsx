import { Container, Grid } from '@mui/material';
import Publicidade from './Components/Publicidade';
import Rodape from './Components/Rodape';
import Topo from './Components/Topo';
import { EventsProvider } from './Contexts/Events';
import Rotas from './Page/Routes';

function App() {



  return (
    <EventsProvider>
      <Topo />
      <Container>
        <Grid container spacing={1}>
          <Publicidade />
          <Rotas />
        </Grid>
      </Container>
      <Rodape />
    </EventsProvider>
  );
}

export default App;
