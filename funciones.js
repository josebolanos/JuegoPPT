// Aqui uso la funcion Math.random porque me generaba un numero aleatorio entre 0 y 1 lo tuve que multiplicar por 3 para que buscara cerca del 3 numeros aletarios (emplos 0,233232,1,33232,2,32323 etc..)
//Aqui tambien use el Math.floor porque redondea un numero entero hacia abajo con lo cual siempre me iva a a dar  0 , 1 , 2 cosa que necesitaba para sacar 3 opciones Piedra, Papel, Tijera
function getComputerChoice() {
    let ramdomNumber = Math.floor(Math.random() * 3);
   
    if(ramdomNumber === 0) {
        return 'Piedra'
    } else if (ramdomNumber === 1){
        return 'Papel'
    } else { // Aqui sera cuando caiga en 2
        return 'Tijera'; 
    }
} 

//Aqui creo una funcion con 2 opciones las cuales voy a explicar mejor en cada linea

function partida(playerSelection, computerSelection) {
   
    computerSelection =  getComputerChoice();//Esta parte esta llamando a la funcion que daba 3 opciones mas arriba para que me deje alguna opcion piedra, papel o tijera.
    playerSelection= getComputerChoice()//Esta parte esta llamando a la funcion que daba 3 opciones mas arriba para que me deje alguna opcion piedra, papel o tijera.
  
   
    // En  esta parte digamos que Playerselection y computerSelection ya tienen un valor asignado y le estoy diciendo quien ganara o perdera segun lo que salga.Digamos que estoy diciendo las normas del juego.
    if( playerSelection ===  'Tijera' && computerSelection === 'Papel' || 
    playerSelection === 'Piedra' && computerSelection === 'Tijera' || 
    playerSelection === 'Papel' && computerSelection === 'Piedra' ) {  
         return  'You Lose Compunter!';
    } else {
        return'You Lose Player!'    
    }
   
   
}

// Aqui creo una funcion game que tendra que tener un contador y un ganador aparte un cuadri visual en donde el player pondra su eleccion en esta parte ya el player juega.
function game() {
    let playerScore = 0; // Aqui empiezan los contadores en 0
    let computerScore = 0; // Aqui empiezan los contadores en 0
    
    for( let i = 0; i < 5; i++) {     // Creamos un bucle for para decirle que se jugara 5 veces 
        let playerSelection = prompt('Elige: Piedra, Papel o Tijera').toLowerCase();// Aqui un mensaje que se vera en pantalla pidiendole que elija varias opciones( Hay que poner normas ya que cuando poner cualquier cosa directamente le da la puntuacion a la maquina)
        let computerSelection = getComputerChoice();  // Aqui estamos trayendo la funcion que cogia aleatoriamente 3 opciones para que haga de maquina y sea ella sin ayuda de nadie que de varias opciones al azar.
        let resultado = partida(playerSelection,computerSelection);      // Añadimos a la variable resultado la funcion partida la cual le dara las normas del juego para saber quien gana o pierde
        if(resultado.includes('You Lose Compunter!')) {  // Aqui añado una manera de saber quien a ganado o perdiendo cogiendo el return de la funcion partida que decia "You Lose Computer" con lo cual le dara el punto al player
            playerScore++ ;
        } else {
            computerScore++; // Aqui se ve claro que sera lo contrario si no es al jugador 
        }

        // Para hacerlo mas visual y ver como vas la partida aqui he puesto estos consoles.log()
        console.log("Puntuación actual:");
        console.log("Jugador: " + playerScore);
        console.log("Computadora: " + computerScore);
    } 
   
        // En esta parte es para describir quien gana y pierde se ve claramente que si el player tiene mas puntos que el computer ganara y se imprimira dicho resultado en la consola
        if( playerScore > computerScore) {
            return'Player you Win'
        } else if(playerScore < computerScore){
            return'Player you Lose'
        } else {
            return 'Empate'
        }

   
}

 
     // Podria a ver puesto direcamente game() pero queria tenerlo dentro de resultado por si queria usarlo mas fasilmente.
     let resultado = game()
     console.log(resultado);

    