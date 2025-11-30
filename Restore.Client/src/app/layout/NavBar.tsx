import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: Props) {

    return (
      <AppBar position="fixed">
          <Toolbar>
              <Typography variant="h6">Restore Client</Typography>
              <IconButton onClick={toggleDarkMode}>
                {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
              </IconButton>
          </Toolbar>
      </AppBar>
    )
}