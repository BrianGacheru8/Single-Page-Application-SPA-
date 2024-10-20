document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/albums")
    .then(res => res.json())
    .then((albums) => {
      const albumContainer = document.getElementById("album-container");

      albums.forEach(album => {
        const img = document.createElement("img");
        img.src = album.coverImage;
        img.alt = album.title;
        albumContainer.appendChild(img); // Append the image to the container

        img.addEventListener("click", () => {
          document.getElementById("album-cover").src = album.coverImage;
          document.getElementById("album-title").innerText = album.title;
          document.getElementById("album-artist").innerText = album.artist;
          document.getElementById("album-release-date").innerText = `Release Date: ${album.releaseDate}`;
          document.getElementById("album-genre").innerText = `Genre: ${album.genre}`;
          document.getElementById("album-summary").innerText = album.summary;
          document.getElementById("album-rating").innerText = `Rating: ${album.rating}`;
        });
      });
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Failed to fetch album data. Please try again later.");
    });

  const form = document.getElementById("new-album-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newAlbum = {
      title: document.getElementById("album-title-input").value,
      artist: document.getElementById("album-artist-input").value,
      coverImage: document.getElementById("album-cover-input").value,
      releaseDate: document.getElementById("album-release-date-input").value,
      genre: document.getElementById("album-genre-input").value,
      summary: document.getElementById("album-summary-input").value,
      rating: document.getElementById("album-rating-input").value
    };

    // Placeholder for fetch to POST new album
    fetch("http://localhost:3000/albums", { // Change this to your actual API endpoint for saving new albums
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAlbum)
    })
    .then(res => res.json())
    .then(dt => {
      console.log("New album added:", dt);
      alert("Album added! Refresh to see it in the gallery.");
      form.reset(); // Reset the form after submission
    })
    .catch(err => {
      console.error("Error during album submission:", err);
      alert("Error: " + err);
    });
  });
});
