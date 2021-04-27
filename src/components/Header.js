import { Link } from 'react-router-dom';
import logo from './imgs/the404.png';

const Header = () => {

    


    return ( 
        <header className="header-container">
            <div className='logo-container'>
                <Link to='/yo'>
                    <img src={logo} alt="the404" className="logo"/>
                </Link>
            </div>
        </header>
     );
}
 
export default Header;