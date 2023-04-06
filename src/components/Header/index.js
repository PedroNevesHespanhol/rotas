import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    
    return (
        <header>
            <h2>Pedro's Gamer House</h2>
        
            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='informacoes/contato'>Contato</Link>
                <Link to='/loja'>Loja</Link>
            </div>
        </header>
    );

}

export default Header;
