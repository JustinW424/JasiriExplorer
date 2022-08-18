import React, { useState, useEffect } from "react";
import { Container, Divider, Grid } from "@mui/material";
import CustomText from "views/components/CustomText";
import CustomImage from "views/components/CustomImage";
import { Link, useLocation } from "react-router-dom";

export default function Footer({ ...props }) {
  const pathname = useLocation().pathname;

  const [active, setActive] = useState({ to: pathname });
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const handleActive = (value = {}) => setActive(value);
  return (
    <div className="bg-[#18181A] pt-12 pb-24 mt-9" id="about_jasiri">
      <Container sx={{ maxWidth: 1200 }}>
        <Grid container alignItems="flex-start" justifyContent="center">
          <Grid item lg={4.8}>
            <div className="flex items-end ">
              <CustomText color="white" className="text-[45px] leading-10">JASIRI</CustomText>
              <CustomText color="primary" className="text-[22px] leading-6">EXPLORER</CustomText>
            </div>
            <CustomText color="white" align="left" size="xs" className=" mt-6 text-footer_text leading-8">A crypto-economic primitive powering fast, below-zero micropayments, and unlocking dead capital from real-world assets and commodities in one piece of novel, robust infrastructure</CustomText>  

          </Grid>
          <Grid item lg={2.4}>
            <div className="flex items-end h-[40px] justify-center">
              <CustomText color="white" size="lg">Community</CustomText>
            </div>
            <a href="#">
              <CustomText color="white" size="xs" className="mt-6 leading-8">Twitter</CustomText>
            </a>
            <a href="#">
              <CustomText color="white" size="xs" className="leading-8">Linkedin</CustomText>
            </a>
            <a href="#">
              <CustomText color="white" size="xs" className="leading-8">Discord</CustomText>
            </a>
          </Grid>
          <Grid item lg={2.4}>
            <div className="flex items-end h-[40px] justify-center">
              <CustomText color="white" size="lg">Tools</CustomText>
            </div>
              <CustomText color="white" size="xs" className="mt-6 leading-8">Devoper API</CustomText>
              <CustomText color="white" size="xs" className="leading-8">JASIRI wallet</CustomText>
              <CustomText color="white" size="xs" className="leading-8">Tokens</CustomText>
          </Grid>
          <Grid item lg={2.4}>
            <div className="flex items-end h-[40px] justify-center">
              <CustomText color="white" size="lg">Need Help?</CustomText>
            </div>
              <CustomText color="white" size="xs" className="mt-6 leading-8">Contacts us</CustomText>
          </Grid>
        </Grid>
        <div className="mt-12">
          <CustomText color="white" size="xs" className="leading-8">JASIRI Protocol is a product of Safariblocks Ltd.</CustomText>
          <CustomText color="white" size="xs" className="leading-8 flex justify-center items-center"><span className="text-primary text-xl">©</span>Safariblocks Ltd. | All Rights Reserved Worldwide</CustomText>
        </div>
      </Container>
    </div>
  );
}
