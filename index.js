// index.js
const handleClick = function (album) {
  document.getElementById('name').innerText = album.name;
  document.getElementById('image').src = album.image;
  document.getElementById('rating').innerText = album.rating;
  document.getElementById('comments').innerText = album.comments;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-album");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(form);
    const album = {
      name: formData.get('name'),
      image: formData.get('image'),
      rating: formData.get('rating'),
      comments: formData.get('comments'),
    };

    fetch("https://single-albums.onrender.com/albums", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ramen)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error));
  });
};

const displayRamens = () => {
  fetch("https://single-albums.onrender.com/albums")
    .then(res => res.json())
    .then(data => {
      const albumMenu = document.getElementById("album-menu");
      albumMenu.innerHTML = ''; // Clear existing entries

      data.forEach((ramen) => {
        const bee = document.createElement("span");
        const tee = document.createElement("img");
        tee.src = album.image;
        tee.alt = album.name;

        // Add click event to the image
        tee.addEventListener("click", () => handleClick(album));

        bee.appendChild(tee);
        albumMenu.appendChild(bee);
      });
    })
    .catch(error => console.log(error));
};

const main = () => {
  displayAlbums();
  addSubmitListener();
};

document.addEventListener("DOMContentLoaded", main);
