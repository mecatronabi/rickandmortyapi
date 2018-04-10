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
  
 let episodio = data.episode;

   
    let characterInfo = 
         ` 
         <div class="presentacion">

             <div class="element1"> <h1>${data.name}</h1> </div>
            <div class="element1"> <h3>Especie</h3> ${data.species} </div>
             <div class="element1"> <h3>Género</h3> ${data.gender} </div>
             <div class="element1"> <h3>Número de Personaje</h3> ${data.id} </div>
         

        </div>


        <div class="informacion">
            <div class="element2">  <img src="${data.image}" /> </div>

            <div class="element2">

                    <div class="org"> <h3>Origen</h3> ${data.origin.name}</div>
                    <div class="org"> <h3>Ubicación</h3> ${data.location.name}</div>
            
            </div>
        </div>
        
        <div class="boton">
        <a class="conoce" href="javascript:location.reload()">Conoce otro personaje</a>
        </div>
   
        `
        setTimeout(function () { 
            location.reload(true); 
          }, 300000);
          
 
    response.innerHTML = characterInfo;

   

  
})
 
}
getData();

