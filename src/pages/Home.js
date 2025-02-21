import React, { useRef, useState } from "react";
import "./Home.css";
import heroImg from "../images/Home_Banner_Image.png";
import Button from "@mui/material/Button";
import {
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
  CardMedia,
} from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import arrowimg from "../images/right-up.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Home = () => {
  const stats = [
    { value: 10, suffix: "+", label: "Working Since", subLabel: "2014" },
    { value: 20, suffix: "+", label: "Industries", subLabel: "Worked For" },
    { value: 100, suffix: "+", label: "Successful", subLabel: "Projects" },
    { value: 50, suffix: "+", label: "Global", subLabel: "Clients" },
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay each Paper's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      title: "Website Design",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.",
    },
    {
      title: "Web & CMS Development",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.",
    },
    {
      title: "Mobile App Development",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.",
    },
    {
      title: "Dedicated Resources",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.",
    },
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
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget",
      tags: ["Web Development", "CMS Development"],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400",
      title: "Another Project",
      description:
        "Tellus Dolor Fermentum Adipiscing Commodo Turpis Rhoncus Praesent...",
      tags: ["App Development", "UI/UX Design"],
    },
    {
      id: 1,
      image: heroImg, // Replace with actual image URL
      title: "Project Name",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Penatibus Viverra Arcu Aget...",
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
            marginTop: "-40px",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, sm: 6, md: 3, lg: 7, xl: 12 },
            py: { xs: 4, md: 5 },
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* Left Content (Text) */}
          <Box
            className="wow animate__animated animate__fadeInLeft"
            data-wow-duration="1.5s"
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
                fontSize: {
                  xs: "20px",
                  sm: "22px",
                  md: "24px",
                  lg: "25px",
                  xl: "32px",
                },
                display: "inline-block",
                p: 1,
              }}
            >
              {`“Transforming Ideas Into Digital Realities”`}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              mb={3}
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                  lg: "17px",
                  xl: "20px",
                },
                display: "inline-block",
                maxWidth: {
                  xs: "312px",
                  sm: "413px",
                  md: "514px",
                  lg: "605px",
                  xl: "704px",
                },
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
                marginLeft: 1
              }}
              variant="contained"
            >
              Get a Free Consultation
            </Button>
          </Box>

          {/* Right Content (Image) */}
          <Box
            sx={{
              flex: { xs: 1, sm: 0.8, md: 0.9 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", sm: "75%", md: "45%" },
              p: 2,

            }}
          >
            <img
              className="wow animate__animated animate__fadeInRight"
              data-wow-duration="1.5s"
              src={heroImg}
              alt="Hero"
              style={{
                width: "100%",
                maxWidth: "599px",
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
          padding: "70px 20px",
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
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            textAlign: "center",
          }}
        >
          KDigitalCurry is a leading mobile and web app development company in
          Mumbai with over 10+ years of experience. We create human-centric,
          scalable solutions, delivering full-stack services across various
          domains.
        </Typography>

        {/* Flexbox Stats Section with Staggering Effect */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
            marginTop: "20px",
            px: { sm: "40px", md: "40px", lg: "79px", xl: "120px" },
            py: { sm: "0px", md: "0px", lg: "16px", xl: "16px" },
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              component={motion.div}
              variants={itemVariants}
              elevation={3}
              sx={{
                textAlign: "center",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "white",
                flex: "1 1 180px",
                maxWidth: {
                  xs: "100px",
                  sm: "290px",
                  md: "268px",
                  lg: "290px",
                  xl: "318px",
                },
                minWidth: "150px",
                height: {
                  xs: "100px",
                  sm: "190px",
                  md: "150px",
                  lg: "170px",
                  xl: "227px",
                },
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
                  fontSize: {
                    xs: "19px",
                    sm: "20px",
                    md: "25px",
                    lg: "28px",
                    xl: "32px",
                  },
                }}
              >
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={3} />
                ) : (
                  0
                )}
                {stat.suffix}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "17px",
                    xl: "20px",
                  },
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

      <section className="our-services" style={{ margin: "100px 0" }}>
        <div className="services">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "32px" }, // Responsive font size
              fontWeight: "bold",
              textAlign: "center",
              padding: 5
            }}
          >
            Our Services
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: 3,
              justifyContent: "center",
              p: { xs: 0.1, sm: 1, md: 1 },
            }}
          >
            {services.map((service, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "80%",
                      md: "calc(47% - 5px)",
                      lg: "calc(45% - 10px)",
                      xl: "calc(45% - 42px)",
                    },
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    mx: "9px",
                    my: "-15px",
                    mb: { xs: "8px", sm: "10px", md: "16px", lg: "10px" },
                  }}
                >
                  <Card
                    sx={{
                      bgcolor: "#F4F4F4",
                      borderRadius: 3,
                      boxShadow: 0,
                      width: {
                        xs: "450px",
                        sm: "700px",
                        md: "630px",
                        lg: "640px",
                        xl: "698px",
                      },
                      height: {
                        xs: "178px",
                        sm: "240px",
                        md: "228px",
                        lg: "240px",
                        xl: "230px",
                      },
                      p: {
                        xs: "4px",
                        sm: "12px",
                        md: "12px",
                        lg: "18px",
                        lx: "20px",
                      },
                    }}
                  >
                    <CardContent
                    // sx={{
                    //   // p: { xs: "4px", sm: "11px", md: "12px", lg: "13px", "lx":"15px" }
                    // }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: "#D3D3D3",
                          width: { xs: 40, sm: 48, md: 50, lg: 54, xl: "64" }, // Decrease width on smaller screens
                          height: { xs: 40, sm: 48, md: 50, lg: 54, xl: "64" }, // Decrease height on smaller screens
                          mb: { xs: 1, sm: 2, md: 3 }, // Adjust margin for better spacing
                        }}
                      />

                      {/* Service Title */}
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "18px",
                            md: "21px",
                            lg: "22px",
                            xl: "24px",
                          }, // Responsive font size
                          marginBottom: "8px",
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Service Description */}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          fontSize: {
                            xs: "10px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                            xl: "20px",
                          }, // Smaller font on mobile
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
      </section>

      <section className="area-of-expertise">
        <div className="areaofexp">
          <h2>Area Of Expertise</h2>
          <Box
            sx={{
              px: { xs: 7, sm: 9, md: 8, lg: 13, xl:18 },
              py: 3,
              maxWidth: { xs: "100%", sm: "95%", md: "95%", lg: "90%" },
              mx: "auto",
              padding: "0px",
            }}
          >
            <Swiper
              spaceBetween={32}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 2000,  
                disableOnInteraction: false,  
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                600: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
              }}
              pagination={window.innerWidth <= 1024 ? { clickable: true } : false}
              modules={[Pagination, Autoplay]} // Add Autoplay module here
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
      </section>

      <section>
        <div className="case-studies">
          <p className="studies-p">Case Studies</p>
          <h2 className="studies-h2">Explore Success Stories</h2>
          <Box
            className="navigation-buttons"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "90vw",
              maxWidth: {
                xs: "100%",
                sm: "600px",
                md: "1000px",
                lg: "1050px",
                xl: "1250px",
              },
              marginTop: "auto",
            }}
          >
            {/* Navigation Buttons */}
            <Button
              className="btn-prev"
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
                  marginRight: "25px",
                },
                "@media (min-width: 425px)": {
                  marginTop: "15px",
                  marginBottom: "5px",
                  marginRight: "50px",
                },
                "@media (min-width: 768px)": {
                  marginTop: "20px",
                  marginBottom: "-10px",
                  marginRight: "10px",
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
              <ArrowBackIosIcon
                fontSize="small"
                sx={{ marginLeft: "4px", marginRight: "-3px" }}
              />
            </Button>

            <Button
              className="btn-next"
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
                  marginRight: "25px",
                },
                "@media (min-width: 425px)": {
                  marginTop: "15px",
                  marginBottom: "5px",
                  marginRight: "50px",
                },
                "@media (min-width: 768px)": {
                  marginTop: "20px",
                  marginBottom: "-10px",
                  marginRight: "10px",
                },
                bgcolor: "rgba(0,0,0,0.6)",
                color: "white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "black" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </Button>

            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 10, // Align to the right
                width: { xs: "100%", md: "49%" }, // 50% of the card width on medium+ screens
                zIndex: 10,
              }}
            >
              <LinearProgress
                variant="determinate"
                value={((activeIndex + 1) / cardData.length) * 100}
                sx={{
                  bgcolor: "lightgray",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: "red",
                    transition: "none",
                  },
                }}
              />
            </Box>

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
                          left: { xs: "0px", md: "20px" },
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
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          mt: 1,
                          justifyContent: { xs: "center", md: "flex-start" },
                        }}
                      >
                        {card.tags.map((tag, index) => (
                          <Typography
                            key={index}
                            variant="body2"
                            color="grey"
                            sx={{
                              position: "relative",
                              top: { xs: "0px", md: "-50px" },
                              left: { xs: "0px", md: "20px" },
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
                          width: { xs: "165px", md: "185px" },
                          position: "relative",
                          height: { xs: "20px", md: "40px" },

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
                          fontSize: { xs: "10px", md: "12px" },
                          left: { xs: "0px", md: "15px" }, // Fixes overlap on small screens
                        }}
                      >
                        Get Started Now
                        <img
                          src={arrowimg}
                          alt="Start"
                          style={{ width: 20, height: 20, marginLeft: 10 }}
                        />
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
          <Typography
            variant="h4"
            sx={{ marginBottom: "5px", textAlign: "center", fontSize: "28px" }}
          >
            What Our Client's Say
          </Typography>

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
                marginTop: "10px",
              }}
            >
              <Swiper
                style={{
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
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
                pagination={
                  window.innerWidth <= 1024 ? { clickable: true } : false
                }
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
                        width: {
                          xs: "92%",
                          sm: "88%",
                          md: "87%",
                          lg: "90%",
                          xl: "670px",
                        },
                        height: {
                          xs: "240px",
                          sm: "250px",
                          md: "260px",
                          lg: "270px",
                        },
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
      </section>
    </>
  );
};

export default Home;
