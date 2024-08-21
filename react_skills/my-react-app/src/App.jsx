import React from 'react';
import UserCard from './components/userCard/userCard';
import axios from 'axios';
import {useState} from 'react';

import User from './components/user';
import Counter from './components/counter/counter';

import "./App.css";


function App() {
  const [employee, setEmployee] = useState(null)
  const getEmployee = () => {
    // Send the request
    axios
      .get('https://randomuser.me/api?nat=en')
      // Use this data to update the state
      .then((response) => {
        setEmployee(response.data.results[0]);
      });
  };
  return (
    <><div className="App">
    {employee &&
      <UserCard
        firstname={employee.name.first}
        lastname={employee.name.last}
        image={employee.picture.large}
        email={employee.email} />}
    <button onClick={getEmployee}>click</button>
  </div><div>
      <User name="jason" />
      <Counter title="Counter App" />
    </div></>
  );
}

export default App;
