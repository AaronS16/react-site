import contactImg from '../images/fluffykins.png'
import phoneImg from '../images/phone-icon.png'
import messageImg from '../images/mail-icon.png'

const Contact = () => {
  return (
    <div className='contact-card'>
        <img className='contact-photo' src={contactImg} alt='fluffkins pic'/>
        <h3>Fluffykins</h3>
        <div className='info-group'>
            <img src={phoneImg} alt='phone icon'/>
            <p>(212) 555-2345</p>
        </div>
        <div className='info-group'>
            <img src={messageImg} alt='phone icon'/>
            <p>fluff@me.com</p>
        </div>
    </div>
  )
}

export default Contact
