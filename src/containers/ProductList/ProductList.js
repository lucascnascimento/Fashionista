import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../store/modules/products/actions";

import api from "../../services/api";

import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

import { Container, Grid } from "./styles";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get();
      setProductList(response.data);
      dispatch(loadProducts(response.data));
      setLoading(false);
    }

    fetchData();
  }, [dispatch]);

  return (
    <Container>
      <div>Moda Feminina: {productList.length} items</div>
      {loading ? (
        <Loading />
      ) : (
        <Grid>
          {productList.map((product) => (
            <ProductCard data={product} key={uniqid()} />
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;
