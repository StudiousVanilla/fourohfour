import logo from './imgs/the404.png';

const Header = () => {
    return ( 
        <header className="header-container">
            <div className='logo-container'>
                <img src={logo} alt="the404" className="logo"/>
            </div>
        </header>
     );
}
 
export default Header;