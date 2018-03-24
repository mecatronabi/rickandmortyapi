let response= document.getElementById('Elemento');


function getData(){


    function numeroAleatorio(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
 let url = 'https://rickandmortyapi.com/api/character/';
 let num = numeroAleatorio(1,394);
 

  fetch(url+num)
  .then ((resp)=>resp.json())
  .then(function(data){
    console.log(data);

   
    let characterInfo = 
         ` 
         <div class="presentacion">

             <div class="element1"> <h1>${data.name}</h1> </div>
            <div class="element1"> <h3>Species</h3> ${data.species} </div>
             <div class="element1"> <h3>Gender</h3> ${data.gender} </div>
             <div class="element1"> <a href="${data.episode}">Episodio</a> </div>

        </div>


        <div class="informacion">
            <div class="element2">  <img src="${data.image}" /> </div>

            <div class="element2">

                    <div class="org"> <h3>Origin</h3> ${data.origin.name}</div>
                    <div class="org"> <h3> Location</h3> ${data.location.name}</div>
            
            </div>

        </div>
   
        `
    response.innerHTML = characterInfo;
 

  })
 
}
getData();

