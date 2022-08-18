import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import LOGO from "assets/images/logo.svg";
import PhoneMenuIcon from "assets/images/PhoneMenu.svg";
import CloseIcon from "assets/images/closeIcon.svg";
import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomImage from "views/components/CustomImage";
import CustomText from "views/components/CustomText";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { getGasPrice, loadCouncilData } from "functions/Utility";
import Badge from "@mui/material/Badge";

export default function NavBar({ ...props }) {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const [phoneMenuShow, setPhoneMenuShow] = useState(false);
  const toggleDrawer = (show) => () => {
    setPhoneMenuShow(show);
  };
  const [navs, setNavs] = useState([
    { to: "", label: "Dashboard" },
    { to: "transactions", label: "Transactions" },
    { to: "about_jasiri", label: "About JASIRI" },
  ]);
  const pathname = useLocation().pathname;

  const [active, setActive] = useState({ to: pathname });

  const handleActive = (value = {}) => setActive(value);

  // const onPress = (e) => {
  //   e.preventDefault();
  //   const target = window.document.getElementById(
  //     e.currentTarget.href.split("#")[1]
  //   );

  //   if (target) {
  //     target.scrollIntoView({ behavior: "smooth" });
  //   }else{
  //     window.document.body.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="h-[60px] flex items-center main-component z-50 w-full left-0 top-0 fixed">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CustomImage
              src={LOGO}
              title="JASIRI"
              className="h-13"
            ></CustomImage>
            <CustomText size="lg" className="ml-[-16px]">JASIRI</CustomText>
            <CustomText className="pt-[7px] pl-px" size="[8px]" color="secondary">EXPLORER</CustomText>
          </div>
          <div className="flex items-center">
            <Grid container className="items-center pr-3"
              sx={{ display: { md: "flex", xs: "none" } }}
            >
              {navs.map((item, itemIndex) =>
              (
                <Grid item key={itemIndex}>
                  <Link
                    to={item?.to ?? ""}
                    onClick={() => handleActive(item)}
                  >
                    <div className={
                      active?.to === item?.to && !!item?.to
                        ? "relative active_menu" : "relative main_menu"
                    }>
                      <CustomText className="py-2 px-2">
                        {item?.label ?? ""}
                      </CustomText>
                    </div>
                  </Link>
                </Grid>
              )
              )}
              {/* <Grid item key="home">
                      <a href="#" onClick={(e) => onPress(e)} >
                        <div data-to-scrollspy-id="home" className="relative py-2 px-2 text-title text-xs">
                            Dashboard
                        </div>
                      </a>
                    </Grid>
                    <Grid item key="transactions">
                      <a href="#transactions" onClick={(e) => onPress(e)} >
                        <div data-to-scrollspy-id="transactions" className="relative py-2 px-2 text-title text-xs">
                            Transactions
                        </div>
                      </a>
                    </Grid>
                    <Grid item key="about">
                      <a href="#about_jasiri" onClick={(e) => onPress(e)} >
                        <div data-to-scrollspy-id="about_jasiri" className="relative py-2 px-2 text-title text-xs">
                            About JASIRI
                        </div>
                      </a>
                    </Grid> */}
            </Grid>
            <div className="pl-3">
              <Button
                id="mainnet-btn"
                className="bg-primary text-blacktext text-xs px-3"
                ref={anchorRef}
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                endIcon={<KeyboardArrowDownIcon />} >MAINNET</Button>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom-start"
                transition
                disablePortal={true}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                        >
                          <MenuItem onClick={handleClose}>MAINNET</MenuItem>
                          <MenuItem onClick={handleClose}>TESTNET</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>)}
              </Popper>
            </div>

            <Grid container className="p-2 ml-4"
              sx={{
                display: { xs: 'flex', md: "none" },
                justifyContent: "flex-end"
              }}
            >
              <CustomImage
                src={PhoneMenuIcon}
                onClick={() => {
                  setPhoneMenuShow(!phoneMenuShow);
                  console.log("PhoneMenushow", phoneMenuShow);
                }}
              ></CustomImage>
            </Grid>
          </div>
        </div>
      </Container>
    </div>);
}


