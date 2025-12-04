import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from '../layout/NavBar';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../features/store/store';

function App() {
  const { darkMode } = useAppSelector(state => state.ui);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <NavBar />
    
        <Box sx={{minHeight: '100vh', background: darkMode 
          ? 'radial-gradient(circle, #1e3aBa, #111b27)' 
          : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 3
          }}>
          
          <Container maxWidth="xl" sx={{mt: 14}}>
            <Outlet /> {/* Renders the matched child route component */}
          </Container>
        
        </Box>
        
      </ThemeProvider>
    </>
  )
}

export default App
