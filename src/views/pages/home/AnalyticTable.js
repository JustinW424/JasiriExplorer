import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( name, value, unit ) {
  return { name, value, unit };
}

export default function AnalyticTable() {

  const rows = [
    createData('Block Speed', 4.3, 'sec'),
    createData('Base Unit Fee', 30, '%'),
    createData('Registered Agents', 8365, ''),
    createData('Number of Tokenized Assets', 345345, ''),
    createData('JASIRI rights NFT Sales Volume', 33233, ''),
    createData('JASIRI Market Cap', 3.5 , 'B'),
    createData('Transaction Volume', 12.3, 'M'),
  ];

  return (
    <TableContainer className="main-component rounded-sm">
      <Table aria-label="token analytics table" >
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="pl-8 text-title border-table_border">
                {row.name}
              </TableCell>
              <TableCell align="right" className="pr-8 text-title border-table_border">{row.value}{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
