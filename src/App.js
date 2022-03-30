import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import MealDetails from './component/MealDetails/MealDetails';
import Meals from './component/Meals/Meals';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/meals' element={<Meals></Meals>}></Route>
        <Route path='/meal/:mealId' element={<MealDetails></MealDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
