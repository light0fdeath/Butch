import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


export default class Testimonials extends Component {
    render() {
        return (
            <div className="Testimonials">
                <h1>Testimonials Components</h1>

                <div className="testimonials-clean">
                    <Container>
                        <div className="intro">
                            <p> &nbsp;</p>
                            <p className="text-center">Read some of the nicest feedback given by some of our customers.</p>
                        </div>
                        <Row className="people">
                            <Col md={6} lg={4} className="item">
                                <div className="box">
                                    <p className="description">I think they rip you off, they just make up prices on the spot for items without a price tag. Can't complain about the freshness or quality, </p>
                                </div>
                                <div className="author">
                                    <h5 className="name">Juggernaut</h5>
                                    
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="item">
                                <div className="box">
                                    <p className="description">Have tried goatmeat from all suppliers but kathmandu butchery had a best quality meat ever. Thanks for your service KATHMANDU BUTCHERY.</p>
                                </div>
                                <div className="author">
                                    <h5 className="name">Amit A</h5>
                                    
                                </div>
                            </Col>
                            <Col md={6} lg={4} className="item">
                                <div className="box">
                                    <p className="description">Best meat shop in the town, and excellent customer service too. Highly recommended all to try this kind of the shop</p>
                                </div>
                                <div className="author">
                                    <h5 className="name">Deepesh K</h5>
                                    
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
<h1>Testimonials 2</h1>
                <blockquote>
                I think they rip you off, they just make up prices on the spot for items without a price tag. Can't complain about the freshness or quality, but the non priced items are jacked up. Go in there one day and have a look for your self, some of the chicken maryland, marinated chicken drumsticks...marinated chicken drumsticks at $9/kg? Get the fk outta here

                    <span>Juggernaut</span>
                </blockquote>
                <blockquote>
                Have tried goatmeat from all suppliers but kathmandu butchery had a best quality meat ever. Thanks for your service KATHMANDU BUTCHERY.

                    <span>Amit A</span>
                </blockquote>
                <blockquote>
                Best meat shop in the town, and excellent customer service too. Highly recommended.
                    <span>Deepesh K</span>
                </blockquote>
                </div>

                
        )
    }
}