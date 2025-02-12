import React from 'react';
import './Home.css';
import heroImg from '../images/Home_Banner_Image.png';
import Button from '@mui/material/Button';
import { Grid2, Paper, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    const stats = [
        { value: 10, suffix: '+', label: 'Working Since', subLabel: '2014' },
        { value: 20, suffix: '+', label: 'Industries', subLabel: 'Worked For' },
        { value: 100, suffix: '+', label: 'Successful', subLabel: 'Projects' },
        { value: 50, suffix: '+', label: 'Global', subLabel: 'Clients' },
    ];

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <>
            <section className="home">
                <div className="home-container">
                    {/* Left Content (Text) */}
                    <div className="home-text">
                        <h1>“ Transforming Ideas Into Digital Realities ”</h1>
                        <p>
                            Delivering Custom Web Development Solutions That Drive Innovation, Performance, And Seamless User Experiences.
                        </p>
                        <Button className="home-button" variant="contained" sx={{ textTransform: 'none' }}>Get a Free Consultation</Button>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="home-image">
                        <img src={heroImg} alt="Hero" />
                    </div>
                </div>
            </section>

            <section ref={ref} style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#F5F5F5' }}>
      <h1>Trusted for Over a Decade</h1>
      <p style={{ maxWidth: '800px', margin: '0 auto' }}>
        KDigitalCurry is a leading mobile and web app development company in Mumbai with over 10+ years of experience.
        We create human-centric, scalable solutions, delivering full-stack services across various domains.
      </p>

      {/* Flexbox Stats Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap', // Wrap to a new line on smaller screens
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px',
        }}
      >
        {stats.map((stat, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{
              textAlign: 'center',
              padding: '20px',
              borderRadius: '10px',
              backgroundColor: 'white',
              flex: '1 1 250px', // Flexible width with a minimum of 250px
              maxWidth: '300px', // Prevents stretching too much on large screens
              height: '150px', // Equal height for all boxes
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {inView ? <CountUp start={0} end={stat.value} duration={3} /> : 0}{stat.suffix}
            </Typography>
            <Typography variant="body1" color="text.secondary">{stat.label}</Typography>
            {stat.subLabel && <Typography variant="body2" color="text.secondary">{stat.subLabel}</Typography>}
          </Paper>
        ))}
      </div>
    </section>
        </>
    );
};

export default Home;
