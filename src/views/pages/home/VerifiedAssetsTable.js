import * as React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomText from "views/components/CustomText";

function createData( pair, price, usd_price, change) {
  return { pair, price, usd_price, change };
}

export default function VerifiedAssetsTable() {

  const rows = [
    createData('ALGO/JSR', 17.4, 8.7, 0.08),
    createData('JSR/ALGO', 2.4, 8.7, -0.08),
    createData('USDC/JSR', 8.7, 8.7, 0.08),
    createData('JSR/USDC', 8.7, 8.7, -0.08),
  ];

  return (
    
    <TableContainer className="main-component rounded-sm pt-3">
      <CustomText color="title" size="md">
        VERIFIED ASSETS
      </CustomText>
      <Table aria-label="token analytics table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="text-title border-table_border">PAIR</TableCell>
            <TableCell align="center" className="text-title border-table_border">PRICE</TableCell>
            <TableCell align="center" className="text-title border-table_border">CHANGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.pair}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" className="text-title border-table_border">{row.pair}{row.unit}</TableCell>
              <TableCell align="center" className="text-title border-table_border">{row.price}<br/>${row.usd_price}</TableCell>
              <TableCell align="center" className="text-title border-table_border">{row.change}%&nbsp; {row.change>0? '↑':'↓'} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
