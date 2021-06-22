const s = document.getElementById("googleValue");
const f = document.getElementById("form");


const link = "https://www.google.com/search?q=";



function searchEngine(event) {
    event.preventDefault();
    const url = link + s.value;
    f.reset();
    window.open(url, "_self");
}

f.addEventListener("submit", searchEngine);

