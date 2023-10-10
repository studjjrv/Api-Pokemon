const pokemones = fetch("https://pokeapi.co/api/v2/pokemon")
var main = document.getElementById('main')
var h1habilidades = document.getElementById('h1habilidades')
var divimagenhabilidades = document.getElementById('divimagenhabilidades')
var h2habilidades = document.getElementById('h2habilidades')
var ulhabilidades = document.getElementById('ulhabilidades')
var contador =0
var variable = document.location.href
//URL desglozada para obtener la variable, en este caso el nombre del POKEMON
var nombrePokemon = variable.slice(variable.indexOf('?')+1,variable.length)

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
                if(nombrePokemon.toUpperCase() == pokemon.name.toUpperCase()){ 
                    let h1 = document.createElement('h1')
                    //Colocar primera letra en mayúscula del nombre 
                    const primeraletranombre = pokemon.name.charAt(0)
                    const rest = pokemon.name.slice(1);
                    const contenidoh1 =  primeraletranombre.toUpperCase() + rest

                    h1.textContent = contenidoh1
                    h1.name = pokemon.name 
                    h1.classList.add("text-6xl")

                    h1habilidades.appendChild(h1)
                    
                    let h2 = document.createElement('h2')
                    h2.textContent = "Habilidades"
                    h2.classList.add("shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]")
                    h2.classList.add("w-[100px]")
                    h2.classList.add("h-[30px]")
                    h2.classList.add("pl-[10px]")                   


                    habilidades.forms.map((formas)=>{
                        const imagenes = fetch(formas.url)
                        imagenes
                            .then((resuesta3)=>{
                                return resuesta3.json()
                            })
                            .then((imagenPokemon)=>{

                                //console.log(imagenPokemon)

                                setTimeout(()=>{
                                let input = document.createElement('input')
                                let input2 = document.createElement('input')
                                
                                input.type = "image"
                                input2.type = "image"

                                input.src = imagenPokemon.sprites.front_default
                                input2.src= imagenPokemon.sprites.back_default
                                input.style.border = 'solid'
                                input.style.borderRadius = "100%"
                                input.style.borderColor = "#3257a8";
                                input.style.borderWidth = "5px"
                                input.style.backgroundColor = "red"
                                input.style.backgroundImage = "linear-gradient(to bottom, red , white)"
                                input.id = pokemon.name
                                input.name = pokemon.name
                                input.classList.add("hover:scale-110")                                

                                input2.style.border = 'solid'
                                input2.style.borderRadius = "100%"
                                input2.style.borderColor = "#3257a8";
                                input2.style.borderWidth = "5px"
                                input2.style.backgroundColor = "red"
                                input2.style.backgroundImage = "linear-gradient(to bottom, red , white)"
                                input2.id = pokemon.name
                                input2.name = pokemon.name
                                input2.classList.add("hover:scale-110")
                                divimagenhabilidades.appendChild(input)
                                divimagenhabilidades.appendChild(input2)

                                },1000)
                                
                                  
                            })
                        })
                        habilidades.abilities.map((habilidad)=>{                                                     
                            h1.id = habilidades.id     

                            let li = document.createElement('li')
                            li.id = habilidades.id 
                            li.title = pokemon.name 

                            //Colocar primera letra en mayúscula de las habilidades

                            const firstLetter = habilidad.ability.name.charAt(0)
                            const rest = habilidad.ability.name.slice(1);
                            const contenidoli =  firstLetter.toUpperCase() + rest

                            li.textContent = contenidoli
                            li.classList.add("shadow-[5px_5px_0px_0px_rgba(47,110,181)]")
                            li.classList.add("w-[150px]")
                            li.classList.add("h-[30px]")
                            li.classList.add("pl-[10px]")                  
                            h2habilidades.appendChild(h2)
                            ulhabilidades.appendChild(li)
                        })                                             
                    }else{
                        contador++
                        if(contador == 20){
                            let h1 = document.createElement('h1')
                            let input = document.createElement('input')



                            h1.textContent ="Este Pokemon no existe, intenta con otro"
                            h1habilidades.appendChild(h1)
                            input.type = "image"
                            input.style.border = 'solid'
                            input.style.borderRadius = "100%"
                            input.style.borderColor = "#3257a8";
                            input.style.borderWidth = "5px"
                            input.style.backgroundColor = "red"
                            input.style.backgroundImage = "linear-gradient(to bottom, red , white)"
                            input.src = "Images/equis.png"
                            input.style.width  = "150px"
                            divimagenhabilidades.appendChild(input)
                            console.log("Error")
                        }
                    }
                })
            })
        })