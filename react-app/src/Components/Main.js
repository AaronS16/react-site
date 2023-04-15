import grid from '../images/photo-grid.png'

const Main = () => {
    return (
        <section className='main-section'>
            <img className="main-image" src={grid} alt='grid'></img>
            <h1 className='main-h1'>Online Experiences</h1>
            <p className='main-paragraph'>Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Main