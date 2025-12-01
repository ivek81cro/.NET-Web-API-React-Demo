import { useEffect, useState } from 'react';
import type { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {
  
    const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    // Fetching product data from an API
    fetch('https://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProductList(data))
  }, []);
    
  return (
    <>
    <ProductList productList={productList} />
    </>
  )
}