"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Container, Drawer, IconButton, InputBase, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography, alpha, styled } from "@mui/material"
import { ReactNode, useState } from "react"
import { IDrawerMenu } from '../interfaces/workspace';
import styles from './styles.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { drawer_menus } from '../utils/drawer/links';

const drawerWidth = 200;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '14ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
}));

export default function Layout({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const handleDrawerToggle = () => {
        setMobileOpen((old_state) => !old_state);
    };

    const drawer = (
        <List sx={{ marginTop: { sm: '96px' } }}>
            {drawer_menus.map((item: IDrawerMenu, index: number) => (
                <Link href={item.link} key={index} className={[styles.blackLink, (pathname === item.link ? styles.activeLink : '')].join(' ')}>
                    <ListItem>
                        <ListItemButton>
                            {item.icon}
                            <Typography sx={{ marginLeft: '10px' }}>
                                {item.label}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}            
        </List>
    );

    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            backgroundColor: "#f0f0f0",
                            boxSizing: 'border-box',
                            width: drawerWidth 
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                {/* Desktop Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#f0f0f0',
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            borderRight: 'none'
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Encontre clientes rapidamente aqui"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Typography sx={{ fontWeight: '600' }}>
                            Bem-vindo, Marfagarfo
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            padding: '5px',
                            gap: '10px', 
                            cursor: 'pointer', 
                            '&:hover': {
                                backgroundColor: '#e0e0e0',
                            },
                            transition: 'background-color 0.3s',
                        }}>
                            <Avatar>M</Avatar>
                            <Typography variant="h6" noWrap component="div" sx={{ fontSize: '16px', fontWeight: '500' }}>
                                Meu Perfil
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
                <Container maxWidth='xl' sx={{ marginTop: { xs: '20px', sm: '32px' } }} >
                    {children}
                </Container>
            </Box>            
        </Box>
    )
}