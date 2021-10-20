document.body.innerHTML=`
<section class="user-list"></section>`;
 async function getAllUsers(){
     const data=await fetch("https://anapioficeandfire.com/api/books",{method:"GET"});
     const users=await data.json();
     const userContainer=document.querySelector(".user-list");
     
     users.forEach((user) => {
         userContainer.innerHTML+=`
         <div data-aos="flip-left" class="user-container">
         <div>
         <img class="image" src="https://wallpapercave.com/wp/wp2036900.jpg"/>
         </div>
        <div class="book-details"> 
        <h1><i class="bi bi-book"></i> Books Details</h1>
         <p class="name"><b>Name: </b>${user.name}</p>
         <p class="bno"><b>Book NO: </b>${user.isbn}</p>
         <p class="author"><b>Author: </b>${user.authors}</p>
         <p class="pages"><b>Number Of Pages: </b>${user.numberOfPages}</p>
         <p class="publisher"><b>publisher: </b>${user.publisher}</p>
         <p class="date"><b>Released Date: </b>${user.released}</p>
         </div>
        </div>
         `;
         
     });
     console.log(users);
 }
 getAllUsers();
