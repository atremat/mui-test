import { ElectricCar, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  //   display: "flex",
  //   justifyContent: "space-between",
  // }));

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  // const Icons = styled(Box)(({ theme }) => ({
  //   //display:"none",
  //   display: { xs: "none", sm: "flex" },
  //   gap: "20px",
  //   alignItems: "center",
  //   // [theme.breakpoints.up("sm")]: {
  //   //   display: "flex",
  //   // },
  // }));

  // const UserBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   gap: "10px",
  //   alignItems: "center",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // }));

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            site
          </Typography>

          <ElectricCar sx={{ display: { xs: "block", sm: "none" } }} />

          <Search>
            <InputBase placeholder="search..." />
          </Search>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="error">
              <Mail color="action" />
            </Badge>

            <Badge badgeContent={2} color="error">
              <Notifications color="action" />
            </Badge>

            <Avatar
              sx={{ width: "30px", height: "30px" }}
              onClick={handleClick}
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=240&w=320"
            />
          </Box>

          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              onClick={handleClick}
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=240&w=320"
            />
            <Typography variant="span">Borys Johnsoniuk</Typography>
          </Box>
        </Toolbar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Navbar;
