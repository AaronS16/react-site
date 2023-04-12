import logo from './react-icon-small.png'

const Header = () => {
  return (
    <div>
      <nav className='header-nav'>
        <img className='react-logo' src={logo} width='40px' alt='react-logo'></img>
        <h3 className='nav-logo-text'>ReactFacts</h3>
        <h4 className='nav-title'>React Project</h4>
      </nav>
    </div>
  )
}

export default Header
