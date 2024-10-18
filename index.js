document.addEventListener("DOMContentLoaded", () => {
    const randomAlbumsDiv = document.getElementById("random-albums");
    
    fetch("db.json")
        .then(res => res.json())
        .then(albums => {
            const randomAlbums = albums.sort(() => 0.5 - Math.random()).slice(0, 4);
            randomAlbums.forEach(album => {
                const img = document.createElement("img");
                img.src = album.coverImage;
                img.alt = album.name;
                img.addEventListener("click", () => showAlbumDetails(album));
                randomAlbumsDiv.appendChild(img);
            });
        })
        .catch(err => {
            console.error("Fetch error:", err);
            alert("Failed to fetch album data.");
        });

    const form = document.getElementById("new-album");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fData = new FormData(form);
        const data = {
            name: fData.get("name"),
            coverImage: fData.get("coverImage"),
            rating: fData.get("rating")
        };
        
        // Here, you would typically send this data to your server.
        console.log("New album submitted:", data);
        alert("Album added! Refresh to see it in the gallery.");
        form.reset();
    });
});

function showAlbumDetails(album) {
    document.getElementById("detail-image").src = album.coverImage;
    document.getElementById("name").innerText = album.name;
    document.getElementById("rating").innerText = `Rating: ${album.rating}`;
}
