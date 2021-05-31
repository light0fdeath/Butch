import Home from "./pages/Home";
import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { QueryClientProvider, QueryClient} from 'react-query';
import Result from "./pages/Result";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Pickles from "./pages/Pickles";
import Spices from "./pages/Spices";
import Meat from "./pages/Meat";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
    <Switch> 
      <Route exact path = "/" component ={Home}></Route>
      <Route exact path="/Meat" component = {Meat} ></Route>
      <Route exact path="/Spices" component = {Spices} ></Route>
      <Route exact path="/Pickles" component = {Pickles} ></Route>
      <Route exact path="/Delivery" component = {Delivery} ></Route>
      <Route exact path="/About" component = {About} ></Route>
      <Route exact path="/Contact" component = {Contact} ></Route>
      <Route path="/Login" component = {Login} ></Route>
      <Route exact path="/Signup" component = {Signup} ></Route>
      <Route exact path = "/result" component ={Result}></Route>
      <Route exact path = "/:productId" component ={Product}></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
