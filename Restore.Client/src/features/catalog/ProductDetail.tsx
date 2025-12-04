import { Link, useParams } from "react-router-dom"
import { Button, Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useFetchProductDetailsQuery } from "./catalogApi";

export default function ProductDetail() {

  const { id } = useParams();
  const {data: product, isLoading} = useFetchProductDetailsQuery(id ? +id : 0);

  if(!product || isLoading) return <div>Loading...</div>;

  const productDetails =[
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity in Stock', value: product.quantityInStock.toString() }
  ]

  return (
    <Grid container spacing={3} maxWidth="lg" sx={{mx: 'auto'}}>
      <Grid size={12}>
        <Button 
          component={Link} 
          to="/catalog" 
          variant="contained" 
          color="primary"
          startIcon={<ArrowBack />}
          sx={{mb: 1, borderRadius: '15px'}}
        >
            Back to Products
        </Button>
      </Grid>  

      <Grid size={6}>
        <img 
          src={product?.pictureUrl} 
          alt={product?.name}
          style={{ width: '100%', borderRadius: '12px' }}
          
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb: 2}} />
        <Typography variant="h4" color="secondary.main">${(product.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{'& td': {fontSize: '1rem'}}}>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField 
              variant="outlined"
              type="number"
              label="Quantity"
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={6}>
            <Button 
              sx={{height: '55px'}}
              color="primary"
              variant="contained"
              size="large"
              fullWidth>
                Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}