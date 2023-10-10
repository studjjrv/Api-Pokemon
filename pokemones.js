//3) Hacer una página web de POKEMON utilizando la API de 
//https://pokeapi.co/ Debes mostrar la información de cada uno de los personajes, 
//además debes poder buscarlos por nombre.
const pokemones = fetch("https://pokeapi.co/api/v2/pokemon")
let main = document.getElementById('main')

pokemones
   .then((respuesta)=>{
    return respuesta.json()
   })
   .then((guerreros)=>{
    guerreros.results.map((pokemon)=>{
        //console.log(guerreros.results)
        const url = fetch(pokemon.url)
        url
            .then((respuesta2)=>{
                return respuesta2.json()
            })
            .then((habilidades)=>{
                habilidades.abilities.map((habilidad)=>{                                
                let li = document.createElement('li')
                li.textContent = `Habilidades: ${habilidad.ability.name}`
                //main.appendChild(li)
               })  

               habilidades.forms.map((formas)=>{
                const imagenes = fetch(formas.url)
                imagenes
                    .then((resuesta3)=>{
                        return resuesta3.json()
                    })
                    .then((imagenPokemon)=>{
                        let div = document.getElementById('divimagenes')
                        let input = document.createElement('input')
                        input.type = "image"
                        input.src = imagenPokemon.sprites.front_default
                        input.style.width = "96px"
                        input.style.border = 'solid'
                        input.style.borderRadius = "100%"
                        input.style.borderColor = "#3257a8";
                        input.style.borderWidth = "5px"
                        input.style.backgroundColor = "red"
                        input.style.backgroundImage = "linear-gradient(to bottom, red , white)"
                        input.classList.add("hover:scale-110")

                        
                        input.id = pokemon.name
                        input.name = pokemon.name
                        input.style.margin = "50px 10px 20px 30px";
                        input.addEventListener("click",todosPokemon)
                        div.appendChild(input)
                          
                    })
                })
            })
            
    })
})


var y=parseInt((window.screen.height/2)-(380/2));
var x=parseInt((window.screen.width/2)-(430/2));

var windowFeatures = `left=${x},top=${y},width=380,height=430`




function todosPokemon(){//FUNCION SE ACTIVA GENERAL


    //console.log(`El di es: ${this.id}`)
    window.open("habilidades.html?"+this.id,"_blank", windowFeatures)
}

function buscarPokemon(elemento){//FUNCION SE ACTIVA CUANDO SE BUSCA

    //console.log(`El nombre es: ${elemento}`)
    window.open("habilidades.html?"+elemento,"_blank",windowFeatures)


}