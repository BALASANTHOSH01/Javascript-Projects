let speech = new SpeechSynthesisUtterance(); //create an js object for getting users txt
let voices = [];
let voiceSelected = document.querySelector('.voiceSelect'); 

window.speechSynthesis.onvoiceschanged = ()=>{ //function work when the voiceChanged
    voices =  window.speechSynthesis.getVoices(); //Getting voice from the object
    speech.voice = voices[0];
    voices.forEach((voice, index)=>(voiceSelected.options[index] = new Option (voice.name,index)));
}

voiceSelected.addEventListener('change',()=>{
    speech.voice = voices[voiceSelected.value]
})

document.querySelector('button').addEventListener("click",()=>{
    speech.text = document.querySelector('textarea').value;

    if(document.querySelector('textarea').value == ''){
        alert("Enter Your Value");
    }else{
        window.speechSynthesis.speak(speech);
    }
})

