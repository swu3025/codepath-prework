// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // [0.0, 1.0]
var guessCounter = 0;
var numStrikes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  numStrikes = 0;
  clueHoldTime = 1000;
  if(pattern.length == 0){
    randomPattern();
  }
  

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("patternBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();  
}

function stopGame(){
    gamePlaying = false;
  
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("patternBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  guessCounter = 0;
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrats! You won!");
}

function guess(btn){
  if(!gamePlaying){
    return;
  }
  
  if(btn === pattern[guessCounter]){
    if(guessCounter === progress){
      if(progress === pattern.length - 1){
        pattern = []; 
        winGame();
      }
      else{
        progress += 1;
        clueHoldTime -= 100;
        playClueSequence();
      }
    }
    else{
      guessCounter+=1;
    }
  }
  else{
    if(numStrikes === 2){
      loseGame();
    }
    else{
      numStrikes += 1;
    }
  }
}

function randomPattern(){
  pattern = []
  for(var i = 0; i < 10; i++){
    var num = Math.floor(Math.random() * 6) + 1;
    pattern.push(num);
    console.log(num);
    
  }
}