import star_icon from '../images/star.png'

const Card = ({item}) => {
  console.log(item)
  let badgeText
  if(item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className='card'>
        {badgeText &&<div className='card-badge'>{badgeText}</div>}
        <img className='card-photo' src={item.coverImg} alt='card-logo'></img>
        <div className='card-stats'>
          <img className='card-star' src={star_icon} alt='like-icon'></img>
          <span>{item.stats.rating}</span>
          <span className='gray'>({item.stats.reviewCount}) • </span>
          <span className='gray'>{item.location}</span>
        </div>    
        <p className='card-description'>{item.title}</p>
        <p className='card-price'><strong>From ${item.price} </strong> / person</p>
        <p>{item.map}</p>
    </div>
  )
}

export default Card