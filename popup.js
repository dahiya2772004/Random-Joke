document.getElementById('newJokeButton').addEventListener('click', fetchJoke);

function fetchJoke() {
    // Fetch a random joke from the JokeAPI
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            let joke;
            if (data.type === 'single') {
                joke = data.joke; // For single jokes
            } else {
                joke = `${data.setup} ... ${data.delivery}`; // For two-part jokes
            }
            document.getElementById('jokeContainer').innerText = joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('jokeContainer').innerText = "Oops! Couldn't fetch a joke.";
        });
}

// Fetch a joke on load
fetchJoke();
