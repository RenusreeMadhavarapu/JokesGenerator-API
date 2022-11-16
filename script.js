let jokeSection = document.querySelector("#joke");

let generateBtn = document.querySelector("#jokeBtn");
let api =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  function acquireJoke() {
    
    fetch(api)
      .then((info) => info.json())
      .then((item) => {
        jokeSection.textContent = `${item.joke}`;
        
        
      });
  }
  
  generateBtn.addEventListener("click", acquireJoke);