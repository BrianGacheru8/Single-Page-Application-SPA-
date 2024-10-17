document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/albums/")
    .then(res => res.json())
    .then((albums) => {
      console.log(albums);
      const spany = document.getElementById("spany");
      albums.forEach((album) => {
        const tee = document.createElement("img");
        tee.src = album.coverImage;
        tee.addEventListener("click",(album){
          dv=document.createElement("div")
          dv.innerHTML=`
            <p>${album.name} its rating is ${rating}</P>`,
          tee.innerHTML(dv),
        spany.appendChild(tee);
      }});
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Failed to fetch album data. Please try again later.");
    });
form1=document.getElementbyId("formy")
form1.addEventListener("submit",(e){
  e.preventDefault(),
  fData= newFormData(form1),
  data={
    name=fData.name,
    coverImage=fData.request,
    rating=fData.rating,
  };
  fetch("http://localhost:3000/albums/",{
    method:"POST",
    headers:{Content-type:"application/json"},
    body:{data.JSON.stringify(data)})
  .then(res=>res.json())
  .then(dt=>console.log(dt))
  .catch(err=>alert(err))
    }}    
);

                         
          
          
  
