import { useParams } from "react-router-dom";
import './produtos.css';

function Produtos() {

    const { id } = useParams();

    if (id === 'playstation') {
        return (
            <div class='produto-preco'>
                <div class='produto-preco_desc'>
                    <img src='../assets/ps5.jpg' alt='Playstation 5' width='260px' />
                    <h2>Playstation 5</h2>
                    <p id="preco">R$4.480,00</p>
                    <p id="desconto">à vista no Pix e boleto (2%off)</p>
                </div>
            </div>
        );
    }

    if (id === 'xbox') {
        return (
            <div class='produto-preco'>
                <div class='produto-preco_desc'>
                    <img src='../assets/xbox.jpg' alt='Xbox series X' width='200px' />
                    <h2>Xbox Series X</h2>
                    <p id="preco">R$4.650,00</p>
                    <p id="desconto">à vista no Pix e boleto (2%off)</p>
                </div>
            </div>
        );
    }

    if (id === 'atari') {
        return (
            <div class='produto-preco'>
                <div class='produto-preco_desc'>
                    <img src='../assets/atari.png' alt='Atari' width='260px' />
                    <h2>Atari</h2>
                    <p id="preco">R$1.000,00</p>
                    <p id="desconto">à vista no Pix e boleto (3%off)</p>
                </div>
            </div>
        );
    }

    if (id === 'super-nintendo') {
        return (
            <div class='produto-preco'>
                <div class='produto-preco_desc'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsbrA-SDbg04a4juKfJQgWzdaTnkLXs16vh_OJaBVfcNb2YlssllshzcMlgng95TbzdA&usqp=CAU' alt='Super nintendo' width='260px' />
                    <h2>Super nintendo</h2>
                    <p id="preco">R$1.350,00</p>
                    <p id="desconto">à vista no Pix e boleto (2%off)</p>
                </div>
            </div>
        );
    }

}

export default Produtos;
