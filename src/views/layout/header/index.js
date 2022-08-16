import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import LOGO from "assets/images/logo.png";
import PhoneMenuIcon from "assets/images/PhoneMenu.svg";
import CloseIcon from "assets/images/closeIcon.svg";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomImage from "views/components/CustomImage";
import CustomText from "views/components/CustomText";
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { getGasPrice, loadCouncilData } from "functions/Utility";
import Badge from "@mui/material/Badge";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: '12px',
        color: 'rgba(24, 24, 26, 0.9)',
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Header({ ...props }) {

  const [anchorEl, setAnchorEl] = useState(null);
  const mainnetOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [phoneMenuShow, setPhoneMenuShow] = useState(false);
  const toggleDrawer = (show) => () => {
    setPhoneMenuShow(show);
  };
  const [navs, setNavs] = useState([
    { to: "/#", label: "Dashboard" },
    { to: "/#transactions", label: "Transactions" },
    { to: "/#about", label: "About JASIRI" },
  ]);

  const correctNet = useSelector((state) => state?.app?.isCorrectNet ?? false);
  const pathname = useLocation().pathname;

  const [active, setActive] = useState({ to: pathname });

  const handleActive = (value = {}) => setActive(value);
  
  return (
    <div className="h-[64px] flex items-center main-component">
      {phoneMenuShow !== true ? (
        <Container sx={{ maxWidth: 1200 }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
                <CustomImage
                  src={LOGO}
                  title="JASIRI"
                  className="h-14"
                ></CustomImage>
                <CustomText size="lg">JASIRI</CustomText>
                <CustomText className="pt-[7px] pl-px"  color="secondary" size="[8px]">EXPLORER</CustomText>
            </div>
            <div className="flex items-center">
              <Grid className="items-center pr-3"
                sx={{ display: { md: "flex", xs: "none" } }}
                >
                {navs.map((item, itemIndex) =>
                   (
                    <Grid item key={itemIndex} className="py-2 px-2">
                      <Link
                        to={(item?.to ?? "")}
                        onClick={() => handleActive(item)}
                      >
                        <CustomText
                          // transparent={
                          //   active?.to === item?.to && !!item?.to
                          //     ? false
                          //     : true
                          // }
                        >
                          {item?.label ?? ""}
                        </CustomText>
                      </Link>
                    </Grid>
                  )
                )}
              </Grid>
              <div className="pl-3">
              <Button
                id="mainnet-btn"
                className="bg-primary text-blacktext text-xs"
                aria-controls={mainnetOpen ? 'mainnet-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={mainnetOpen ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                MAINNET
              </Button>
              <StyledMenu
                id="mainnet-menu"
                MenuListProps={{
                  'aria-labelledby': 'mainnet-btn',
                }}
                anchorEl={anchorEl}
                open={mainnetOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  MAINNET
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  TESTNET
                </MenuItem>
              </StyledMenu>      
              </div>
              <Grid container
                className="p-2 ml-4"
                sx={{
                  display: {xs: 'flex', md: "none" },
                  justifyContent: "flex-end",
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
      ) : null}

      {phoneMenuShow === true ? (
        <div className="fixed top-0 w-full h-full">
          <div className="fixed w-full bg-blackmenu">
            <div className="flex justify-end py-3 pr-4">
              <CustomImage
                src={CloseIcon}
                className="h-8"
                onClick={toggleDrawer(false)}
              ></CustomImage>
            </div>
            {navs.map((item, itemIndex) =>
              item.badge ? (
                <div
                  className="py-4 mx-4 border-b border-blue_gray border-opacity-10"
                  key={itemIndex}
                >
                  <Badge variant="dot" color="primary">
                    <Link
                      to={item?.to ?? "#"}
                      onClick={() => {
                        handleActive(item);
                        setPhoneMenuShow(!phoneMenuShow);
                      }}
                    >
                      <CustomText
                        align="left"
                        transparent={true}
                        bold={active?.to === item?.to && !!item?.to}
                        size="lg"
                      >
                        {item?.label ?? ""}
                      </CustomText>
                    </Link>
                  </Badge>
                  {/* <CustomImage src={border} className="w-full px-1 py-1"></CustomImage> */}
                </div>
              ) : (
                <div
                  className="py-4 mx-4 border-b border-blue_gray border-opacity-10"
                  key={itemIndex}
                >
                  <Link
                    to={item?.to ?? "#"}
                    onClick={() => {
                      handleActive(item);
                      setPhoneMenuShow(!phoneMenuShow);
                    }}
                  >
                    <CustomText
                      align="left"
                      transparent={true}
                      bold={active?.to === item?.to && !!item?.to}
                      size="lg"
                    >
                      {item?.label ?? ""}
                    </CustomText>
                  </Link>
                  {/* <CustomImage src={border} className="w-full px-1 py-1"></CustomImage> */}
                </div>
              )
            )}
          </div>
        </div>
      ) : // </Drawer>
      null}
    </div>
  );
}


