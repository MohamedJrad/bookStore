import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Ija Ekri </h2>
            <h3>La première plateforme tunisienne qui aborde les problèmes de logement en tant qu'étudiant</h3>
            <Link className="btn" to="/books">View All Houses !</Link>
        </section>
    )
}

export default Hero
