import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import Offers from './Componants/Offers/Offers';
import PrivateRoute from './Componants/PrivateRoute/PrivateRoute';
import SignIn from './Componants/SignIn/SignIn';
import OfferDetails from './Componants/OfferDetails/OfferDetails';
import MyOrders from './Componants/MyOrders/MyOrders';
import AllOrders from './Componants/AllOrders/AllOrders';
import NotFound from './Componants/NotFound/NotFound';
import AddNewOffer from './Componants/AddNewOffer/AddNewOffer';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute path='/details/:id'>
          <OfferDetails></OfferDetails>
        </PrivateRoute>
        <PrivateRoute path='/my-orders'>
          <MyOrders></MyOrders>
        </PrivateRoute>
        <PrivateRoute path='/all-orders'>
          <AllOrders></AllOrders>
        </PrivateRoute>
        <PrivateRoute path='/AddNewOffer'>
          <AddNewOffer></AddNewOffer>
        </PrivateRoute>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
