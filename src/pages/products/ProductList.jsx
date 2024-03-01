import * as React from 'react';
import {useState,useEffect} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Autocomplete, Button, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Swal from "sweetalert2";

export default function ProductList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [rows, setRows] = useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ padding: "20px" }}
            >
             Products List
            </Typography>
            <Divider />

            <Box height={10}/>
                <Stack direction="row" spacing={2} className="my-2 mb-2">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={rows}
                        sx={{width: 300}}
                        // onChange={(e, v) => filterData(v)}
                        getOptionLabel={(rows) => rows.name || ""}
                        renderInput={(params) => (
                            <TextField {...params} size="small" label="Search..." />
                        )}
                    />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                    <Button variant="contained" endIcon={<AddIcon/>}>
                        Add New Product
                    </Button>
                </Stack>

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Product Name
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                SKU
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Category
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Brand
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Price
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Unit
                            </TableCell>
                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                QTY
                            </TableCell>

                            <TableCell align="left" style={{ minWidth: "100px" }}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1}>

                                        <TableCell key={row.id} align="left">
                                            {row.name}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.sku}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.category}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.brand}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.price}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.unit}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.qty}
                                        </TableCell>

                                        <TableCell align="left">
                                            <Stack spacing={2} direction="row">
                                                <EditIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "blue",
                                                        cursor: "pointer",
                                                    }}
                                                    className="cursor-pointer"
                                                    // onClick={() => editUser(row.id)}
                                                />

                                                <DeleteIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "darkred",
                                                        cursor: "pointer",
                                                    }}
                                                    // onClick={() => {
                                                    //     deleteUser(row.id);
                                                    // }}
                                                />
                                            </Stack>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
