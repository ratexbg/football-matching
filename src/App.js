import './App.css';
import Player from './Components/Player';
import Field from './Components/Field';
import { useState, useEffect } from 'react'
import Login from "./Components/Login";

// import Rating from './Components/Rating';

// import logo from './Components'


//const hOne = 'testing';






function App() {
  // const img= require('./a.jpg');

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'http://localhost:5001/players?_limit=5',
      ).then(response => response.json())
        .then(data => setData(data));
    };
    fetchData();
  }, []);


  


  return (
    <div className="App">


  <Login />



      <div className="TeamOne">
        <h4>Team 1:</h4>

        {data.map(item => (
          <Player key={item.id} name={item.name} rate={item.rate}
            role={item.role} />
        ))}

      </div>




      <div className="Field">
        <h1>16.10.2021 </h1>
        <h1>12:00h</h1>
        <h1>Price: 5$</h1>
        <h1>-------</h1>
        <h4>Refer:</h4>
        {/* <Player /> */}
        <Field />
      </div>




      <div className="TeamTwo">
        <h4>Team 2:</h4>
        {data.map(item => (
          <Player key={item.id} name={item.name} rate={item.rate}
            role={item.role} />
        ))}
      </div>


      {/* <Rating/> */}

    </div>

  );
}

export default App;
