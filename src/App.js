import "./App.css";
import { useState } from "react";
import { recipieAPI } from "./helper";
import {useEffect} from "react";

function App() {
  const [recipieObj, setRecipieObj] = useState([]);
  
const getAllRecipies = () =>{
  fetch(`${recipieAPI}/recipie`)
    .then((res) => res.json())
    .then((data) => {
      setRecipieObj(data);
    });
}
   //To call APi only for one time we have to use useEffect with []
  useEffect((getAllRecipies),[])
  return (
    <div className="App recipie-list-container">
      {recipieObj.map((recipie, index) => (
        <Recipie recipieObj={recipie} />
      ))}
    </div>
  );
}

function Recipie({ recipieObj }) {
  return (
    <div>
      <div className="recipie-container">
        <img src={recipieObj.picture} alt="" className="recipe-image" />
        <p className="recipie-name">{recipieObj.title}</p>
      </div>
    </div>
  );
}
export default App;
