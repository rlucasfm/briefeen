"use client";

import TabletMacIcon from '@mui/icons-material/TabletMac';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { ReactNode, useState } from "react"

const drawerWidth = 240;

export default function Layout({ children }: { children: ReactNode }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((old_state) => !old_state);
    };

    const drawer = (
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <TabletMacIcon />
                    </ListItemIcon>
                    <Typography>
                        Workspace
                    </Typography>
                </ListItemButton>
            </ListItem>
        </List>
    );

    return(
        <Box sx={{ display: 'flex' }}>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                {children}
            </Box>            
        </Box>
    )
}