movieList = [
    {
        "title": "Movie 1",
        "year": 2012,
        "description": "First Movie Description"
    },
    {
        "title": "Movie 2",
        "year": 2013,
        "description": "Second Movie Description"
    },
    {
        "title": "Movie 3",
        "year": 2014,
        "description": "Third Movie Description"
    },
]

function reset() {
    movieRender(movieList);
}

function search() {
    let movieName = document.getElementById("movie-input").value;

    newMovieList = movieList.filter((movie) => movie.title == movieName);
    movieRender(newMovieList);
}

function showDetails(movieEle) {
    let movieElement = document.getElementById(movieEle.id);
    let detailselements = document.getElementsByClassName("details");
    for (const ele of detailselements) {
        ele.setAttribute("style", "display:none");
    }
    let movieafter = document.createElement("div");
    movieafter.classList.add("details");
    movieafter.setAttribute("id", `details-${movieEle.id}`);

    let idx = parseInt(movieEle.id[movieEle.id.length - 1]);
    let movieVal = movieList[idx];

    movieafter.innerHTML = `<div>
    <h3>${movieVal.title} - ${movieVal.year}</h3>
        
        <h5>${movieVal.description}</h5>
    </div>`;
    movieElement.after(movieafter);
}

function movieRender(movieList) {
    let movieTemplate = ``;
    if (movieList.length <= 0) {
        movieTemplate = `No movies found! Please try again...`;
    }
    else {
        for (const [idx, movie] of movieList.entries()) {
            movieTemplate += `<div id='movie${idx}' onclick="showDetails(this)">
                ${movie.title}
            </div>`;
        }
    }
    const movieDiv = document.getElementById("movie");
    movieDiv.innerHTML = movieTemplate;
}

movieRender(movieList);