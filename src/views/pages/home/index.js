import React from "react";
import AnalyticCards from "./AnalyticCards"
import AnalyticTable from "./AnalyticTable";
import VerifiedAssetsTable from "./VerifiedAssetsTable";
import AssetsChart from "./AssetsChart";
import { Grid } from "@mui/material";
import TokenizedAssetsTable from "./TokenizedAssetsTable";
import JasiriRightsNFTTable from "./JasiriRightsNFTTable";
import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
      <ScrollSpy onUpdateCallback={(id)=>console.log(id)} scrollThrottle="50">
        <div id="home">
          <AnalyticCards />
          <AnalyticTable />
          <Grid container className="pt-5">
            <Grid item lg={6} className="pr-2">
              <VerifiedAssetsTable />
            </Grid>
            <Grid item lg={6} className="pl-2">
              <AssetsChart />
            </Grid>
          </Grid>
        </div>
        <div id="transactions">
          <TokenizedAssetsTable />
          <JasiriRightsNFTTable />
        </div>
      </ScrollSpy>
  );
}
