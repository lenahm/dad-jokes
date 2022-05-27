const joke = document.getElementById('joke'); 
const newJokeBtn = document.getElementById('new-joke-btn'); 

getRandomJoke();

async function getRandomJoke() {
    const config = { headers: { 'Accept': 'application/json' } }; 

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json();
    joke.innerHTML = data.joke; 
}

newJokeBtn.addEventListener('click', getRandomJoke); 