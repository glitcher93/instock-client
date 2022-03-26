import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import HomeMain from './components/HomeMain';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <HomeMain />
        <PageFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
