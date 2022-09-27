import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <HexagonOutlinedIcon />
            <SignalCellularAltOutlinedIcon
              fontSize="1"
              sx={{ position: "absolute", top: 15, left: 19 }}
            />
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Estimates" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Invoices" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Recurring Invoices" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="customers Statements" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Customer" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText secondary="Product & Services" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Purchases" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DashboardCustomizeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Accounting" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SignalCellularAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
      <Divider />

      <List>
        {" "}
        <ListItemButton>
          <ListItemIcon>
            <HexagonOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </React.Fragment>
  );
}
