import * as React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import imgLogo from '../images/KDC_logo.png';
import './Navbar.css'

const pages = ['Company', 'Services', 'Industries', 'Portfolio'];

const subLinks = {
    Services: ["Service1", "Service2", "Service3"],
    Company: [{ name: "About Us", path: "/company#about-us" }, "Service1", "About3"]
};

const activeStyles = {
    fontWeight: '600',
    color: '#161616',
    position: 'relative', // Needed for absolute positioning of the underline
};


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElSubMenu, setAnchorElSubMenu] = React.useState(null);
    const [activeSubMenu, setActiveSubMenu] = React.useState(null);

    const location = useLocation();

    React.useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const handleSubLinkClick = (event, subLink) => {
        event.preventDefault();
        if (typeof subLink === "string") return;

        const targetId = subLink.path.split("#")[1];
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", subLink.path); 
        }
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
            position="sticky"
            sx={{
                backgroundColor: 'white',
                boxShadow: 'none',
                padding: '10px 0',
                display: 'flex',
                alignItems: 'center',
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
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src={imgLogo} alt="Logo" style={{ height: '30px', marginRight: '12px' }} />
                    </Link>

                    {/* Mobile navigation */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon sx={{ color: 'black' }} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <NavLink
                                        to={`/${page.toLowerCase()}`}
                                        style={({ isActive }) => (isActive ? activeStyles : { color: 'gray', textDecoration: 'none' })}
                                    >
                                        {page}
                                    </NavLink>
                                </MenuItem>
                            ))}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyles : { color: 'gray', textDecoration: 'none' })}>
                                    Contact Us
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Desktop navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: '40px', xl: '80px', '2xl': '100px' }, alignItems: 'center', ml: { xs: 5, md: 10, xl: 20, '2xl': 40 } }}>
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
                                            height: '25px', 
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
                                            left: 0,
                                            backgroundColor: '#f5f5f5',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            boxShadow: 3,
                                            zIndex: 10,
                                            minWidth: '200px',
                                            marginTop: "20px"
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
                                    backgroundColor: '#3F3F3F',
                                    color: 'white',
                                    borderRadius: '8px',
                                    px: { xs: 2, md: 3, xl: 4, '2xl': 5 },
                                    py: { xs: 1, md: 1.2, xl: 1.4, '2xl': 1.8 },
                                    fontSize: { md: '11px', xl: '13px', '2xl': '15px' }
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
