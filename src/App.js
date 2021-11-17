import Rooms from './pages/Rooms'
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  return (
  <>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='rooms' element={<Rooms/>} />
          <Route path="/single-rooms/:slug" element={<SingleRoom/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
  </>
  );
}

export default App;
