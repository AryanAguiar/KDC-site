import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Pagination, Box } from "@mui/material";
import { motion } from "framer-motion";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        // Placeholder data simulating an API response
        const fetchedBlogs = Array.from({ length: 15 }, (_, index) => ({
            id: index + 1,
            title:
                index % 2 === 0
                    ? "5 Best Multilingual WordPress Plugins To Reach A Wider Audience"
                    : "Top 10 SEO Plugins For WordPress In 2024 – Your Guide To SEO Domination",
            image: "https://placehold.co/300x200", // Placeholder image
        }));
        setBlogs(fetchedBlogs);
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 23);
    };

    const displayedBlogs = blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

    return (
        <>
            {/* Header Section */}
            <Box
                sx={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#ECECEC",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px",
                    overflow: "visible",
                }}
            >
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontWeight: "700",
                            fontSize: { xs: "24px", sm: "28px", md: "32px" },
                        }}
                    >
                        Blogs
                    </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            fontWeight: "400",
                            fontSize: { xs: "14px", sm: "16px" },
                            maxWidth: "964px",
                            textAlign: "center",
                            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
                        }}
                    >
                        Explore & Discover the most outstanding articles that are trending on the Web Development which can enhance the way of Thinking & Innovation!
                    </Typography>
                </motion.div>
            </Box>

            {/* Main Container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    minHeight: "100vh",
                    padding: "40px 0",
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "1920px",
                        overflow: "visible",
                        margin: "0 auto",
                        px: { xs: "10px", sm: "20px", md: "40px", lg: "70px", xl: "107px" },
                    }}
                >
                    {/* Blog Cards Wrapper */}
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: { xs: "center", md: "space-between" },
                            gap: "20px",
                            width: "100%",
                            maxWidth: "95%",
                            overflow: "visible",
                        }}
                    >
                        {displayedBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                style={{
                                    display: "flex",
                                    flex: "1 1 calc(33.33% - 20px)",
                                    maxWidth: "500px",
                                    minWidth: "300px",
                                    justifyContent: "center",
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card
                                    sx={{
                                        width: { xs: "95%", sm: "80%", md: "100%" },
                                        height: { xs: "260px", sm: "300px", md: "380px" },
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                                        },
                                    }}
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        style={{
                                            width: "100%",
                                            height: "65%",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <CardContent sx={{ padding: { xs: "10px", sm: "14px", md: "20px" } }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                                                fontWeight: 400,
                                            }}
                                        >
                                            {blog.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Container>


                {/* Pagination */}
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "100px" }}>
                    <Pagination count={Math.ceil(blogs.length / blogsPerPage)} page={page} onChange={handleChange} />
                </Box>
            </Box>

        </>
    );
};

export default Blogs;
