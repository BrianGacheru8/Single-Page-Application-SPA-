document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/albums/")
    .then(res => res.json())
    .then((albums) => {
      console.log(albums);
      const spany = document.getElementById("spany");
      albums.forEach((album) => {
        const tee = document.createElement("img");
        tee.src = album.coverImage;
        spany.appendChild(tee);
      });
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Failed to fetch album data. Please try again later.");
    });
});

                         
          
          
  
