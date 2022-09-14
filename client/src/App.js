import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="xl" style={{ padding: 0, height: '100%' }}>
          <Header />
          <Routes />
        </Container>
      </div>
    </>
  );
}

export default App;
