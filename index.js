document.addEventListener("DOMContentLoaded", () => {
  fetch("https://single-albums.onrender.com/albums")
    .then(res => res.json())
    .then((albums) => {
      console.log(albums);
      const spany = document.getElementById("spany");

      albums.forEach((album) => {
        const tee = document.createElement("img");
        tee.src = album.coverImage;
        tee.alt = album.name;
        spany.appendChild(tee); // Append the image to the container

        tee.addEventListener("click", (album) => {
          const dun = document.getElementById("detail-image");
          dun.src=album.coverImage;
          const namey = document.getElementById("name");
          namey.innerHTML = album.name}
          const rate=document.getElementById("rating")
          rate.innerHTML=`${album.rating}`
     .catch((err)=>{
      console.error("Fetch error:", err);
      alert("Failed to fetch album data. Please try again later.");
    });
        })
        });
      });
    })

  const form1 = document.getElementById("new-album");
  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fData = new FormData(form1);
    const data = {
      name: fData.get("name"),
      coverImage: fData.get("coverImage"),
      rating: fData.get("rating")
    };

    fetch("https://single-albums.onrender.com/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(dt => {
        console.log(dt);
        // Optionally, you can reset the form or update the UI here
      })
      .catch(err => {
        console.error("Error during album submission:", err);
        alert("Error: " + err);
      });
  })
