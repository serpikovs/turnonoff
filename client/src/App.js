import React from 'react';
import './App.css';
import LoginView from './views/LoginView';
import AdminView from './views/AdminView';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <div className="mt-5">
        <AdminView/>
      </div>


    </div>
  );
}

export default App;
