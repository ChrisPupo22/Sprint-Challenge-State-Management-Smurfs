import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Smurf from './smurf';
import { smurfContext } from '../context/smurfContext';

import "./App.css";


function App() {
  const [smurf, setSmurf] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    setSmurf({name:'', age: '', height: ''});
    Axios.get('http://localhost:3333/smurfs')
    .then(res => {
      setData(res.data)
    })
  }, []);


  console.log(data);


    return (
      <smurfContext.Provider value={data}>
        <div className="App">
          <h1>ITS WORKING</h1>
          <Smurf /> 
          {data.map(item => {
            return <div>
              <h2>name: {item.name} </h2>
              <h2>age: {item.age} </h2>
              <h2>height: {item.height} </h2>
            </div>
          })}
        </div>
      </smurfContext.Provider>
    );
  }


export default App;
