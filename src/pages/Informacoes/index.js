import { useParams } from "react-router-dom";
import './infos.css';

function Informacoes() {
    
    const { id } = useParams();

    if (id === 'contato') {
        return (
            <div className="contato-infos">
                <div>
                    <h1>Entre em contato conosco:</h1>
                    <br/>
                    <p>E-mail: pedrogamerhouse@gmail.com</p>
                    <p>Telefone: (16) 99999-1111</p>
                </div>
            </div>
        );
    }

}

export default Informacoes;
