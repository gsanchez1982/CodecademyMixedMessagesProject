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
	"Uy, Uy, UUUUUYYY!!!!"
		];	

function selectAdj(a) {
	//random es un número aleatorio entre 0 y la longitud de un arreglo de adjetivos
	let randomAdj = Math.floor(Math.random() * parseInt(a.length));
	return a[randomAdj];
}

function selectPhrase(f) {
	//random es un número aleatorio entre 0 y la longitud de un arreglo de frases
	let randomPhrase = Math.floor(Math.random() * parseInt(f.length));
	return f[randomPhrase];
}

let selectedAdj = selectAdj(adj);

console.log(`Sí. Es cierto. Alguna vez algún ${selectedAdj} dijo esto en cadena Nacional:`)
console.log(selectPhrase(frases));
