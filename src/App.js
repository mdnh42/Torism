import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
