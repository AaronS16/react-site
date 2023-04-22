import star_icon from '../images/star.png'

const Card = (props) => {
  return (
    <div className='card'>
        <img className='card-photo' src={props.photo} alt='card-logo'></img>
        <div className='card-stats'>
          <img className='card-star' src={star_icon} alt='like-icon'></img>
          <span>{props.rating}</span>
          <span className='gray'>({props.reviewCount}) • </span>
          <span className='gray'>{props.country}</span>
        </div>    
        <p className='card-description'>{props.title}</p>
        <p className='card-price'><strong>From ${props.price} </strong> /person</p>
        <p>{props.map}</p>
    </div>
  )
}

export default Card