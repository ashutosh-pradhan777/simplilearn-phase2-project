import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Add from './components/Add';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
     <Switch>
     <Route exact path= "/"><Header/></Route>
     <Route exact path="/header"><Header/></Route>
     <Route exact path ="/add/:date"><Add/></Route>
     </Switch>
   </Router>
  );
}

export default App;
