import { useState } from 'react';
import './App.css';
import UserForm from './userForm/UserForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Details from './userForm/Details';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:  "",
    gender:  "",
    address:  "",
    bio:  ""
});

  return (
      <Router>
        <div className="App">
          <div className="container mx-auto">
            <Switch>
              <Route exact path="/user-form/UserForm">
                <UserForm formData={formData} setFormData={setFormData} />
              </Route>
              <Route path='/user-form/details' exact>
                <Details formData={formData} setFormData={setFormData}/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
