//Arreglo de Adjetivos
const adj = [
	"cronista deportivo",
	"comentarista",
	"narrador",
	"payaso",
	"personaje de televisión",
	"experto en deportes"
	];


//Arreglo de Frases de Cronistas Deportivos
const frases = [
	"Si la mete es gol",
	"Te dejo porque la tiene Boselli y es de peligro",
	"Hay algo que está claro. Si Pumas no empata, va a perder este partido...",
	"Y la tiene el chaka!!",
	"Se nota que este es rapidísimo!",
	"Éste le pega bien!",
	"gOOOOOOOOOOL DE LA FIERA!!!",
	"Si tienes el balón, el rival no lo tiene",
	"Nooo, bueno!",
	"Ojo! Si le sacan roja, se tiene que ir!",
	"Me parece fuera de lugar... ¡Quitenle el 'parece'. ¡Es fuera de lugar!",
	"No puedes hablar bien de alguien porque a la siguiente jugada se equivoca.",
	"le va a pegar... le va a PEGAR..... LE VA A PEGAAAARRRR.......... F U E R A !!!!!",
	"Y allá van los grandotes",
	"Cabeceó de cabeza!",
	"Uy, Uy, UUUUUYYY!!!!",
	"En el día del padre, México le dió en la madre a Alemania",
	"Tantas veces te pedí una, desgraciado!",
	"¡Oribe para Presidente de la ONU!",
	"No fue penalty por que el árbitro no lo marcó",
	"La portería mide lo mismo en México y Europa",
	"La cutó juera",
	"Si la pelota entra, es gol",
	"En las eliminatorias de hoy pasan 14 de 6",
	"Sí era fuera de lugar por que lo marcó el árbitro",
	"Soy guerrero. Perdón, soy de Guerrero!",
	"El portero debe estar atrás de sus defensas",
	"He vomitado bilis por ti",
	"La sacó a Tamaulipas!",
	"Al rinconcito, papá",
	"Donde las arañas tejen su nido",
	"Uf, Uf, y recontra -uf",
	"Le tiró la torta de milanesa a un brother",
	"Fírmala! Fírmala! F I R M A L AAAA!!"
		];	


//Arreglo de Cronistas Deportivos
const personas = [
	"Raúl Orvañanos",
	"Jorge Campos",
	"Christian Martinoli",
	"El Perro Bermudez"
		];	


function selectItem(a) {
	//random es un número aleatorio entre 0 y la longitud de un arreglo
	let random = Math.floor(Math.random() * parseInt(a.length));
	return a[random];
}


console.log(`Sí. Es cierto. Alguna vez algún ${selectItem(adj)} dijo esto en cadena Nacional:`)
console.log(selectItem(frases));
console.log(`Habrá sido ${selectItem(personas)}?`)
