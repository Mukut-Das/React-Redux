import logo from './logo.svg';
import './App.css';
import User from './user';
import Home from "./components/Home"
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action';

function App() {
  const data={
    name:"I-phone",
    price:30000,
    color:"Red"
  }
  const dispatch=useDispatch();
  const handleAddToCart=()=>{
    dispatch(addToCart(data))
  }
  return (
    <div className="App">
        
       <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

export default App;
