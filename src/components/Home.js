import smoke from "./../img/smoke.mp4"

function Home() {
    return (
        <section className='animation-section'>
            <video className='animation-video' autoPlay loop muted>
                <source src={smoke} type="video/mp4" />
            </video>
            <h1 className='animation-text'>
                <span>W</span>
                <span>E</span>
                <span>L</span>
                <span>C</span>
                <span>O</span>
                <span>M</span>
                <span>E</span>
            </h1>
        </section>
    );
}

export default Home;