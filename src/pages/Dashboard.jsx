import React from "react";
import Sidenav from "../component/Sidenav";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Dashboard() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidenav/>

                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <h1>Dashboard</h1>
                </Box>
            </Box>

        </>
    )
}