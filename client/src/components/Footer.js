import React, { Component } from 'react';
import './assets/css/style.css';



export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="footer">
                    <div className="footer-left col-md-4 col-sm-12">
                        <p className="about">
                            <span> About the company</span> Kathmandu butchery has been running a business in couple of sectors like wholesale meat supplier and supplier of different other Nepalese product like pickle, spices and many more. They are into the business since 2018. 
    </p>
                        <div className="icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="footer-center col-md-4 col-sm-12">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span> 36 Penshurst St, Penshurst </span> NSW 2222</p>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <p> +61 0423072634</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="#"> info.kathmandubutchery@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right col-md-4 col-sm-12">
                        <h2> Kathmandu<span> Butchery</span></h2>
                        <p className="menu">
                            <a href="#"> Home</a> | 
                            <a href="#"> Our Products</a> |  
                            <a href="#"> Delivery</a> | 
                            <a href="#"> About Us</a> | 
                            <a href="#"> Contact Us</a>
                        </p>
                        <p className="name"> Kathmandu Butchery &copy; 2011</p>
                    </div>
                </footer>
            </div>
        )
    }
}