import React, {Component} from 'react';
import HeroImg from '../images/airbnb-hero-img.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

class Hero extends Component {
    render() {
        return (
            <section >
            <div className='d-flex justify-content-center'>
                <img className='img-fluid' src={HeroImg} alt="hero-img" />
            </div>
            <div className='hero-wrapper'>
                <h1 className='hero-title'>Online Experiences</h1>
                <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
        );
    }
}
export default Hero;