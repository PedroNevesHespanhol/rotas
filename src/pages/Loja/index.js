import { Link } from 'react-router-dom';
import './loja.css';

function Loja() {

    return (
        <div className='produtos'>
            <div className='produtos_desc'>
                <Link to='/produtos/playstation' className='produto'>
                    <label>Playstation 5</label>
                    <img src='../assets/ps5.jpg' alt='Playstation 5' width='225px' />
                </Link>
            </div>
            <div className='produtos_desc'>
                <Link to='/produtos/xbox' className='produto'>
                    <label>Xbox Series X</label>
                    <img src='../assets/xbox.jpg' alt='Xbox Series X' width='130px' />
                </Link>
            </div>
            <div className='produtos_desc'>
                <Link to='/produtos/atari' className='produto'>
                    <label>Atari</label>
                    <img src='../assets/atari.png' alt='Atari' width='150px' />
                </Link>
            </div>
            <div className='produtos_desc'>
                <Link to='/produtos/super-nintendo' className='produto'>
                    <label>Super Nintendo</label>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfsbrA-SDbg04a4juKfJQgWzdaTnkLXs16vh_OJaBVfcNb2YlssllshzcMlgng95TbzdA&usqp=CAU' alt='Super Nintendo' width='130px' />
                </Link>
            </div>
        </div>
    );

}

export default Loja;
