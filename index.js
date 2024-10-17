document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/albums/")
    .then(res => res.json())
    .then((albums) => {
      console.log(albums);
      const spany = document.getElementById("spany");
      albums.forEach((album) => {
        const tee = document.createElement("img");
        tee.src = album.coverImage;
        tee.alt = album.name; // Optional: add alt text for accessibility

        tee.addEventListener("click", () => {
          const dv = document.createElement("div");
          dv.innerHTML = `
            <p>${album.name} - its rating is ${album.rating}</p>`;
          spany.appendChild(dv); // Append the new div to the spany element
        });

        spany.appendChild(tee); // Append the image to the spany element
      });
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Failed to fetch album data. Please try again later.");
    });

  const form1 = document.getElementById("formy");
  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const fData = new FormData(form1);
    const data = {
      name: fData.get("name"), // Assuming the input has a name attribute
      coverImage: fData.get("coverImage"), // Adjust as necessary
      rating: fData.get("rating") // Adjust as necessary
    };

    fetch("http://localhost:3000/albums/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) // Fixed JSON.stringify usage
    })
      .then(res => res.json())
      .then(dt => console.log(dt))
      .catch(err => alert("Error: " + err));
  });
});


                         
          
          
  
