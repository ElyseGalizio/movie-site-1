import './About.css';

function About() {
    return (
        <div className="App">
            <h1>About Page</h1>
            <p className="about-page">
                EFG Films is a movie app project by Elyse Galizio.
                The company is named after her children.
                All images and movie information are courtesy of The Movie Database
            </p>
            <img src='./components/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                alt='The Movie Database logo' />
        </div>
    )
}

export default About;