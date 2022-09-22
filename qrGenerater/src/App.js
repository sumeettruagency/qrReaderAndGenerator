import {Container, Card, CardContent} from '@material-ui/core';
import QrGenerator from './components/Qrgenerator'

function App() { 
  return (
    <Container>
          <Card>
              <h2>QR Code Generator and Download</h2>
              <CardContent>
                  <QrGenerator/>
              </CardContent>
          </Card>
    </Container>
  );
}

export default App;
