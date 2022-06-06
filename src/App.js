import "./App.css";
import Login from "../src/pages/Login"
import { Routes ,Route} from "react-router-dom"
import Navbar from "../src/components/Navbar/Navbar"
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
     <>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes>
   
     </>
    </div>
  );
}

export default App;
