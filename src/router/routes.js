import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Informacoes from '../pages/Informacoes';
import Produtos from '../pages/Produtos';
import Loja from '../pages/Loja';

import Header from '../components/Header';

// Criação de rotas
function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/sobre' element={ <Sobre/> } />
                <Route path='/loja' element={ <Loja /> } />
                <Route path='produtos/:id' element={ <Produtos /> } />
                <Route path='informacoes/:id' element={ <Informacoes /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
