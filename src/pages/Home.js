import React, { useRef, useState } from 'react';
import './Home.css';
import heroImg from '../images/Home_Banner_Image.png';
import Button from '@mui/material/Button';
import { Paper, Typography, Box, Card, CardContent, Avatar, LinearProgress, CardMedia } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import arrowimg from '../images/right-up.png'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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


  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardData = [
    {
      id: 1,
      image: heroImg, // Replace with actual image URL
      title: "Project Name",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget",
      tags: ["Web Development", "CMS Development"],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Another Project",
      description: "Tellus Dolor Fermentum Adipiscing Commodo Turpis Rhoncus Praesent...",
      tags: ["App Development", "UI/UX Design"],
    },
    {
      id: 1,
      image: heroImg, // Replace with actual image URL
      title: "Project Name",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...",
      tags: ["New Development", "CMS Development"],
    },
  ];

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
                fontSize: { xs: "20px", sm: "22px", md: "24px", lg: "25px", "xl": "32px" },
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
                fontSize: { xs: "13px", sm: "14px", md: "15px", lg: "17px", "xl": "20px" },
                display: "inline-block",
                maxWidth: { xs: "312px", sm: "413px", md: "514px", lg: "605px", "xl": "704px" },
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

      <section
        className="about"
        ref={ref}
        style={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            marginBottom: "10px",
            fontWeight: "600",

          }}
        >
          Trusted for Over a Decade
        </Typography>

        <Typography
          sx={{
            maxWidth: { xs: "600px", sm: "746px", md: "946px" },
            margin: "0 auto",
            padding: "0 10px",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
          }}
        >
          KDigitalCurry is a leading mobile and web app development company in Mumbai
          with over 10+ years of experience. We create human-centric, scalable
          solutions, delivering full-stack services across various domains.
        </Typography>


        {/* Flexbox Stats Section */}
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            marginTop: "20px",
            padding: { xs: "20px 10px", sm: "30px 15px", md: "50px 20px", lg: "60px 30px" },
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                textAlign: "center",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "white",
                flex: "1 1 180px",
                maxWidth: { xs: "100px", sm: "200px", md: "208px", lg: "273px", 'xl': "290px" }, // Responsive width
                minWidth: "150px",
                height: { xs: "100px", sm: "190px", md: "150px", lg: "170px", 'xl': "227px" }, // Responsive height
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "19px", sm: "20px", md: "25px", lg: "28px", "xl": "32px" }, // Decrease size on smaller screens
                }}
              >
                {inView ? <CountUp start={0} end={stat.value} duration={3} /> : 0}
                {stat.suffix}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px", "xl": "20px" },
                }}
              >
                {stat.label}
              </Typography>
              {stat.subLabel && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "17px", "xl": "20px" },
                  }}
                >
                  {stat.subLabel}
                </Typography>
              )}
            </Paper>
          ))}
        </Box>
      </section>

      <section className="our-services">
        <div className="services">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "32px" }, // Responsive font size
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
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
              p: { xs: 0.1, sm: 1, md: 1 },
            }}
          >
            {services.map((service, index) => {

              return (
                <Box
                  key={index}
                  sx={{
                    width: "calc(45% - 46px)", // Slightly increases horizontal spacing
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    mx: "9px",
                    my: "-15px",
                    mb: { xs: "8px", sm: "10px", md: "16px", lg: "10px" }, // Adds vertical spaci
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: "#F4F4F4",
                      borderRadius: 3,
                      boxShadow: 0,
                      width: { xs: "250px", sm: "300px", md: "520px", lg: "600px", "xl": "698px" },
                      height: { xs: "178px", sm: "240px", md: "228px", lg: "240px", "xl": "230px" },
                      p: { xs: "4px", sm: "12px", md: "12px", lg: "18px", "lx": "20px" }
                    }}
                  >
                    <CardContent
                    // sx={{
                    //   // p: { xs: "4px", sm: "11px", md: "12px", lg: "13px", "lx":"15px" }
                    // }}
                    >
                      <Avatar sx={{
                        bgcolor: "#D3D3D3",
                        width: { xs: 40, sm: 48, md: 50, lg: 54, "xl": "64" }, // Decrease width on smaller screens
                        height: { xs: 40, sm: 48, md: 50, lg: 54, "xl": "64" }, // Decrease height on smaller screens
                        mb: { xs: 1, sm: 2, md: 3 }, // Adjust margin for better spacing
                      }} />

                      {/* Service Title */}
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{
                          fontSize: { xs: "14px", sm: "18px", md: "21px", lg: "22px", "xl": "24px" }, // Responsive font size
                          marginBottom: "8px"
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Service Description */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "18px", "xl": "20px" }, // Smaller font on mobile
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </div>
      </section>;

      <section className="area-of-expertise">
        <div className="areaofexp">
          <h2>Area Of Expertise</h2>
          <Box
            sx={{
              px: { xs: 7, sm: 9, md: 12, lg: 15 },
              py: 3,
              maxWidth: { xs: "100%", sm: "95%", md: "95%", lg: "90%" },
              mx: "auto",
              padding: "0px"
            }}
          >
            <Swiper
              spaceBetween={32}
              slidesPerView={3}
              loop={false} // Ensures it does not loop back
              breakpoints={{
                320: { slidesPerView: 1, pagination: { clickable: true } },
                600: { slidesPerView: 1.5, pagination: { clickable: true } },
                768: { slidesPerView: 2, pagination: { clickable: true } },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
              }}
              onReachEnd={(swiper) => {
                swiper.params.centeredSlides = false;
                swiper.update();
              }}
              pagination={window.innerWidth <= 1024 ? { clickable: true } : false}
              modules={[Pagination]}
            >
              {areaOfExp.map((service, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      bgcolor: "#F4F4F4",
                      borderRadius: 3,
                      p: { xs: 2, sm: 3, md: 4 },
                      minHeight: { xs: "220px", sm: "240px", md: "200px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

          </Box>

        </div>
      </section>;

      <section>
        <div className="case-studies">
          <p className="studies-p">Case Studies</p>
          <h2 className="studies-h2">Explore Success Stories</h2>
          <Box className="navigation-buttons"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "90vw",
              maxWidth: {
                xs: "100%",
                sm: "600px",
                md: "850px",
                lg: "1200px",
                xl: "1250px",
              },
              margin: "auto",
            }}
          >
            {/* Navigation Buttons */}
            <Button className='btn-prev'
              onClick={() => swiperRef.current?.slidePrev()}
              sx={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                "@media (min-width: 320px)": {
                  marginTop: "15px",
                  marginBottom: "-15px",
                },
                "@media (min-width: 375px)": {
                  marginTop: "15px",
                  marginBottom: "-15px",
                  marginRight: "25px"
                },
                "@media (min-width: 425px)": {
                  marginTop: "15px",
                  marginBottom: "5px",
                  marginRight: "50px"
                },
                "@media (min-width: 768px)": {
                  marginTop: "20px",
                  marginBottom: "-10px",
                  marginRight: "10px"
                },
                justifyContent: "center",
                bottom: 40, // Always at the bottom
                right: { xs: 155, sm: 110 }, // Moves inward on small screens
                zIndex: 10,
                minWidth: 40,
                height: { xs: 30, sm: 30, md: 40 },
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "black" },
              }}

            >
              <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: "4px", marginRight: "-3px" }} />
            </Button>

            <Button
              className='btn-next'
              onClick={() => swiperRef.current?.slideNext()}
              sx={{
                position: "absolute",
                bottom: 40, // Always at the bottom
                right: { xs: 90, sm: 50 }, // Moves inward on small screens
                zIndex: 10,
                minWidth: 40,
                height: { xs: 30, sm: 30, md: 40 },
                "@media (min-width: 320px)": {
                  marginTop: "15px",
                  marginBottom: "-15px",
                },
                "@media (min-width: 375px)": {
                  marginTop: "15px",
                  marginBottom: "-15px",
                  marginRight: "25px"
                },
                "@media (min-width: 425px)": {
                  marginTop: "15px",
                  marginBottom: "5px",
                  marginRight: "50px"
                },
                "@media (min-width: 768px)": {
                  marginTop: "20px",
                  marginBottom: "-10px",
                  marginRight: "10px"
                },
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "black" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </Button>

            {/* Swiper Container */}
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              style={{ width: "100%" }}
            >
              {cardData.map((card) => (
                <SwiperSlide key={card.id}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      height: "350px",
                      "@media (max-width: 1024px)": {
                        height: "420px",
                      },
                      "@media (max-width: 768px)": {
                        height: "580px",
                      },
                      "@media (max-width: 425px)": {
                        height: "540px",
                      },
                      "@media (max-width: 375px)": {
                        height: "520px",
                      },
                      "@media (max-width: 320px)": {
                        height: "500px",
                      },
                      p: 2,
                      maxWidth: "100%",
                      boxShadow: "none",
                      borderRadius: 3,
                      bgcolor: "#e5e5e5",
                      position: "relative",
                    }}
                  >
                    {/* Progress Bar (Full Width on Small Screens) */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", md: "50%" },
                        zIndex: 10,
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={((activeIndex + 1) / cardData.length) * 100}
                        sx={{
                          bgcolor: "lightgray",
                          "& .MuiLinearProgress-bar": { bgcolor: "red" },
                        }}
                      />
                    </Box>

                    {/* Image Section */}
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={card.title}
                      sx={{
                        width: { xs: "100%", md: "50%" },
                        height: { xs: "auto", md: "100%" },
                        borderRadius: 2,
                        backgroundColor: "#e5e5e5",
                      }}
                    />

                    {/* Text Content */}
                    <CardContent
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: { xs: "center", md: "left" },
                        paddingBottom: { xs: 3, md: 0 }, // Adds space at the bottom on smaller screens
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "1.2rem", md: "1.5rem" },
                          position: "relative",
                          top: { xs: "0px", md: "-50px" },
                          left: { xs: "0px", md: "20px" }
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          mt: 1,
                          fontSize: { xs: "0.9rem", md: "1rem" },
                          position: "relative",
                          left: { xs: "0px", md: "20px" },
                          top: { xs: "0px", md: "-50px" }, // Adjusted for responsiveness
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2, mt: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
                        {card.tags.map((tag, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            color="grey"
                            sx={{
                              position: "relative",
                              top: { xs: "0px", md: "-50px" },
                              left: { xs: "0px", md: "20px" }
                            }}
                          >
                            • {tag}
                          </Typography>
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 2,
                          alignSelf: { xs: "center", md: "flex-start" },
                          bgcolor: "#C8102E",
                          width: { xs: "165px", md: "220px" },
                          position: "relative",
                          height: { xs: "20px", md: "45px" },

                          "@media (max-width: 768px)": {
                            height: "30px",
                          },
                          "@media (max-width: 425px)": {
                            height: "30px",
                          },
                          "@media (max-width: 375px)": {
                            height: "20px",
                          },
                          "@media (max-width: 320px)": {
                            height: "30px",
                          },
                          top: { xs: "0px", md: "-50px" },
                          fontSize: { xs: "10px", md: "15px" },
                          left: { xs: "0px", md: "15px" } // Fixes overlap on small screens
                        }}
                      >
                        Get Started Now
                        <img src={arrowimg} alt="Start" style={{ width: 20, height: 20, marginLeft: 10 }} />
                      </Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </div>
      </section>

      <section className="testimonials">
        <div className="what-our-clients-say">
          <h2>What Our Clients Say</h2>

          <div className="boarder">
            <Box
              sx={{
                width: "100%",
                maxWidth: "1900px",
                mx: "auto",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                height: "500px",
              }}
            >
              <Swiper
                style={{
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={window.innerWidth < 768 ? 5 : 10}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 5,
                  depth: 120,
                  modifier: 1,
                  scale: 0.9,
                  slideShadows: false,
                }}
                pagination={window.innerWidth <= 1024 ? { clickable: true } : false}
                modules={[EffectCoverflow, Pagination]}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "100%",
                      maxWidth: "670px",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1px",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "92%", sm: "88%", md: "87%", lg: "90%", xl: "670px" },
                        height: { xs: "240px", sm: "250px", md: "260px", lg: "270px" },
                        bgcolor: "#F4F4F4",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        borderRadius: 3,
                        boxShadow: 3,
                        textAlign: "left",
                        p: { xs: 1.5, sm: 2, md: 3 },
                        mx: { xs: 1, sm: 2, md: 1 },
                      }}
                    >
                      <Box
                        sx={{
                          width: "80px",
                          height: "40px",
                          bgcolor: "gray",
                          borderRadius: 1,
                          mb: 1.5,
                        }}
                      />
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                          mb: 0.5,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                          mb: 0.5,
                        }}
                      >
                        {testimonial.position}
                      </Typography>
                      <Typography
                        variant="body1"
                        mt={1.5}
                        sx={{
                          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                          lineHeight: { xs: "1.3", sm: "1.5", md: "1.6" },
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
      </section>;

    </>
  );
};

export default Home;
