import { useState } from 'react';
import UserForm from './userForm/UserForm';

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
    <div className="App">
          <div className="container mx-auto">
            <UserForm formData={formData} setFormData={setFormData} />
          </div>
        </div>
  );
}

export default App;
