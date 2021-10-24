import { FacilityBox } from './features/facility-box/FacilityBox';
import { AddFacility } from './features/add-facility/AddFacility';
import { AppNavBar } from './features/app-bar/AppBar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <AppNavBar />
      <Switch>
        <Route exact path='/'>
          <FacilityBox />
        </Route>
        <Route path='/add-facility'>
          <AddFacility />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
