import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "@/app/theme";
import Header from "@components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CUNY SWE Club",
  description: "A club for future developers, data scientists, and software engineers at CUNY."
};

type props = {
  children: React.ReactNode
}
export default function RootLayout({children}: props) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Header/>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}