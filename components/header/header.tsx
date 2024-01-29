"use client";
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, useMediaQuery, Menu, MenuItem } from '@mui/material';
import Logo from "./logo";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { theme } from "@/app/theme";
import Link from 'next/link';

const TAB_NAMES: string[] = ['About', 'Projects', 'Events', 'Blog'];

export default function Header() {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static">
            <Toolbar sx={{ maxHeight: '1rem', backgroundColor: 'white'}}>
                {isMobile ? <MobileHeaderContents/> : <DesktopHeaderContents/>}
            </Toolbar>
        </AppBar>
    );
}

function DesktopHeaderContents() {
    return (
        <>
            <Logo />
            <Box>
                {TAB_NAMES.map((name, id) => (
                    <Link key={id} href={`/${name.toLowerCase()}`} passHref>
                        <Button component="a" sx={{ marginLeft: '4rem' }}>
                            {name}
                        </Button>
                    </Link>
                ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
        </>
    );
}

function MobileHeaderContents() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        sx: {
                            color: 'inherit',
                            minWidth: '50%',
                        },
                    }
                }}
            >
                {TAB_NAMES.map((name, id) => (
                    <Link key={id} href={`/${name.toLowerCase()}`} passHref>
                        <MenuItem component="a" onClick={handleClose}>
                            {name}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </>
    );
}