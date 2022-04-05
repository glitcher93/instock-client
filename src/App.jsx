import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Layout />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
