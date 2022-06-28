import './Pad.css'


function Pad(props){

    return(
        <div className="drum-pad" id={'tecla-'+props.letra} onClick={()=>reproducir(props.letra)}>
            <audio className="clip" id={props.letra} src={sound[props.letra].tema}/>
            {props.letra}
            
        </div>
    );
}
    document.addEventListener('keydown', (event)=>
                                reproducir(event.key.toUpperCase()), 
                                false);

function reproducir(letra){
    let power = document.getElementById('box-Power');
    let bank = document.getElementById('box-Bank');
    let tecla = document.getElementById('tecla-'+letra);
    let audio = document.getElementById(letra);
    let display = document.getElementById('display-text');
    audio.src = bank.classList.contains('ON') ? sound2[letra].tema:sound[letra].tema;
    if(power.classList.contains('ON')){
        tecla.classList.add('pulsadoON');
        display.innerHTML= bank.classList.contains('ON') ? sound2[letra].name:sound[letra].name;
        audio.pause();
        audio.currentTime = 0;
        audio.play();
        setTimeout(()=>{tecla.classList.remove('pulsadoON')},100);
    }else{
        
        tecla.classList.add('pulsadoOFF');
        setTimeout(()=>{tecla.classList.remove('pulsadoOFF')},100);
    }
    

}



export default Pad;

const sound = {
    Q:{
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        caracter: 'Q',
        name: 'Heater 1'
    },
    W:{   tema: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        caracter: 'W',
        name: 'Heater 2',
    },
    E:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        caracter: 'E',
        name: 'Heater 3',
    },
    A:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        caracter: 'A',
        name: 'Heater 4',
    },
    S:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        caracter: 'S',
        name: 'Clap',
    },
    D:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        caracter: 'D',
        name: 'Open HH',
    },
    Z:{   
    tema: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    caracter: 'Z',
    name: 'Kick n\' Hat',
    },
    X:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        caracter: 'X',
        name: 'Kick',
    },
    C:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        caracter: 'C',
        name: 'Closed HH',
    }
}
const sound2 = {
    Q:{
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        caracter: 'Q',
        name: 'Chord 1'
    },
    W:{   tema: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        caracter: 'W',
        name: 'Chord 2',
    },
    E:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        caracter: 'E',
        name: 'Chord 3',
    },
    A:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        caracter: 'A',
        name: 'Shaker',
    },
    S:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        caracter: 'S',
        name: 'Open HH',
    },
    D:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        caracter: 'D',
        name: 'Closed HH',
    },
    Z:{   
    tema: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    caracter: 'Z',
    name: 'Punchy Kick',
    },
    X:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        caracter: 'X',
        name: 'Side Stick',
    },
    C:{   
        tema: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        caracter: 'C',
        name: 'Snare',
    }
}