document.addEventListener("DOMContentLoaded", function () {
  // Retrieve data from local storage
  const movieData = JSON.parse(localStorage.getItem("movieData"));

  // Populate HTML elements with data
  if (movieData) {
    document.getElementById("poster").src = movieData.poster;
    document.getElementById("title").innerText = movieData.title;
    document.getElementById("genre").innerText = movieData.genre;
    document.getElementById("runtime").innerText = movieData.runtime;
    document.getElementById("releasedt").innerText = movieData.releasedt;
    document.getElementById("writer").innerText = movieData.writer;
    document.getElementById("director").innerText = movieData.director;
    document.getElementById("casts").innerText = movieData.casts;
    document.getElementById("boxoffice").innerText = movieData.boxoffice;
    document.getElementById("story").innerText = movieData.story;
  } else {
    // Handle error when no data is found
    const container = document.querySelector(".container");
    container.innerHTML = "<p>Error: No movie data found.</p>";
  }
});
