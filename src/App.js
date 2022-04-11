
import './App.css';

function App() {
  const recipieObj = [
    {
    id:"1",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
  {
    id:"1",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
  {
    id:"2",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
  {
    id:"3",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
  {
    id:"4",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
  {
    id:"5",
    title:"Spaghetti",
    picture:"https://media.istockphoto.com/photos/spaghetti-pasta-with-meatballs-picture-id1298256576"
  },
];
  return (
    <div className="App recipie-list-container">
      {recipieObj.map((recipie,index) => 
      <Recipie recipieObj={recipie}/>)}
      
    </div>
  );
}


function Recipie({recipieObj}){
  
  return(<div>
    <div className="recipie-container">
      <img src={recipieObj.picture} alt="" className="recipe-image" />
      <p className="recipie-name">{recipieObj.title}</p>
    </div>
  </div>)
}
export default App;
