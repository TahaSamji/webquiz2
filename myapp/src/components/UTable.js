import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UTable = ({rowap,data}) => {
    console.log("this is faq", rowap)
    console.log("this is faq", data)
 

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Wallet ID</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Transaction Type</TableCell>
            <TableCell>Transaction Date</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>By Admin</TableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {rowap.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.wallet_id}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.transaction_type}</TableCell>
              <TableCell>{row.transaction_date}</TableCell>
              <TableCell>{row.order_id}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.by_admin}</TableCell>

              
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UTable;
