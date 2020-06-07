import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

import api from "../../services/api";

import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

import { Container, Grid } from "./styles";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get();
      setProductList(response.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <div>{productList.length} items</div>
      <Grid>
        {loading ? (
          <Loading />
        ) : (
          productList.map((product) => (
            <ProductCard data={product} key={uniqid()} />
          ))
        )}
      </Grid>
    </Container>
  );
}

export default ProductList;
