import './App.css';
import { Home } from './components/Home';
import { GlobalStyle } from './components/Home/styles';


export function App() {

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
