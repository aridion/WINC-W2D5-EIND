// VARIABLES

const btnNames = [`Aron's recommendations`, 'nieuwste films', 'Avengers', 'X-Men', 'Princess', 'Batman']

const menu = document.getElementsByTagName("ul")[0];

const relMovies = document.querySelector('#relevant-movies')

// CREATE BUTTONS

btnNames.forEach(item => {
    menu.appendChild(document.createElement('li')).innerHTML = `<input type="radio" name="filters" id="${item}">${item}`
});

const btns = Array.from(document.getElementsByName('filters'))


// DISPLAY MOVIES

btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        while (relMovies.firstChild) {
            relMovies.removeChild(relMovies.firstChild);
        }

        if (btns.indexOf(btn) === 1) {
            movies.filter((movie1) => {
                return parseInt(movie1.Year) >= 2014
            })
                .forEach((movie) => {
                    relMovies.appendChild(document.createElement('figure')).innerHTML = `<a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank"><img src="${movie.Poster}" alt="${movie.Title}" ></a>`
                })
        } else if (btns.indexOf(btn) === 0) {
            relMovies.innerHTML = aronsUltraSecretString
        } else {
            movies.filter((movie3) => movie3.Title.includes(btnNames[btns.indexOf(btn)])
            )
                .forEach((movie) => {
                    relMovies.appendChild(document.createElement('figure')).innerHTML = `<a href="https://www.imdb.com/title/${movie.imdbID}/" target="_blank"><img src="${movie.Poster}" alt="${movie.Title}" ></a>`
                })
        }
    })
})
