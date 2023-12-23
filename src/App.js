import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SiginUp from './COMPONENT/SiginUp';
import Login from './COMPONENT/Login';
import FoodFront from './COMPONENT/FoodFront';


function App() {

  return (
    <div>
      <Router basename="/FoodApp">
         <Switch >
          <Route path='/' element={<SiginUp />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='foodfront' element={<FoodFront />}></Route>
          </Switch>
      </Router>
    
      
    </div>
  );
}

export default App;
