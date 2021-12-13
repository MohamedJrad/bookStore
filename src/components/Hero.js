import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Ija Ekri </h2>
            <h3>votre meilleure solution</h3>
            <Link className="btn" to="/books">View All Houses !</Link>
        </section>
    )
}

export default Hero
