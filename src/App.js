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

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>


        {/* <Route path='/details/:id'>
          <OfferDetails></OfferDetails>
        </Route> */}
        <PrivateRoute path='/details/:id'>
          <OfferDetails></OfferDetails>
        </PrivateRoute>
        <PrivateRoute path='/my-orders'>
          <MyOrders></MyOrders>
        </PrivateRoute>
        
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
