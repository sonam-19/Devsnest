import { useState } from 'react';

import Card from './Card';
import './App.css';

let info = [
    { item: "Pizza", calorie: 256 },
    { item: "Burger", calorie: 165 },
    { item: "Coke", calorie: 20 },
    { item: "Ice Cream", calorie: 40 },
    { item: "Fried Rice", calorie: 90 },
    { item: "Pasta", calorie: 236 },
    { item: "Pani puri", calorie: 26 },
    { item: "French Fries", calorie: 176 },
];


function App() {
  const [state, setState] = useState(info);
//console.log(state);
const deleteState = index => {
  //console.log(index);
  const newState = state.filter((val, idx) => index !== idx);
  setState(newState);
}

  return (
    <div className="App">
      <div className="container">
      {
        state.map((val, idx) => {
          return <Card
            key={idx}
            item={val.item}
            calorie={val.calorie}
            deleteState={deleteState}
            index = {idx} />
        })
        }
        </div>
      
    </div>
  );
}

export default App;