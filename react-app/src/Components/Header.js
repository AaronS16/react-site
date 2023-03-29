import logo from './react-logo.png'

const Header = () => {
    return (
        <header>
            <nav className='header-nav'>
                <img className='react-logo' src={logo} width='40px' alt="react-logo"></img>
                <h3 className='nav-logo-text'>ReactFacts</h3>
                <h4 className='nav-title'>React Project</h4>           
            </nav>
        </header>
    )
}

export default Header