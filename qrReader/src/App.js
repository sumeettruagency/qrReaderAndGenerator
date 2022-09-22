import {Container, Card, CardContent} from '@material-ui/core';
import QrCodeReader from './components/QrCodeReader'

function App() {  
  return (
    <Container>
      <Card>
        <CardContent>
          <QrCodeReader/>
        </CardContent>
      </Card>
    </Container>
  );
}


export default App;
