import React, { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography, Pagination, Box } from "@mui/material";

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
    };

    const displayedBlogs = blogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

    return (
        <>
            <Box sx={{ margin: 0, padding: 0, backgroundColor: "#ECECEC", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom sx={{
                    fontWeight: "700",
                    fontSize: "32px"
                }}>
                    Blogs
                </Typography>
                <Typography variant="body1" gutterBottom sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    maxWidth: "964px",
                    textAlign: "center",
                    lineHeight: "32px"
                }}>
                    Explore & Discover the most outstanding articles that are trending on the Web Development which can enhance the way of Thinking & Innovation!
                </Typography>
            </Box>

            <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px", }}>

                </Box>

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
                        <Card
                            key={blog.id}
                            sx={{
                                width: "100%",
                                maxWidth: { xs: "100%", sm: "400px", md: "454px" }, // Responsive max width
                                height: "auto", // Allows flexible height
                                maxHeight: { xs: "auto", sm: "362px" }, // Keeps it responsive
                                flex: "1 1 300px",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                            />
                            <CardContent sx={{ padding: "24px", flexGrow: 1 }}>
                                <Typography variant="h6" sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}>
                                    {blog.title}
                                </Typography>
                            </CardContent>
                        </Card>

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
