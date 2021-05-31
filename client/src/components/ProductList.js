import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import formatProductPrice from "../utils/formatProductPrice";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container, Row, Col, Card } from 'react-bootstrap';


export default function ProductList() {

  const { data: products, isLoading } = useQuery('Products', () => axios('/api/products').then((res) => res.data.products));

  if (isLoading) return <LoadingSpinner />


  return products.map((product) => (
    <ProductItem key={product.id} product={product} />
  ));
}



function ProductItem({ product }) {

  const trendingProduct = { ...product };

  if (product.trending === true) {
    console.log("Hello");
  }
  console.log(trendingProduct);
  const price = formatProductPrice(product)


  return (




    <Col xs md="6" lg="4" xs="12">
      <Card>
        <Link to={`/${product.id}`}>
          <Card.Img variant="top" src={product.image} className="f_image" width="100px" />

          <div className="card-content">
            <h4 className="card-title">
              {product.name}
            </h4>
            <p className="">
              {product.category}
            </p>
          </div>

          <div className="card-read-more">{price}</div>

        </Link>
      </Card>

    </Col>













  );

}
