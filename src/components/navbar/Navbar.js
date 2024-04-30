import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; // Importa Link per la navigazione
import Box from '@mui/material/Box';
import './Navbar.css';
import CloseIcon from '@mui/icons-material/Close';

const pages = [
    { name: 'Home', path: '/home' },
    { name: 'Su di noi', path: '/sudinoi' },
    { name: 'Entra nel Team', path: '/entranelteam' },
    { name: 'Social', path: '/socialmedia' },
    { name: 'Contatti', path: '/contatti' },
];

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width:900px)'); // Media query for desktop
    const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)'); // Media query for tablet
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = React.useState(false); // Stato per il drawer

    const handleDrawerToggle = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    const drawerContent = (
        <Box sx={{ width: 250, backgroundColor: 'transparent' }} role="presentation">
            <List>
                {pages.map((page, index) => (
                    <React.Fragment key={page.name}>
                        <ListItem disablePadding>
                            <ListItemText>
                                <Link to={page.path} style={{ textDecoration: 'none' }}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: 'Helvetica, Arial, sans-serif',
                                            fontSize: 20,
                                            padding: '16px 8px',
                                            color: '#000',
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </Link>
                            </ListItemText>
                        </ListItem>
                        {index < pages.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </List>
            <IconButton
                sx={{ position: 'absolute', top: 10, right: 10 }}
                onClick={handleCloseDrawer}
            >
                <CloseIcon />
            </IconButton>
        </Box>
    );

    const drawer = (
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleCloseDrawer}
            onOpen={() => { }}
            sx={{
                width: 250,
                backgroundColor: '#fff',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                '& .MuiDrawer-paper': {
                    transition: 'background-color 0.3s ease',
                },
            }}
            paperProps={{ backgroundColor: 'transparent' }} // Add this prop
        >
            {drawerContent}
        </Drawer>
    );

    return (
        <AppBar position="static" sx={{ background: '#fff' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {isDesktop ? (
                    <>
                        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src="https://i.ibb.co/9gfdpHZ/logo.png" alt="logo" border="0" style={{ width: 70, height: 70, marginLeft: 35, marginRight: 20, marginTop: 10, marginBottom: 10 }} />
                            <Link to="/" style={{ textDecoration: 'none', fontSize: 20, fontFamily: 'Helvetica, Arial, sans-serif', color: '#000' }}>SIOUX AIRSOFT</Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        {pages.map((page, index) => (
                            <Typography key={page.name} variant="body1" sx={{ marginRight: 4, fontSize: 21, color: '#000' }}>
                                <Link to={page.path} style={{ textDecoration: 'none', color: '#000' }}>
                                    {page.name}
                                </Link>
                            </Typography>
                        ))}
                    </>
                ) : (
                    <>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: '#000' }} />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
                            <img src="https://i.ibb.co/9gfdpHZ/logo.png" alt="logo" border="0" style={{ width: 70, height: 70, marginRight: 10, marginTop: 10, marginBottom: 10 }} />
                            <Link to="/" style={{ textDecoration: 'none', fontSize: 20, fontFamily: 'Helvetica, Arial, sans-serif', color: '#000' }}>SIOUX AIRSOFT</Link>
                        </Typography>
                    </>
                )}
            </Toolbar>
            {drawer}
        </AppBar>
    );
};

export default Navbar;
