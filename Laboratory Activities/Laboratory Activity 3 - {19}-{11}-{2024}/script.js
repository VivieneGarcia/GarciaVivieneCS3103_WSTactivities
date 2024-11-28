document.addEventListener('DOMContentLoaded', () => { 
  const textInput = document.getElementById('textInput');
  const wordCountDisplay = document.getElementById('wordcount');
  const sentenceCountDisplay = document.getElementById('sentenceCount');
  const fanSound = new Audio('fan.wav');
  let fanSoundPlaying = false;

  textInput.addEventListener('input', () => { // called if text input is modified
    const text = textInput.value.trim(); // removes any extra spaces beg n end

    const words = text.split(/\s+/).filter(word => word.length > 0); // separated by whitespaces then count
    const wordCount = words.length; // log sample: WHAT'S UP -> ["wHAT'S", "UP"]

    const sentences = text.split(/[.!?]+\s/).filter(sentence => sentence.trim().length > 0); // match (.,!,?) then count
    const sentenceCount = sentences.length; // log sample: YO. Hello bello! No -> ["YO", "Hello bello", "No"]
    if (wordCount > 10){
      wordCountDisplay.textContent = `Words: ${wordCount} (Yap yap)`; 
    } else{
      wordCountDisplay.textContent = `Words: ${wordCount}`; 
    }
    sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
  });

  const fanLeft = document.getElementById("fan-left");
  const fanRight = document.getElementById("fan-right");
  const gifSrc = "giphy.gif"; 
  const staticSrc = "giphy.png";

  function playFanSound() {
    if (!fanSoundPlaying) {
      fanSound.currentTime = 0;  
      fanSound.loop = true; 
      fanSound.play();
      fanSoundPlaying = true;
    }
  }

  function stopFanSound() {
    if (fanSoundPlaying) {
      fanSound.pause();
      fanSound.currentTime = 0;
      fanSoundPlaying = false;
    }
  }

  fanLeft.addEventListener("click", () => toggleFan(fanLeft));
  fanRight.addEventListener("click", () => toggleFan(fanRight));

  function toggleFan(fan) {
    if (fan.src.includes(gifSrc)) {
      fan.src = staticSrc;
    } else {
      fan.src = gifSrc;
    }

    // Check if any fan is showing the GIF to determine if sound should play or stop
    if (fanLeft.src.includes(gifSrc) || fanRight.src.includes(gifSrc)) {
      playFanSound(); // Play sound if any fan is on
    } else {
      stopFanSound(); // Stop sound if both fans are off
    }
  }


    playFanSound();
});
