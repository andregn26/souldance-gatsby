import * as React from "react"
//Material UI
import {
  AppBar,
  Toolbar,
  Box,
  Divider,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Typography,
  useScrollTrigger,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import {
  StyledContainer83,
  StyledContainerSection,
} from "../../helpers/Containers"
import { StyledFlexBetween } from "../../helpers/flexbox"
import { Link } from "gatsby"

const drawerWidth = "100%"
const navItems3 = [
  { linkText: "Formulário", link: "/contactos", linkIndex: 1 },
  { linkText: "teste1", link: "/teste2", linkIndex: 2 },
  { linkText: "teste1", link: "/teste3", linkIndex: 3 },
]

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 0 : 0,
    color: trigger ? "default" : "transparent",
  })
}

export default function NavigationHeader(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems3.map(item => (
          <ListItem
            onClick={handleDrawerToggle}
            key={item.linkIndex}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.linkText} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <CloseIcon onClick={handleDrawerToggle} />
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <ElevationScroll>
        <AppBar component="nav">
          <Toolbar>
            <StyledContainerSection definePadding="0">
              {" "}
              <StyledContainer83 definePadding="0" defineMaxWidth={"1500px"}>
                <StyledFlexBetween defineAlignItems={"center"}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: "block" }}
                  >
                    <Link to="/">SOULDANCE</Link>
                  </Typography>
                  {/* Open drawer Button --> ONLY IN MOBILE */}
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box
                    sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}
                  >
                    {navItems3.map(item => (
                      <Link
                        key={item.linkIndex}
                        to={item.link}
                        activeClassName="a-active"
                      >
                        {item.linkText}
                      </Link>
                    ))}
                  </Box>
                </StyledFlexBetween>
              </StyledContainer83>
            </StyledContainerSection>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
