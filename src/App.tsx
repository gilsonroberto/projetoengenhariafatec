import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AuthContextProvider } from './contexts/AuthContext'
import { Main } from './pages/Main';
import { Products } from './pages/Products';
import { Client } from './pages/Client';
import { Vendas } from './pages/Vendas';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="main" element={<Main />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/clientes" element={<Client />} />
          <Route path= "/vendas" element={<Vendas />}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
