import React from "react";
import Sidenav from "../component/Sidenav";
import NavBar from "../component/NavBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


export default function Dashboard() {
    return (
        <>
            <div className="bgColor">

                <NavBar />
                <Box height={70}/>
                <Box sx={{ display: 'flex'}}>
                    <Sidenav/>
                    <Box component="main" sx={{flexGrow: 1, p: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Stack spacing={2} direction="row" sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                                    {/*<Card sx={{ maxWidth: 345 }}>*/}
                                    <Card sx={{ minWidth: 30 + "%", height: 140 }}>

                                        <CardContent>
                                            <Stack spacing={2} direction="row">
                                                <div className="iconStyle">
                                                    <MonetizationOnIcon/>
                                                </div>

                                                <div className="paddingall">
                                                    <span className="priceTitle">$4385</span>
                                                    <br/>
                                                    <span className="priceSubTitle">Total Inventory Value</span>
                                                </div>
                                            </Stack>
                                        </CardContent>

                                    </Card>
                                    {/*<Card sx={{ maxWidth: 345 }}>*/}
                                    <Card sx={{ minWidth: 30 + "%", height: 140 }}>

                                        <CardContent>
                                            <Stack spacing={2} direction="row">
                                                <div className="iconStyle">
                                                    <MonetizationOnIcon/>
                                                </div>

                                                <div className="paddingall">
                                                    <span className="priceTitle">$4385</span>
                                                    <br/>
                                                    <span className="priceSubTitle">Total Inventory Value</span>
                                                </div>
                                            </Stack>
                                        </CardContent>

                                    </Card>
                                </Stack>
                            </Grid>
                            {/*<Grid item xs={4}>*/}

                            {/*</Grid>*/}
                        </Grid>

                        <Box height={20}/>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card sx={{ height: 60 + "vh" }}>

                                    <CardContent>

                                    </CardContent>

                                </Card>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </div>
        </>
    )
}