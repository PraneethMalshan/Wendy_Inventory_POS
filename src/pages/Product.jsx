import React from "react";
import Sidenav from "../component/Sidenav";
import Box from '@mui/material/Box';
import NavBar from "../component/NavBar";
import ProductList from "./products/ProductList";

export default function Product() {
    return (
        <>
            <NavBar />
            <Box height={70}/>
            <Box sx={{ display: 'flex' }}>
                <Sidenav/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <ProductList/>
                </Box>
            </Box>

        </>
    )
}