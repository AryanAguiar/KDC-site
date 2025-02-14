import React from 'react';
import './Home.css';
import heroImg from '../images/Home_Banner_Image.png';
import Button from '@mui/material/Button';
import { Paper, Typography, Box, Card, CardContent, Avatar } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
const Home = () => {

  const stats = [
    { value: 10, suffix: '+', label: 'Working Since', subLabel: '2014' },
    { value: 20, suffix: '+', label: 'Industries', subLabel: 'Worked For' },
    { value: 100, suffix: '+', label: 'Successful', subLabel: 'Projects' },
    { value: 50, suffix: '+', label: 'Global', subLabel: 'Clients' },
  ];

  const services = [
    { title: "Website Design", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum." },
    { title: "Web & CMS Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum." },
    { title: "Mobile App Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum." },
    { title: "Dedicated Resources", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum." }
  ];

  const areaOfExp = [
    { title: "Healthtech, SAAS & Enterprise Tech" },
    { title: "Logistics & Transports" },
    { title: "Ecommerce Marketplace" },
    { title: "Fintech & Banking" },
    { title: "Edtech & Learning" },
  ];

  const testimonials = [
    {
      name: "Client Name",
      position: "Company Name",
      feedback:
        "❝ They consistently provide innovative web solutions tailored to our evolving needs. Their strategic approach and technical expertise have significantly enhanced our digital presence. ❞",
    },
    {
      name: "Kristin Watson",
      position: "Human Resource Manager",
      feedback:
        "❝ Their team exceeded our expectations, delivering a highly scalable solution that perfectly aligned with our business goals. Their commitment to excellence and attention to detail made all the difference. ❞",
    },
    {
      name: "Client Name",
      position: "Company Name",
      feedback:
        "❝ From initial consultation to final delivery, their team demonstrated unmatched professionalism and expertise. They not only met our expectations but helped us achieve substantial growth. ❞",
    },
  ];
  

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <section className="home">
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, sm: 6, md: 6, lg: 11, xl: "300" },
            py: { xs: 4, md: 5 },
            width: "100%", // Ensures it stretches across full width
          }}
        >
          {/* Left Content (Text) */}
          <Box
            sx={{
              flex: { xs: 1, sm: 1.2, md: 1.3 }, // More space for text, especially on tablets
              textAlign: { xs: "center", sm: "center", md: "left" },
              maxWidth: { xs: "100%", sm: "65%", md: "55%" }, // Adjust width dynamically
              p: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{
                fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "25px" },
                display: "inline-block",
                p: 1, // Padding inside the heading border
              }}
            >
              {`“Transforming Ideas Into Digital Realities”`}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              mb={3}
              sx={{
                fontSize: { xs: "12px", sm: "13px", md: "14px", lg: "15px" },
                display: "inline-block",
                p: 1,
              }}
            >
              Delivering Custom Web Development Solutions That Drive Innovation,
              Performance, And Seamless User Experiences.
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                textTransform: "none",
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 1, sm: 1.25, md: 1.5 },
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
              variant="contained"
            >
              Get a Free Consultation
            </Button>
          </Box>

          {/* Right Content (Image) */}
          <Box
            sx={{
              flex: { xs: 1, sm: 0.8, md: 0.9 }, // Less space for image on tablets but keeps it balanced
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", sm: "75%", md: "45%" }, // Increase size on tablets
              p: 2,
            }}
          >
            <img
              src={heroImg}
              alt="Hero"
              style={{
                width: "100%", // Ensures image fills its given space
                maxWidth: "599px", // Prevents excessive stretching
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>




      </section>

      <section className='about' ref={ref} style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#F5F5F5' }}>
        <h2>Trusted for Over a Decade</h2>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          KDigitalCurry is a leading mobile and web app development company in Mumbai with over 10+ years of experience.
          We create human-centric, scalable solutions, delivering full-stack services across various domains.
        </p>

        {/* Flexbox Stats Section */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows wrapping on smaller screens
            justifyContent: 'center',
            gap: '24px', // Reduce spacing between boxes
            marginTop: '20px', // Reduce top margin
            padding: '30px 80px' // Reduce overall padding
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              elevation={3}
              style={{
                textAlign: 'center',
                padding: '12px', // Reduce internal padding
                borderRadius: '8px', // Slightly smaller border radius
                backgroundColor: 'white',
                flex: '1 1 180px', // Reduce base size
                maxWidth: '220px', // Reduce max width
                minWidth: '150px', // Reduce min width
                height: '120px', // Reduce height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant="h5" fontWeight="bold"> {/* Reduce font size */}
                {inView ? <CountUp start={0} end={stat.value} duration={3} /> : 0}{stat.suffix}
              </Typography>
              <Typography variant="body2" color="text.secondary"> {/* Smaller text */}
                {stat.label}
              </Typography>
              {stat.subLabel && (
                <Typography variant="caption" color="text.secondary"> {/* Even smaller subLabel */}
                  {stat.subLabel}
                </Typography>
              )}
            </Paper>
          ))}
        </div>

      </section>

      <section className='our-services'>
        <div className='services'>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "32px" }, // Smaller on mobile
              fontWeight: "bold",
              textAlign: "center",
              mb: 3
            }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 3, // Keeps vertical spacing consistent
              justifyContent: "center",
              p: { xs: .1, sm: 1, md: 1 }
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  width: "calc(45% - 46px)", // Slightly increases horizontal spacing
                  minWidth: "300px",
                  display: "flex",
                  justifyContent: "center",
                  mx: "9px" // Adds more space between cards
                }}
              >
                <Card
                  sx={{
                    bgcolor: "#F4F4F4",
                    borderRadius: 3,
                    boxShadow: 0,
                    width: "100%",
                    p: { xs: 1, sm: 1, md: 1 }
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 1, sm: 1, md: 1 } // Smaller padding on small screens
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#D3D3D3", width: 40, height: 40, mb: 2 }} />

                    {/* Service Title */}
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        fontSize: { xs: "14px", sm: "18px", md: "22px" } // Responsive font size
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Service Description */}
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px", md: "15px" } // Smaller font on mobile
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>

                </Card>
              </Box>
            ))}
          </Box>
        </div>
      </section>

      <section className='area-of-expertise'>
        <div className='areaofexp'>
          <h2>Area Of Expertise</h2>

          <Box
            sx={{
              px: { xs: 7, sm: 9, md: 12, lg: 15 },
              py: 3,
              maxWidth: { xs: "100%", sm: "95%", md: "95%", lg: "90%" },
              mx: "auto",
            }}
          >
            <Swiper
              spaceBetween={32} // Reduce space for compact layout
              slidesPerView={3} // Default for larger screens
              breakpoints={{
                320: { slidesPerView: 1 }, // 1 item per row on small screens
                600: { slidesPerView: 1.5 }, // Slightly increase size on tablets
                768: { slidesPerView: 2 }, // 2 items per row on medium screens
                1024: { slidesPerView: 2.5 }, // 2.5 items per row on large screens
                1280: { slidesPerView: 3 }, // 3 items per row on extra-large screens
              }}
            >
              {areaOfExp.map((service, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      bgcolor: "#F4F4F4",
                      borderRadius: 3,
                      p: { xs: 2, sm: 3, md: 4 }, // Reduce padding on smaller screens
                      minHeight: { xs: "220px", sm: "240px", md: "200px" }, // Adjust height dynamically
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }} // Responsive font size
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

        </div>
      </section>

      <section className='caseStudies'>

      </section>

      <section className='testimonials'>
        <div className='what-our-clients-say'>
          <h2>What Our Clients Say</h2>

          <div className='boarder'>


            <Box
              sx={{
                width: "100%",
                maxWidth: "1400px", // Prevents excessive stretching
                mx: "auto", // Centers the container
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                height: "500px", // Increase this value as needed
              }}
            >
              <Swiper
                style={{
                  width: "100%",
                  height: "400px", // Increase this value as needed
                  border: "1px solid blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={window.innerWidth < 768 ? 10 : 20}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 10,
                  depth: 150,
                  modifier: 1,
                  scale: 0.85,
                  slideShadows: false,
                }}
                modules={[EffectCoverflow]}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      height: "auto",
                      margin: "auto",
                      border: "1px solid green",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        bgcolor: "#F4F4F4",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        borderRadius: 3,
                        boxShadow: 3,
                        textAlign: "left",
                        border: "1px solid orange",
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Box
                        sx={{
                          width: "80px",
                          height: "40px",
                          bgcolor: "gray",
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.2rem" },
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          fontSize: { xs: "0.8rem", md: "1rem" },
                        }}
                      >
                        {testimonial.position}
                      </Typography>
                      <Typography
                        variant="body1"
                        mt={2}
                        sx={{
                          fontSize: { xs: "0.9rem", md: "1.1rem" },
                        }}
                      >
                        {testimonial.feedback}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
