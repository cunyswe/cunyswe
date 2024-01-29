'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,      // not used     // default 0
            sm: 360,    // mobile       // default 600
            md: 768,    // tablet       // default 960
            lg: 992,    // laptop       // default 1280
            xl: 1200    // desktop      // default 1920
        },
    },
});