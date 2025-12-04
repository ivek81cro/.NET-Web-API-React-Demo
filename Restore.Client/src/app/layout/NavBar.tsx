import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../features/store/store";
import { toggleDarkMode } from "./uiSlice";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
];

const navStyles = {
                      color: 'inherit', 
                      typography: 'h6',
                      textDecoration: 'none',
                      '&:hover': {color: 'grey.500'},
                      '&.active': {color: 'text.secondary'} 
                    };

export default function Navbar() {

  const {isLoading, darkMode} = useAppSelector(state => state.ui);
  const dispach = useAppDispatch();

    return (
      <AppBar position="fixed">
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box display='flex' alignItems='center'>
              <Typography component={NavLink} to='/' sx={navStyles} variant="h6">Restore Client</Typography>

              <IconButton onClick={() => dispach(toggleDarkMode())} sx={{ml: 1}}>
                {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
              </IconButton>
            </Box>
            
            <List sx={{display: 'flex'}}>
              {midLinks.map(({title, path}) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))} 
            </List>

            <Box display='flex' alignItems='center'>
              <IconButton size='large'>
                <Badge badgeContent={4} color='secondary' sx={{color: 'inherit'}}>
                  <ShoppingCart />
                </Badge>
              </IconButton>

              <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path}) => (
                  <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                  >
                    {title.toUpperCase()}
                  </ListItem>
                ))} 
              </List>              
            </Box>

          </Toolbar>
          {isLoading && (
            <Box sx={{width: '100%'}}>
              <LinearProgress color="secondary" />
            </Box>
          )}
      </AppBar>
    )
}