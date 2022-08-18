import React, { useState } from "react";
import CustomText from "views/components/CustomText";
import { Grid } from "@mui/material";

export default function AnalyticCards({ icon = "" }) {
  const [unlockedCapital, setUnlockedCapital] = useState(938920.9738);
  const [unlockedCapitalUSD, setUnlockedCapitalUSD] = useState(803994003);
  const [lockedValue, setLockedValue] = useState(8297720);
  const [assetValue, setAssetValue] = useState(8631689);
  const [accounts, setAccounts] = useState(176829);
  const [jasiriPrice, setJasiriPrice] = useState(8.76);

  return (
    <div className="py-5" id="dashboard">
      <Grid container>
        <Grid item lg={2.4} className="pr-1.5">
          <div className="main-component rounded-sm h-[110px] px-2 pt-4">
            <CustomText size="xs" className="text-center">
              Total Capital Unlocked
            </CustomText>
            <CustomText className="pt-2" size={"[22px]"} color="primary" bold="bold">
              {unlockedCapital}JSR
            </CustomText>

            <CustomText color="primary" size="sm">
              ${unlockedCapitalUSD}
            </CustomText>
          </div>
        </Grid>

        <Grid item lg={2.4} className="px-1.5">
          <div className="main-component rounded-sm h-[110px] px-2 pt-4">
            <CustomText size="xs">
              Total Value Locked
            </CustomText>
            <CustomText className="pt-2" size={"[22px]"} color="primary" bold="bold">
              ${lockedValue}
            </CustomText>
          </div>
        </Grid>

        <Grid item lg={2.4} className="px-1.5">
          <div className="main-component rounded-sm h-[110px] px-2 pt-4">
            <CustomText size="xs">
            Total Asset Base Value
          </CustomText>
          <CustomText className="pt-2" size={"[22px]"} color="primary" bold="bold">
            ${assetValue}
          </CustomText>
          </div>
        </Grid>

        <Grid item lg={2.4} className="px-1.5">
          <div className="main-component rounded-sm h-[110px] px-2 pt-4">
            <CustomText size="xs">
              Accounts Holding Jasiri
            </CustomText>
            <CustomText className="pt-2" size={"[22px]"} color="primary" bold="bold">
              {accounts}
            </CustomText>
          </div>
        </Grid>

        <Grid item lg={2.4} className="pl-1.5">
          <div className="main-component rounded-sm h-[110px] px-2 pt-4">
            <CustomText size="xs">
              Total Capital Unlocked
            </CustomText>
            <CustomText className="pt-2" size={"[22px]"} color="primary" bold="bold">
              ${jasiriPrice} <span className="text-sm text-title">↑</span> <span className="text-[10px]">1.89%</span>
            </CustomText>

            <CustomText size="xs" color="white" bold="bold">
              24h Vol:<span className="text-primary">$2.3M</span> &nbsp;&nbsp;&nbsp;Mcap: <span className="text-primary">$19M</span>
            </CustomText>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
