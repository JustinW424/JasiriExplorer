import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import CustomText from "views/components/CustomText";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from "react-router-dom";

function createData( NAME, TYPE, COMMITTMENT_USD, COMMITTMENT, TIME_TOKENIZED, HASHID, ONSALE) {
  return { NAME, TYPE, COMMITTMENT_USD, COMMITTMENT, TIME_TOKENIZED, HASHID, ONSALE};
}

export default function TokenizedAssetsTable() {

  const rows = [
    createData('ALGO', 'DATRTRATSR..USIU', 256, 4, "6secs ago", 5265372589, 'TRUE'),
    createData('ALGO', 'DATRTRATSR..USIU', 256, 4, "6secs ago", 5265372589, 'TRUE'),
    createData('ALGO', 'DATRTRATSR..USIU', 256, 4, "6secs ago", 5265372589, 'TRUE'),
    createData('ALGO', 'DATRTRATSR..USIU', 256, 4, "6secs ago", 5265372589, 'TRUE'),
    createData('ALGO', 'DATRTRATSR..USIU', 256, 4, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
    createData('JSR', 'DATRTRATSR..USIU', 256, 10, "6secs ago", 5265372589, 'TRUE'),
  ];

  return (
    <div className="mt-4">
      <CustomText size="xs" className="pl-8 py-4" align="left">Recent Transactions</CustomText>
      <TableContainer className="main-component rounded-sm">
        <Grid container alignItems={'center'} className="p-2">
          <Grid item lg={3}>
              <CustomText size="xs">TOKENIZED ASSETS</CustomText>
          </Grid>
          <Grid item lg={6}>
            <div className="rounded flex items-center border-table_border border">
              <div className="p-2 h-full flex items-center justify-center">
                <SearchIcon />
              </div>
              <InputBase className="w-full flex-1 text-title" placeholder="Search for transactions and ID"/>
            </div> 
          </Grid>
          <Grid item lg={3} className="flex justify-center">
            <Link to="tokenized_assets" >
              <CustomText size="[10px]" className="rounded bg-[#3BA18E] py-2 px-10">View Full Transaction</CustomText>
            </Link>
          </Grid>
        </Grid>
        <Table aria-label="token analytics table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">ASSET NAME</TableCell>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">ASSET TYPE</TableCell>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">COMMITTMENT</TableCell>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">TIME TOKENIZED</TableCell>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">HASHID</TableCell>
              <TableCell align="center" className="text-title border-0 bg-[#3BA18E]">ONSALE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" className="text-title border-table_border">{row.NAME}</TableCell>
                <TableCell align="center" className="text-title border-table_border">{row.TYPE}</TableCell>
                <TableCell align="center" className="text-title border-table_border">{row.COMMITTMENT_USD}USD<br/>${row.usd_price}{row.NAME}</TableCell>
                <TableCell align="center" className="text-title border-table_border">{row.TIME_TOKENIZED}</TableCell>
                <TableCell align="center" className="text-title border-table_border">{row.HASHID}</TableCell>
                <TableCell align="center" className="text-title border-table_border">{row.ONSALE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}




