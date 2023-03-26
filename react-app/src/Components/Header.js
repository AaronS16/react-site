import logo from './react-logo.png'

const Header = () => {
    return (
        <header>
            <nav className='header-nav'>
                <img src={logo} width='40px' alt="react-logo"></img>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>            
            </nav>
        </header>
    )
}

export default Header