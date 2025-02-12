import React from 'react'
import Button from '@mui/material/Button';
import './Home.css'
import heroImg from '../images/Home_Banner_Image.png'
const Home = () => {
    return (
        <section className='hero-section'>
            <div className='hero'>
                <div>
                    <h1>“ Transforming Ideas Into Digital Realities”</h1>
                    <p>Delivering custom web development solutions that drive innovation, performance, and seamless user experiences</p>
                    <Button variant="contained">Contained</Button>
                </div>

                <img className='hero-img' src={heroImg} />


            </div>
        </section>
    )
}

export default Home