document.addEventListener("DOMContentLoaded",()=>{
  fetch("http://localhost:3000/albums/")
    .then(res=>res.json())
    .then((data)=>{;
      data=albums;
      console.log(albums);
      albums.forEach((album){
            spany=document.getElementById(spany);
            tee=document.createElement("img");
            tee.src=album.coverimage;
            spany.appendChild(tee)}})
    .catch(err=>alert(err))
                         })                                                  
                         
          
          
  
