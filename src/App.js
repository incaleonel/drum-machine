
import Pad from './componentes/Pad'
import Switch from './componentes/Switch'
import './App.css'
import { useState } from 'react';

function App() {

  const [value,changeValue]= useState(1);

  return (
    <div className="App" id="drum-machine">
      <Pad letra="Q"/>
      <Pad letra="W"/>
      <Pad letra="E"/>
      <Pad letra="A"/>
      <Pad letra="S"/>
      <Pad letra="D"/>
      <Pad letra="Z"/>
      <Pad letra="X"/>
      <Pad letra="C"/>
      <div id="handler">
        <Switch name="Power"/>
        <div id='display'>
          <span id='display-text'></span>
        </div>
        <input id='rango' type="range" min='0' max='1' step='0.01'  onChange={(event)=>changeValue(event.target.value)} value={value}/>
        <Switch name="Bank"/>
      </div>
    </div> 
  );
  
}


document.addEventListener('mousemove',()=>{
    let clip = document.getElementsByTagName('audio');
    let rango= document.getElementById('rango');
    for(let i=0;i<clip.length;i++){
      clip[i].volume=rango.value;
    }
})



export default App;
