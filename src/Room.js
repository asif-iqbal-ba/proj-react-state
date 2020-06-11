import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let[age, setAge]=useState(24);
    //const state=useState(true);
    //console.log("State=",state);
    function updatelight(){
        console.log("Button Clicked");
        //isLit = !isLit;
        setLit(!isLit);
    }

    const increaseAge = ()=>
    {
        console.log("Increased Age Button Clicked");
        setAge(++age);
    }
  return (
    <div>
      This is Room Component and the Room is {isLit? "Ligth": "Dark"}
      <br/>
      The age is {age};
      <br>
      </br>
      <button onClick={updatelight}>
          T Light
      </button>
      <br/>
      <button onClick={()=>
    {
        console.log("Increased Age Button Clicked");
        setAge(++age);
    }}>
           Age Increased Button
      </button>
    </div>
  );
}

export default Room;
