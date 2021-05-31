import ProductList from "../components/ProductList";
import React from "react";
import Carose from "../components/Carose";
import { Container, Row, Col } from 'react-bootstrap';
import Testimonials from '../components/Testimonials';
import Ourvalues from '../components/Ourvalues';

export default function Home() {
  return (
    <section>
      <div className="container">

      <div className="h_title"><span>Featured products</span></div>
        

        <Container>
        <section className="wrapper">
          <div className="container-fostrap">
          <div className="h_title"><span>Featured products</span></div>
            <div className="content">
              <Row className="justify-content-md-center">
                
                <ProductList />
              </Row>
              <Row className="justify-content-md-center">
                <Testimonials />
              </Row>
              <Row className="">
                <Ourvalues />
              </Row>
            </div>
            </div>
            </section>
        </Container>

          </div>



    </section>
  );
}
