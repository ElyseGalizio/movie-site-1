import './About.css';

function About() {
    return (
        <div className="App">
            <h1 className='app-head-container'>About Page</h1>
            <div className="about-page">
                <p>EFG Films is a movie app project by Elyse Galizio.
                    The company is named after her children.
                    <br />
                    All images and movie information are courtesy of The Movie Database.</p>
                <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                    alt='The Movie Database logo'
                    className='about-image'
                />
            </div>
        </div>
    )
}

export default About;