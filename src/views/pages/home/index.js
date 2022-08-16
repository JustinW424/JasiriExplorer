import React from "react";
// import HomeComponent from "./HomeComponent";
import SearchBox from "./SearchBox";
import PriceCardAll from "./PriceCardAll"
import AnalyticTable from "./AnalyticTable";
import VerifiedAssetsTable from "./VerifiedAssetsTable";
import AssetsChart from "./AssetsChart";
import { Grid } from "@mui/material";
import TokenizedAssetsTable from "./TokenizedAssetsTable";
import JasiriRightsNFTTable from "./JasiriRightsNFTTable";

export default function Home() {
  return ( 
    <div className="h-full">
      <SearchBox/>
      <PriceCardAll/>
      <AnalyticTable/>
      <Grid container className="pt-5">
        <Grid item lg={6} className="p-2">
          <VerifiedAssetsTable/>
        </Grid>
        <Grid item lg={6} className="p-2">
          <AssetsChart/>
        </Grid>
      </Grid>
      <TokenizedAssetsTable/>
      <JasiriRightsNFTTable/>
    </div>
  );
}
