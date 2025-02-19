import { useRef,useState } from 'react';
import { Paper, Typography, Box, Stack, Card, CardContent, Avatar ,Button , CardMedia, LinearProgress, Accordion, AccordionSummary, Container, AccordionDetails, TextField, Divider } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import heroImg from '../images/Service_page.png'
import phplogo from '../images/Laravel - 24px.png'
import nodelogo from '../images/Node js - 24px.png'
import nextlogo from '../images/Next js - 24px.png'
import reactlogo from '../images/React - 24px.png'
import arrowimg from '../images/right-up.png'
import callusimg from '../images/Call us.png'
import locationimg from '../images/Location.png'
import emailimg from '../images/Email.png'
import './Services.css'
import { red } from '@mui/material/colors';

function Services() {
    const services = [
        { title: "PHP Laravel Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: phplogo },
        { title: "Node Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: nodelogo },
        { title: "React Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: reactlogo },
        { title: "Next Js Development", description: "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi. Volutpat Et Morbi Interdum.", img: nextlogo }
      ];

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

      const swiperRef = useRef(null);
      const [activeIndex, setActiveIndex] = useState(0);

      const faqs = [
        { question: "What is a CMS, and how can it benefit my business?", answer: "Ans : A CMS (Content Management System) lets you manage and update website content without technical expertise. It streamlines content creation, enhances SEO, and simplifies maintenance. This saves time, improves efficiency, and ensures your website stays current." },
        { question: "How do you determine the best CMS for my website?", answer: "Simply click on the dropdown to reveal more information." },
        { question: "Is this mobile-friendly?", answer: "Yes! The FAQ section is fully responsive." },
      ];

      const validationSchema = Yup.object({
        fullName: Yup.string().required("Full Name is required"),
        companyName: Yup.string().required("Company Name is required"),
        mobileNumber: Yup.string().required("Mobile Number is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        country: Yup.string().required("Country is required"),
        city: Yup.string().required("City is required"),
        requirement: Yup.string().required("Requirement is required"),
      });

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

    return (
        <div>
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
                  {`Web & CMS Development`}
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
                  "Providing tailored Web and CMS development solutions to empower seamless content management and dynamic online experiences
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

          <section className='web-services' style={{backgroundColor: "#f4f4f4", paddingTop: "40px", paddingBottom: "40px"}}>
            <div className='languages'>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "22px", sm: "26px", md: "32px" }, // Responsive font size
                  fontWeight: "bold",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Our Web & CMS Development Services
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
                        mx: "9px", // Adds more space between cards
                        my: "-15px",
                        mb: { xs: "8px", sm: "10px", md: "16px", lg: "10px" }, // Adds vertical spaci
                      }}
                    >
                      <Card
                        sx={{
                          bgcolor: "#FFF",
                          borderRadius: 3,
                          boxShadow: 0,
                          width: { xs: "250px", sm: "300px", md: "520px", lg: "600px", "xl": "698px" },
                          height: { xs: "178px", sm: "240px", md: "228px", lg: "240px", "xl": "230px" },
                          p: { xs: "4px", sm: "12px", md: "12px", lg: "18px", "lx":"20px" }
                        }}
                      >
                        <CardContent>
                          <Avatar
                            src={service.img}
                            alt={service.title}
                            sx={{
                              width: { xs: 40, sm: 48, md: 50, lg: 54, xl: 64 }, // Responsive width
                              height: { xs: 40, sm: 48, md: 50, lg: 54, xl: 64 }, // Responsive height
                              mb: { xs: 1, sm: 2, md: 3 }, // Adjust spacing
                            }}
                          />


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
          </section>

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
                  height: {xs: 30, sm: 30, md: 40},
                  bgcolor: "rgba(0,0,0,0.6)",
                  color: "white",
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "black" },
                }}
                
              >
                <ArrowBackIosIcon fontSize="small" sx={{ marginLeft: "4px", marginRight:"-3px" }} />
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
                  height: {xs: 30, sm: 30, md: 40},
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
                            left: {xs: "0px", md: "20px"}
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
                            left: {xs: "0px", md: "20px"},
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
                                left: {xs: "0px", md: "20px"}
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
                            width: {xs: "165px", md: "220px"},
                            position: "relative",
                            height: {xs: "20px", md: "45px"},
                            
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
                            fontSize: {xs: "10px", md: "15px"},
                            left: {xs: "0px", md: "15px"} // Fixes overlap on small screens
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

          <section>
          <Container maxWidth={false} 
            sx={{ maxWidth: "700px",
            mt: 4,
            textAlign: "center",
            mb: 20,
            }}>
              <Typography variant="h4" gutterBottom sx={{ mb: 5, fontSize: {xs: 20, md: 28}}}>
                Frequently Asked Questions (FAQ)
              </Typography>

              <Box sx={{ backgroundColor: "#e5e5e5", borderRadius: 2, p: 3, mt: 2 }}>
                {faqs.map((faq, index) => (
                  <Accordion key={index} sx={{ backgroundColor: "#e5e5e5", mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
                      <Typography variant="h6"
                      sx={{
                        fontSize: {xs: 14, md: 18}
                      }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{
                        fontSize: {xs: 14, md: 18},
                        textAlign: "left"
                      }}>{faq.answer}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Container>
          </section>

          <section style={{ marginTop: "50px" }}>
            <div className="contact-us">
              <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", sm: "2rem" }, textAlign: "center", marginBottom: 3 }}>
                Contact us
              </Typography>

              <Box
                sx={{
                  padding: { xs: 2, sm: 4 },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  gap: { xs: 2, md: 4 },
                }}
              >
                {/* Left Section */}
                <Stack
                  spacing={3}
                  sx={{
                    width: { xs: "100%", md: "40%" },
                    position: "relative",
                    top: { xs: "-40px", md: "-80px" }, // Adjusts text position based on screen size
                  }}
                >
                  <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" }, fontWeight: "bold" }}>
                    Let's Turn Your Vision Into Reality.
                  </Typography>

                  {/* Contact Details */}
                  {[
                    { img: locationimg, title: "Location:", text: "Office No. 10, 2nd Floor, Chandra Pushpa, Hirachand Desai Rd, Opp. Ghatkopar Metro Station, Ghatkopar West, Mumbai, Maharashtra - 400086" },
                    { img: emailimg, title: "Email:", text: "info@kdigitalcurry.com" },
                    { img: callusimg, title: "Call Us:", text: "+91 970 246 4242" },
                  ].map((item, index) => (
                    <Stack key={index} direction="row" alignItems="flex-start" spacing={2}>
                      <img src={item.img} alt={item.title.toLowerCase()} style={{ width: 35, height: 35, marginTop: 5 }} />
                      <Stack>
                        <Typography variant="body1" fontWeight="bold">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ width: { xs: "100%", sm: "80%", md: "300px" } }}>
                          {item.text}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>

                {/* Right Section - Contact Form */}
                <Paper
                  elevation={3}
                  sx={{
                    padding: { xs: 2, sm: 4 },
                    width: { xs: "100%", md: "40%" },
                    backgroundColor: "#e5e5e5",
                  }}
                >
                  <Formik
                    initialValues={{
                      fullName: "",
                      companyName: "",
                      mobileNumber: "",
                      email: "",
                      country: "",
                      city: "",
                      requirement: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log("Form Submitted", values)}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Stack spacing={2}>
                          <Field
                            name="fullName"
                            as={TextField}
                            label="Full Name"
                            fullWidth
                            error={touched.fullName && Boolean(errors.fullName)}
                            helperText={touched.fullName && errors.fullName}
                            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" }, height: { xs: 40, sm: 50 } }}
                          />
                          <Field
                            name="companyName"
                            as={TextField}
                            label="Company Name"
                            fullWidth
                            error={touched.companyName && Boolean(errors.companyName)}
                            helperText={touched.companyName && errors.companyName}
                          />
                          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Field
                              name="mobileNumber"
                              as={TextField}
                              label="Mobile Number"
                              fullWidth
                              error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                              helperText={touched.mobileNumber && errors.mobileNumber}
                            />
                            <Field
                              name="email"
                              as={TextField}
                              label="Email"
                              fullWidth
                              error={touched.email && Boolean(errors.email)}
                              helperText={touched.email && errors.email}
                            />
                          </Stack>
                          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                            <Field
                              name="country"
                              as={TextField}
                              label="Country"
                              fullWidth
                              error={touched.country && Boolean(errors.country)}
                              helperText={touched.country && errors.country}
                            />
                            <Field
                              name="city"
                              as={TextField}
                              label="City"
                              fullWidth
                              error={touched.city && Boolean(errors.city)}
                              helperText={touched.city && errors.city}
                            />
                          </Stack>
                          <Field
                            name="requirement"
                            as={TextField}
                            label="Requirement"
                            multiline
                            rows={1}
                            fullWidth
                            error={touched.requirement && Boolean(errors.requirement)}
                            helperText={touched.requirement && errors.requirement}
                          />
                          <Button type="submit" variant="contained" fullWidth sx={{backgroundColor: "#C8102E"}}>
                            Submit
                          </Button>
                        </Stack>
                      </Form>
                    )}
                  </Formik>
                </Paper>
              </Box>
            </div>
          </section>

        </div>
    )
}

export default Services
