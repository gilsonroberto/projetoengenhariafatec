import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthContextProvider } from './contexts/AuthContext'
import { Main } from './pages/Main';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="main" element={<Main />} />
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
