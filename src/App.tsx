import './App.css';
import { Header, Footer } from './layout';
import styled from 'styled-components';
import Page from './layout/Page';

const AppWrapper = styled.div``;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Page />
      <Footer />
    </AppWrapper>
  );
}

export default App;
