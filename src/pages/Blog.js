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

    // Pagination logic
    const handleChange = (event, value) => {
        setPage(value);

        // Scroll to the absolute top to ensure it's at the start of the page
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 23);
    };


    const displayedBlogs = blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

    return (
        <>

            <Box sx={{ margin: 0, padding: 0, backgroundColor: "#ECECEC", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: '20px' }}>
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{
                        fontWeight: "700",
                        fontSize: "32px"
                    }}>
                        Blogs
                    </Typography>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                    <Typography variant="body1" gutterBottom sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                        maxWidth: "964px",
                        textAlign: "center",
                        lineHeight: "32px"
                    }}>
                        Explore & Discover the most outstanding articles that are trending on the Web Development which can enhance the way of Thinking & Innovation!
                    </Typography>
                </motion.div>
            </Box>

            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>

                {/* Blog Cards Wrapper with Flexbox */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "20px",
                        maxWidth: "1428px"
                    }}
                >
                    {displayedBlogs.map((blog) => (
                        <motion.div
                            key={`${blog.id} - ${page}`}
                            style={{ display: "flex", flex: "1 1 300px" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: blog.id * 0.1 }}
                        >
                            <Card key={blog.id} sx={{
                                width: "100%", maxWidth: "454px", height: "100%", maxHeight: "362px",
                                flex: "1 1 300px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
                                }
                            }}>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                />
                                <CardContent sx={{ padding: "24px", }}>
                                    <Typography variant="h6" sx={{ fontSize: { xs: "12px", sm: "12px", md: "13px", lg: "16px", xl: "18px" } }}>{blog.title}</Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </Box>

                {/* Pagination */}
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "100px" }}>
                    <Pagination count={Math.ceil(blogs.length / blogsPerPage)} page={page} onChange={handleChange} />
                </Box>
            </Container>
        </>

    );
};

export default Blogs;
