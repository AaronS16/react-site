import katie_zaferes from '../images/katie-zaferes.png'
import star_icon from '../images/star.png'

const Card = () => {
  return (
    <div className='card'>
        <img className='card-photo' src={katie_zaferes} alt='card-logo'></img>
        <div className='card-stats'>
          <img className='card-star' src={star_icon} alt='like-icon'></img>
          <span>5.0</span>
          <span className='gray'>(6) • </span>
          <span className='gray'>USA</span>
        </div>    
        <p className='card-description'>Life lessons with Katie Zaferes</p>
        <p className='card-price'><strong>From $136 </strong> /person</p>
    </div>
  )
}

export default Card