console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
var vbtnSearch = document.getElementById("submitSearch");
var vtxtSearch = document.getElementById("searchWord");
var vimgShow = document.getElementById("imageItself");
var vtxtFeedback = document.getElementById("feedback");

// Exercise 2 Section
vbtnSearch.addEventListener("click", getGif);

function getGif() {
    
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=6Cqmx8A4vpZoFBI2lcSso52Bj2qbrERL&s=" 
    + vtxtSearch.value, { mode: "cors" })
    // Exercise 3 Section
    .then((res) => res.json().then((data) => 
      {vimgShow.src = data.data.images.original.url;
    //Exercise 4 Section
        vtxtFeedback.textContent = "Found a GIF for you";
        vtxtSearch.value = "";
      }))
    .catch((err) => { vtxtFeedback.textContent = err.message});
};
