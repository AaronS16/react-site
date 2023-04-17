import phoneImg from '../images/phone-icon.png'
import messageImg from '../images/mail-icon.png'

const Contact = ({ img, name, phone, email }) => {
  return (
    <div className='contact-card'>
        <img src={img} alt='fluffykins pic'/>
        <h3>{name}</h3>
        <div className='info-group'>
            <img src={phoneImg} alt='phone icon'/>
            <p>{phone}</p>
        </div>
        <div className='info-group'>
            <img src={messageImg} alt='phone icon'/>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Contact
