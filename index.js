document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/albums/")
    .then(res => res.json())
    .then((albums) => {
      console.log(albums);
      const spany = document.getElementById("spany");
      albums.forEach((album) => {
        const tee = document.createElement("img");
        tee.src = album.coverImage;
        tee.alt = album.name;

        tee.addEventListener("click", () => {
          const dun=document.getElementbyId(img);
          dun.src=album.coverImage;
          const namey=document.getElementbyId();
          namey.innerHTML=`${album.name}
        });
        
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
      name: fData.get("name"),
      coverImage: fData.get("coverImage"),
      rating: fData.get("rating")
    };

    fetch("http://localhost:3000/albums/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(dt => console.log(dt))
      .catch(err => alert("Error: " + err));
  });
});


                         
          
          
  
