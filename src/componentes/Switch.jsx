import { useState } from 'react';
import './Switch.css'


function Switch(props){

    const [power, setPower] = useState(true);
    
    function handlerPower(){
        const interruptor = document.getElementById('box-'+props.name);
        setPower(!power);
        if(power){
            interruptor.classList.add('ON'); 
        }else{
            interruptor.classList.remove('ON');
        }
    }
    return(
        <div id="switch">
            <span id="labelSwitch">{props.name}</span>
            <div id={'box-'+props.name} className='box' onClick={()=>handlerPower()}>
                <div id="button"></div>
            </div>
        </div>
    );
}


export default Switch;