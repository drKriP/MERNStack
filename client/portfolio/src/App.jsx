import './App.css';
import { useState, useEffect } from 'react';

//functions
import getTest from './functions/test';
function App() {
  const [data, setData] = useState('Hello Welcome to Portfolio');

  useEffect(() => {
    getTest().then((res) => {
      setData(res.message);
    }).catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
