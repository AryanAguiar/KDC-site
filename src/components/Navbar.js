import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
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

const pages = ['Company', 'Services', 'Industries', 'Portfolio'];

const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
};

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
            {/* Extended width for 2450px screens */}
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '2450px',
                    mx: 'auto',
                    px: { xs: 2, sm: 5, lg: 10, xl: 15, '2xl': 20 }
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img
                            src={imgLogo}
                            alt="Logo"
                            style={{ height: '30px', marginRight: '12px' }}
                        />
                    </Link>

                    {/* Mobile Menu Button */}
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
                            {/* Contact Us Button in Mobile Menu */}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyles : { color: 'gray', textDecoration: 'none' })}>
                                    Contact Us
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Desktop Nav Links */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { md: '40px', xl: '80px', '2xl': '100px' }, alignItems: 'center', ml: { xs: 5, md: 10, xl: 20, '2xl': 40 } }}>
                        {pages.map((page) => (
                            <NavLink
                                key={page}
                                to={`/${page.toLowerCase()}`}
                                style={({ isActive }) => (isActive ? activeStyles : { color: 'gray', textDecoration: 'none', fontSize: { md: '16px', xl: '18px', '2xl': '22px' } })}
                            >
                                {page}
                            </NavLink>
                        ))}
                    </Box>

                    {/* Contact Us Button (Desktop) - Normal Size but Expands on Large Screens */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Link to='/contact'>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#3F3F3F',
                                    color: 'white',
                                    borderRadius: '8px',
                                    px: { xs: 2, md: 3, xl: 4, '2xl': 5 }, // Normal size but expands on larger screens
                                    py: { xs: 1, md: 1.2, xl: 1.4, '2xl': 1.8 }, // Slight padding increase for larger screens
                                    fontSize: { md: '11px', xl: '13px', '2xl': '15px' } // Keeps button normal-sized in most cases
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
