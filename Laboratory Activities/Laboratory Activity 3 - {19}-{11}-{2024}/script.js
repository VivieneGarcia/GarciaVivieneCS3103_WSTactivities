document.addEventListener('DOMContentLoaded', () => { 
  const textInput = document.getElementById('textInput');
  const wordCountDisplay = document.getElementById('wordcount');
  const sentenceCountDisplay = document.getElementById('sentenceCount');

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

  fanLeft.addEventListener("click", () => toggleFan(fanLeft));
  fanRight.addEventListener("click", () => toggleFan(fanRight));

  function toggleFan(fan) {
    if (fan.src.includes(gifSrc)) {
      fan.src = staticSrc;
    } else {
      fan.src = gifSrc;
    }
  }
});
