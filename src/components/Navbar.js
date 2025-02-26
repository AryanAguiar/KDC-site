import * as React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import imgLogo from '../images/KDC_logo.png';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { motion, useAnimation } from 'framer-motion';
import Divider from '@mui/material/Divider';
import './Navbar.css'

const pages = ['Company', 'Services', 'Industries', 'Portfolio'];

const subLinks = {
    Services: ["Service1", "Service2", "Service3"],
    Company: [{ name: "About Us", path: "/company#about-us" }, { name: "Blogs", path: "/blogs" }, "About3"]
};

const activeStyles = {
    fontWeight: '600',
    color: '#161616',
    position: 'relative',
};


function Navbar() {
    const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);
    const [activeSubMenu, setActiveSubMenu] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(null);

    const location = useLocation();

    const handleToggleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleToggleDropdown = (page) => {
        setOpenDropdown(openDropdown === page ? null : page);
    };

    React.useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                const yOffset = -40;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [location]);

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleMouseEnter = (event, page) => {
        if (subLinks[page]) {
            setActiveSubMenu(page);

            if (event) {
                setAnchorElSubMenu(event.currentTarget);
            }
        }
    };

    const handleMouseLeave = () => {
        setAnchorElSubMenu(null);
        setActiveSubMenu(null);
    };

    return (
        <AppBar
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            position="sticky"
            sx={{
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.2)',
                padding: '10px 0',
                display: 'flex',
                alignItems: 'center',
                marginBottom: "20px"
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '2450px',
                    mx: 'auto',
                    px: { xs: 2, sm: 5, lg: 10, xl: 15, '2xl': 20 }
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/" onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                        <img src={imgLogo} alt="Logo" style={{ height: "30px", width: "100%", marginRight: "12px" }} />
                    </Link>

                    {/* Mobile navigation */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleToggleDrawer} color="inherit">
                            <MenuIcon sx={{ color: 'black' }} />
                        </IconButton>
                        <Drawer anchor="left" open={mobileOpen} onClose={handleToggleDrawer}>
                            <Link to="/" onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                                <img src={imgLogo} alt="Logo" style={{ height: "30px", width: "75%", padding: "20px" }} />
                            </Link>
                            <List sx={{ width: 170 }}>
                                {pages.map((page, index) => (
                                    <React.Fragment key={page}>
                                        <ListItem button onClick={() => handleToggleDropdown(page)} sx={{ color: 'black' }}>
                                            <NavLink to={`/${page.toLowerCase()}`} style={{ textDecoration: 'none', color: 'black', flexGrow: 1 }}>
                                                <ListItemText primary={page} />
                                            </NavLink>
                                            {subLinks[page] ? (openDropdown === page ? <ExpandLess /> : <ExpandMore />) : null}
                                        </ListItem>
                                        {subLinks[page] && (
                                            <Collapse in={openDropdown === page} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {subLinks[page].map((subLink, subIndex) => {
                                                        const linkPath = typeof subLink === "string" ? `/${subLink.toLowerCase()}` : subLink.path;
                                                        const linkName = typeof subLink === "string" ? subLink : subLink.name;
                                                        return (
                                                            <ListItem button component={NavLink} to={linkPath} key={subIndex} sx={{ pl: 4, color: 'black' }}>
                                                                <ListItemText primary={linkName} />
                                                            </ListItem>
                                                        );
                                                    })}
                                                </List>
                                            </Collapse>
                                        )}
                                        {index < pages.length - 1 && <Divider />}
                                    </React.Fragment>
                                ))}
                            </List>
                        </Drawer>
                    </Box>

                    {/* Desktop navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: '40px', xl: '80px', '2xl': '100px' }, alignItems: 'center',}}>
                        {pages.map((page) => (
                            <Box
                                key={page}
                                onMouseEnter={(event) => handleMouseEnter(event, page)}
                                onMouseLeave={handleMouseLeave}
                                sx={{ position: 'relative' }}
                            >
                                <NavLink
                                    to={`/${page.toLowerCase()}`}
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >
                                    {page}
                                </NavLink>



                                {/* Invisible Hover Bridge to Prevent Disappearance */}
                                {activeSubMenu === page && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            width: '100%',
                                            height: '35px',
                                            backgroundColor: 'transparent',
                                            zIndex: 5,
                                        }}
                                        onMouseEnter={() => handleMouseEnter(null, page)}
                                    />
                                )}

                                {activeSubMenu === page && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: -1,
                                            backgroundColor: '#f5f5f5',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            boxShadow: 3,
                                            zIndex: 10,
                                            minWidth: '200px',
                                            marginTop: "32px"
                                        }}
                                    >
                                        <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {subLinks[page].map((subLink, index) => {
                                                const linkPath = typeof subLink === "string" ? `/${subLink.toLowerCase()}` : subLink.path;
                                                const linkName = typeof subLink === "string" ? subLink : subLink.name;

                                                return (
                                                    <li key={index} style={{ padding: '5px 10px' }}>
                                                        <NavLink to={linkPath} style={{ color: 'gray', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                                            <span style={{ marginRight: '5px' }}>•</span> {linkName}
                                                        </NavLink>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Link to='/contact'>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#C8102E',
                                    color: 'white',
                                    borderRadius: '8px',
                                    px: { xs: 2, md: 3, xl: 4, '2xl': 5 },
                                    py: { xs: 1, md: 1.2, xl: 1.4, '2xl': 1.8 },
                                    fontSize: { md: '11px', xl: '13px', '2xl': '15px' },
                                    
                                }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
