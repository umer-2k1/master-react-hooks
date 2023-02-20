import Navbar from "./components/Home/Navbar";
import RegistrationForm from "./components/useStateHook/RegistrationForm";
import RefHook from "./components/useRefHook/RefHook";
import Counter from "./useReducer/Counter";
import Memo from "./components/useMemo/Memo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    
    <>


    <Router>
      <Routes>
<Route path='/' element={<Navbar/>} />
<Route path='/reg' element={<RegistrationForm/>} />
<Route path='/ref' element={<RefHook/>} />
<Route path='/counter' element={<Counter/>} />
<Route path='/memo' element={<Memo/>} />

      </Routes>


 
    </Router>

    </>


  );
}

export default App;
