import React, { useState } from "react";
import CustomText from "views/components/CustomText";
import { Grid } from "@mui/material";

export default function PriceCardAll({ icon = "" }) {
  const [unlockedCapital, setUnlockedCapital] = useState(938920.9738);
  const [unlockedCapitalUSD, setUnlockedCapitalUSD] = useState(803994003);
  const [lockedValue, setLockedValue] = useState(8297720);
  const [assetValue, setAssetValue] = useState(8631689);
  const [accounts, setAccounts] = useState(176829);
  const [jasiriPrice, setJasiriPrice] = useState(8.76);

  return (
    <div
      className={`  h-full w-full `}
    >
      <div className="pt-5">
        <Grid container>
          <Grid item lg={2.4} className="p-2">
            <div className="main-component rounded-sm h-[110px] px-2 pt-4">
              <CustomText size="xs" className="text-center">
                Total Capital Unlocked
              </CustomText>
              <CustomText className="text-[22px] pt-4" color="primary" bold="bold">
                {unlockedCapital}JSR
              </CustomText>

              <CustomText color="primary" size="sm" className="pt-2">
                ${unlockedCapitalUSD}
              </CustomText>
            </div>
          </Grid>

          <Grid item lg={2.4} className="p-2">
            <div className="main-component rounded-sm h-[110px] px-2 pt-4">
              <CustomText size="xs">
                Total Value Locked
              </CustomText>
              <CustomText className="text-[22px] pt-4" color="primary" bold="bold">
                ${lockedValue}
              </CustomText>
            </div>
          </Grid>

          <Grid item lg={2.4} className="p-2">
            <div className="main-component rounded-sm h-[110px] px-2 pt-4">
              <CustomText size="xs">
              Total Asset Base Value
            </CustomText>
            <CustomText className="text-[22px] pt-4" color="primary" bold="bold">
              ${assetValue}
            </CustomText>
            </div>
          </Grid>

          <Grid item lg={2.4} className="p-2">
            <div className="main-component rounded-sm h-[110px] px-2 pt-4">
              <CustomText size="xs">
                Accounts Holding Jasiri
              </CustomText>
              <CustomText className="text-[22px] pt-4" color="primary" bold="bold">
                {accounts}
              </CustomText>
            </div>
          </Grid>

          <Grid item lg={2.4} className="p-2">
            <div className="main-component rounded-sm h-[110px] px-2 pt-4">
              <CustomText size="xs">
                Total Capital Unlocked
              </CustomText>
              <CustomText className="text-[22px] pt-4" color="primary" bold="bold">
                ${jasiriPrice} <span className="text-sm text-title">↑</span> <span className="text-[10px]">1.89%</span>
              </CustomText>

              <CustomText size="xs" color="white" bold="bold" className="pt-1">
                24h Vol:<span className="text-primary">$2.3M</span> &nbsp;&nbsp;&nbsp;Mcap: <span className="text-primary">$19M</span>
              </CustomText>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
