import React from 'react'
import styled from 'styled-components'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Container = styled.div`
    background-color: white;
    height: 450px;
    width: 1020px;
    border-radius: 20px;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    margin: 15px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`
const DataContainer = styled.div`
    
`
function createData(name, date, calories, fat, carbs, protein) {
    return { name, date, calories, fat, carbs, protein };
}

const rows = [
    createData('Juan Dela Cruz', "Jan-12", "IT", "SL", "NA", "PENDING"),
    createData('Jayme Lanister', "Jan-12","CS", "SL", "NA", "PENDING"),
    createData('Arya Stark',"Jan-12", "FIN", "SL", "NA", "PENDING"),
    createData('Ned Stark', "Jan-12","IT", "SL", "NA", "PENDING"),
    createData('Jon Snow', "Jan-12","IT", "SL", "NA", "APPROVED"),
];

const Leaves = (props) => {
    return (
        <Container>
            <DataContainer>
                <TextContainer>
                    <p style={{ color: "#8d89b4" }}>{props.title}</p>
                    <h1 style={{ fontSize: "35px", fontWeight: "500" }}>{props.data}</h1>
                </TextContainer>

                <TableContainer>
                    <Table sx={{ minWidth: 950 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Department</TableCell>
                                <TableCell align="right">Leave Type</TableCell>
                                <TableCell align="right">Reason</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DataContainer>
        </Container>

    )
}

export default Leaves