import './App.css';
import {Routes,Route,Switch} from 'react-router-dom'
import SiginUp from './COMPONENT/SiginUp';
import Login from './COMPONENT/Login';
import FoodFront from './COMPONENT/FoodFront';


function App() {

  return (
    <div>
      <Routes basename="/FoodApp">
         <Switch >
          <Route path='/' element={<SiginUp />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='foodfront' element={<FoodFront />}></Route>
          </Switch>
      </Routes>
    
      
    </div>
  );
}

export default App;
