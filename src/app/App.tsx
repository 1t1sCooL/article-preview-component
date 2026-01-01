import { MainPage } from '@/pages/MainPage/';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/global.css';

// const basename = '/ArticlePreviewComponent/'

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
