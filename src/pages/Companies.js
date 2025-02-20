import React from "react";
import { Box, Typography, Breadcrumbs, Link, Card, CardMedia, CardContent, TextField, Paper, Stack, Button } from "@mui/material";
import CountUp from 'react-countup';
import heroImg from '../images/About_us.png';
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink, useLocation } from "react-router-dom";
import missionImg from "../images/Mission.png";
import visionImg from "../images/Vision.png";
import ourValues from "../images/Our Values.png";
import callusimg from '../images/Call us.png'
import locationimg from '../images/Location.png'
import emailimg from '../images/Email.png'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";


const Companies = () => {

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    requirement: Yup.string().required("Requirement is required"),
  });

  const sectionNames = {
    "about-us": "About Us",
    "our-team": "Our Team",
    "services": "Services",
    "web-development": "Web Development",
    "contact": "Contact Us",
  };

  const location = useLocation();
  const fullPath = location.pathname + location.hash; // Get full URL path including hash
  const pathParts = fullPath.split("/").filter((x) => x); // Split by "/"

  const stats = [
    { value: 10, suffix: '+', label: 'Working Since 2014' },
    { value: 20, suffix: '+', label: 'Industries Worked For' },
    { value: 100, suffix: '+', label: 'Successful Projects' },
    { value: 50, suffix: '+', label: 'Global Clients' },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const { ref: missionRef, inView: missionInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { ref: visionTextRef, inView: visionTextInView } = useInView({ threshold: 0.05, triggerOnce: true });

  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Start position
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Stagger effect (0.3s delay between items)
    }
  };

  const projects = [
    {
      title: "Project Name",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi.",
      image: ourValues, // Replace with actual image URL
    },
    {
      title: "Project Name",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi.",
      image: ourValues,
    },
    {
      title: "Project Name",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Accumsan Nunc Augue Morbi Scelerisque Porta Sagittis Proin Enim Mi.",
      image: ourValues,
    },
  ];

  return (
    <>
      <Box sx={{ px: { xs: 5, s: 9, md: 9, lg: 14, xl: 19 }, padding: "10px 0 0 0" }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Home
          </Link>

          {pathParts.map((part, index) => {
            const routeTo = `/${pathParts.slice(0, index + 1).join("/")}`;
            const [base, hash] = part.split("#");
            const sectionLabel = sectionNames[hash] || sectionNames[base] || base.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase()); // Get readable name

            const isLast = index === pathParts.length - 1;

            return isLast ? (
              <Typography key={part} color="text.primary">
                {sectionLabel}
              </Typography>
            ) : (
              <Link key={part} underline="hover" color="inherit" component={RouterLink} to={routeTo}>
                {sectionLabel}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>

      <section className="home" id="about-us">
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 3, s: 3, sm: 6, md: 5, lg: 10, xl: 15 },
            py: { xs: 1, md: 0 },
            overflow: "hidden",
            width: "100%", // Ensures full width
          }}
        >
          {/* Left Content (Text) */}
          <Box
            className="wow animate__animated animate__fadeInLeft"
            data-wow-duration="1.5s"
            sx={{
              flex: { xs: "1", md: "1.2" },
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "90%", sm: "85%", md: "55%" },
              mx: { xs: "auto", md: "0" },
              px: { xs: 2, md: 1.5 },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="700"
              gutterBottom
              sx={{
                fontSize: { xs: "22px", sm: "24px", md: "28px", lg: "32px" },
                margin: { xs: "auto", sm: "auto", md: "0px 0px 10px 0", lg: "0px 0px 10px 0", xl: "0px 0px 20px 0" }
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontSize: { xs: "14px", sm: "15px", md: "16px", lg: "18px" },
                maxWidth: "100%",
                lineHeight: 1.6,
                margin: { xs: "auto", sm: "auto", md: "0px 0px 40px 0", lg: "0px 0px 50px 0", xl: "0px 0px 130px 0" }
              }}
            >
              KDigitalCurry is a leading mobile and web app development company in Mumbai with over 10+ years of experience. We create human-centric, scalable solutions, delivering full-stack services across various domains.
            </Typography>
          </Box>


          {/* Right Content (Image) */}
          <Box
            sx={{
              flex: { xs: "1", md: "0.8" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: { xs: "100%", md: "45%" },
              p: { xs: 2, md: 4 },
            }}
          >
            <img
              className="wow animate__animated animate__fadeInRight"
              data-wow-duration="1.5s"
              src={heroImg}
              alt="Hero"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </section>


      <section className="counter" style={{ padding: "20px" }}>
        <Box
          ref={ref}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "10px", sm: "15px", md: "19px", lg: "20px", xl: "20px" },
            width: "100%",
            marginTop: "20px",
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: "1",
                textAlign: "center",
                maxWidth: { md: "205px", lg: "265px", xl: "300px" }, // Consistent width for all stats
                minWidth: "100px",
                height: { md: "180px", lg: "245px", xl: "270px" },
                maxHeight: "100px",
                padding: { xs: "10px", sm: "15px", md: "20px" },
                position: "relative",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "20px", sm: "22px", md: "26px", lg: "28px", xl: "40px" },
                  color: "#333", // Adjust to match image color
                }}
              >
                {inView ? <CountUp start={0} end={stat.value} duration={3} /> : 0}
                {stat.suffix}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "10px", sm: "12px", md: "15px", lg: "14px", xl: "20px" },
                }}
              >
                {stat.label}
              </Typography>

              {/* Vertical Divider - Except for the last item */}
              {index !== stats.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    right: { sm: "-5px", md: "-10px", lg: "-15px" }, // Positioning
                    height: "50%",
                    width: "1px",
                    backgroundColor: "#ddd", // Light gray divider
                    display: { xs: "none", sm: "block" }, // Hide on extra small screens (xs)
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </section>


      <section className="mission-vision" style={{ backgroundColor: "#F2F2F2" }}>
        <Box sx={{ px: { xs: 2, md: 13 }, py: { xs: 6, md: 12 }, overflow: "hidden" }}>
          {/* Mission Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              mb: { xs: 6, md: 12 },
            }}
          >
            {/* Image */}
            <Box
              ref={missionRef}
              component="img"
              src={missionImg}
              alt="Mission"
              className={`animate__animated ${missionInView ? "animate__fadeInLeft" : ""}`}
              sx={{
                width: { xs: "70%", sm: "50%", md: "45%", lg: "50%", xl: "603px" },
                height: "auto",
                maxWidth: "603px",
                borderRadius: "12px",
                opacity: missionInView ? 1 : 0,
                transform: missionInView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.5s ease-out",
              }}
            />

            {/* Text Content */}
            <Box
              ref={textRef}
              className={`animate__animated  ${textInView ? "animate__fadeInRight" : ""}`}
              sx={{
                maxWidth: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
                padding: "20px",
                opacity: textInView ? 1 : 0,
                transform: textInView ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.5s ease-out",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                gutterBottom
                sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "25px", xl: "32px" } }}
              >
                Mission
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight="500"
                sx={{ fontSize: { xs: "12px", sm: "13px", md: "16px", lg: "18px", xl: "20px" } }}
              >
                "To Empower Businesses By Delivering Cutting-Edge, Scalable Web Solutions That Drive Innovation,
                Enhance User Experience, And Enable Seamless Digital Transformation."
              </Typography>
            </Box>
          </Box>

          {/* Vision Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row-reverse" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Image */}
            <Box
              ref={visionRef}
              component="img"
              src={visionImg}
              alt="Vision"
              className={`animate__animated ${visionInView ? "animate__fadeInRight" : ""}`}
              sx={{
                width: { xs: "70%", sm: "50%", md: "45%", lg: "50%", xl: "603px" },
                height: "auto",
                maxWidth: "603px",
                borderRadius: "12px",
                opacity: visionInView ? 1 : 0,
                transform: visionInView ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.5s ease-out",
              }}
            />

            {/* Text Content */}
            <Box
              ref={visionTextRef}
              className={`animate__animated ${visionTextInView ? "animate__fadeInLeft" : ""}`}
              sx={{
                maxWidth: { xs: "100%", md: "50%" },
                textAlign: { xs: "center", md: "left" },
                padding: "20px",
                opacity: visionTextInView ? 1 : 0,
                transform: visionTextInView ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.5s ease-out",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="700"
                gutterBottom
                sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "25px", xl: "32px" } }}
              >
                Vision
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight="500"
                sx={{ fontSize: { xs: "12px", sm: "13px", md: "16px", lg: "18px", xl: "20px" } }}
              >
                "To Be A Leader In Web Development, Transforming Ideas Into Impactful Digital Realities, And Shaping The Future Of Online Experiences With Excellence In Technology, Design, And Innovation."
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>

      <section className="our-values">
        <Box

          sx={{
            display: "flex",
            overflow: 'hidden',
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, sm: 4, md: 8, lg: 10, xl: 15 }, // Increased padding for xl screens
            py: { xs: 4, md: 6, xl: 8 },
            maxWidth: "1400px", // Limits overall width on very large screens
            mx: "auto", // Centers the section horizontally
          }}
        >
          {/* Typography (Title) */}
          <Typography
            variant="h5"
            fontWeight="700"
            sx={{
              fontSize: { xs: "20px", sm: "25px", md: "29px", lg: "32px", xl: "36px" },
              marginBottom: { xs: 3, md: 4, xl: 6 },
              p: { xs: 0, xl: "0" },
            }}
          >
            Our Values
          </Typography>

          {/* Parent Box for Image & Text */}
          <Box

            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stacks on small screens, row on larger
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 3, sm: 4, md: 5, lg: 6, xl: 10 }, // More spacing on larger screens
              width: "100%",
            }}
          >
            {/* Left Image */}
            <Box
              sx={{
                flex: { xs: "none", md: "0.4" }, // Image takes up 40% of space on md+ screens
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={ourValues} // Replace with actual image path
                alt="Team Collaboration"
                sx={{
                  width: { xs: "80%", sm: "450px", md: "500px", lg: "553px", xl: "650px" }, // Responsive width
                  height: "auto", // Maintain aspect ratio
                  borderRadius: "8px",
                  maxWidth: "100%", // Prevents overflow
                }}
              />
            </Box>

            {/* Right Text Content */}
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
              sx={{
                flex: { xs: "none", md: "0.6" },
                textAlign: { xs: "center", md: "left" },
                maxWidth: { xs: "100%", md: "700px", lg: "800px", xl: "900px" },
              }}
            >
              {[
                { title: "Transparency", desc: "Clear Communication & Openness Throughout The Development Process." },
                { title: "Quality", desc: "Delivering High-Performance, Bug-Free, And Visually Appealing Web Solutions." },
                { title: "Flexibility", desc: "Adapting To Changing Requirements And Providing Scalable Solutions." },
                { title: "Professionalism", desc: "Timely Delivery With Expert Handling And A Client-Focused Approach." },
              ].map((value, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  variants={textVariants}
                  sx={{ mb: { xs: 3, sm: 3, md: 3, lg: 4, xl: 6 } }}
                >
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    sx={{
                      fontSize: { xs: 14, sm: 16, md: 18, lg: 20, xl: 24 },
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="400"
                    sx={{
                      fontSize: { xs: 12, sm: 13, md: 14, lg: 16, xl: 20 },
                      maxWidth: "95%",
                    }}
                  >
                    {value.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

      </section>


      <section className="projects" style={{
        paddingTop: "20px"
      }}>
        <Box sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 10, xl: 16 },

        }}>
          {/* Section Title */}
          <Typography
            variant="h5"
            fontWeight="600"
            fontSize="32px"
            gutterBottom
            sx={{ color: "#333", marginBottom: "20px" }}
          >
            Recent Work
          </Typography>

          {/* Flex Container */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              rowGap: "30px",
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 20px)", md: "1 1 calc(33.33% - 20px)" },
                  maxWidth: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33.33% - 20px)" },
                  minWidth: "260px",
                  maxHeight: "493px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "none",
                  textAlign: "center",
                }}
              >
                {/* Image Placeholder */}
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: { xs: "200px", sm: "250px", md: "250px", lg: "290px", xl: "320px" },
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />

                {/* Project Info */}
                <CardContent sx={{ padding: "0" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ textAlign: "left" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "14px", textAlign: "left" }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

        </Box>
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
                      <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#C8102E" }}>
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
    </>
  );
};

export default Companies
