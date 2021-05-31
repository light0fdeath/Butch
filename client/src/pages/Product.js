// @ts-nocheck
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import formatProductPrice from "../utils/formatProductPrice";
import AddToCart from "../components/AddToCart";
import { Col, Row, Container, Button} from 'react-bootstrap';


export default function Product() {

  const { productId } = useParams();

  const { data: product, isLoading, isError, error } = useQuery(["Product", productId], () => axios(`/api/products/${productId}`).then(res => res.data.product))


  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>{error.message}</div>

  console.log(error)
  console.log(product);

  const price = formatProductPrice(product)

  return (
    <section >
      


      <Container className="product_details">
        <Row>
          <Col lg={8} sm={8} xs={12}><img alt={product.name} src={product.image} /></Col>
          <Col sm={4} xs={12}>
            <div><h2>{product.name}</h2></div>
            <div>{product.description_long}</div>
            <p></p>
            <div><Button variant="primary">Add to Cart</Button>{' '}</div>
            </Col>
        </Row>
        
      </Container>

    </section>
  );
}
