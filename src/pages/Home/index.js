import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div>
            <h1>Bem-vindo à Pedro's Gamer House</h1>
            <br/>
            <h3>
                Acesse nossa <Link to='/loja'>Loja</Link>!
            </h3>
        </div>
    );

}

export default Home;
