let btn = document.querySelector(".btn");
let quote_text = document.querySelector(".quote-text");
let author_text = document.querySelector(".author");


btn.addEventListener("click", _ => {
    btn.classList.add("loading");
    btn.innerHTML = "Loading...";
    fetch ("https://api.quotable.io/random")
    .then((response) => {return response.json()})
    .then((data)=> {
        btn.classList.remove("loading");
        btn.innerHTML = "New Quotes";
        console.log(data)
        quote_text.innerHTML = `${data.content}`;
        author_text.innerHTML = `By ${data.author}`;
    } )
    .catch((reject)=> {console.log(reject)});

});

let speech = document.querySelector(".speech");

speech.addEventListener("click", _ => {
    let text_speak = new SpeechSynthesisUtterance(`${quote_text.innerHTML} ${author_text.innerHTML}` );
    speechSynthesis.speak(text_speak);
});

let copy = document.querySelector(".copy");
copy.addEventListener("click", _ => {
    navigator.clipboard.writeText(quote_text.innerHTML);
});

let twitter = document.querySelector(".twitter");
twitter.addEventListener("click", _ => {
    let url= `https://twitter.com/intent/tweet?url=${quote_text.innerHTML}`;
    window.open(url,"_blank");
})

