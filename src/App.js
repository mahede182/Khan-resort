import Rooms from './pages/Rooms'
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'
import './App.css';
import {
  Route,
  Switch
} from "react-router-dom";
import Navbar from './component/Navbar';

function App() {
  // here used react-router-dom -v5.3.0
  return (
  <>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route component={Error}/>
        </Switch>
  </>
  );
}

export default App;
