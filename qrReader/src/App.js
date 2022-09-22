import {Container,CardContent} from '@material-ui/core';
import QrCodeReader from './components/QrCodeReader';

function App() {  
  return (
    <Container>
      <CardContent>
        <QrCodeReader/>
      </CardContent>
    </Container>
  );
}


export default App;
