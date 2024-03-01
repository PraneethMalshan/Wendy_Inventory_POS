import React from "react";
import Sidenav from "../component/Sidenav";
import Box from '@mui/material/Box';
import NavBar from "../component/NavBar";
import Typography from "@mui/material/Typography";

export default function Product() {
    return (
        <>
            <NavBar />
            <Box height={30}/>
            <Box sx={{ display: 'flex' }}>
                <Sidenav/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <h1>Product</h1>
                </Box>
            </Box>

        </>
    )
}