import { useEffect, useState } from 'react';
import type { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from '../layout/NavBar';

function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  useEffect(() => {
    // Fetching product data from an API
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProductList(data))
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box sx={{minHeight: '100vh', background: darkMode 
        ? 'radial-gradient(circle, #1e3aBa, #111b27)' 
        : 'radial-gradient(circle, #baecf9, #f0f9ff)',
        py: 6
        }}>

        <Container maxWidth="xl" sx={{mt: 14}}>
          <Catalog productList={productList}/>      
        </Container>

      </Box>
      
    </ThemeProvider>
    </>
  )
}

export default App
