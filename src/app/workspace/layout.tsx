"use client";

import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GroupsIcon from '@mui/icons-material/Groups';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { ReactNode, useState } from "react"
import { IDrawerMenu } from '../interfaces/workspace';
import styles from './styles.module.css';

const drawerWidth = 200;

export default function Layout({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const handleDrawerToggle = () => {
        setMobileOpen((old_state) => !old_state);
    };

    const drawer_menus: IDrawerMenu[] = [
        {
            label: 'Workspace',
            icon: <BusinessIcon />,
            link: '/workspace/home'
        },
        {
            label: 'Briefings',
            icon: <AssignmentIcon />,
            link: '/workspace/briefings'
        },
        {
            label: 'Clientes',
            icon: <GroupsIcon />,
            link: '/workspace/clients'
        },
        {
            label: 'Catálogos',
            icon: <FormatListBulletedIcon />,
            link: '/workspace/catalogs'
        },
        {
            label: 'Portfolios',
            icon: <FolderOpenIcon />,
            link: '/workspace/portfolios'
        }
    ];

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
        <Box sx={{ display: 'flex' }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
                    <Typography variant="h6" noWrap component="div">
                        Bem-vindo, Marfadomal
                    </Typography>
                </Toolbar>
                <Container>
                    {children}
                </Container>
            </Box>            
        </Box>
    )
}