import logo from '../images/airbnb-logo.png'

const Navbar = () => {
  return (
    <div>
      <nav className='main-nav'>
        <img className='airbnb-logo' src={logo} alt='airbnb-logo'></img>
      </nav>
    </div>
  )
}

export default Navbar
