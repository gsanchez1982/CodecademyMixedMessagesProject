//Arreglo de Frases de Raul Orvañanos
const frasesOrvananos = [
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

function selectPhrase(f) {
	//random es un número aleatorio entre 0 y la longitud de frasesOrvananos
	let random = Math.floor(Math.random() * parseInt(f.length));
	return f[random];
}

console.log("Sí. Es cierto. Alguna vez Raúl Orvañanos dijo esto en TV Nacional:")
console.log(selectPhrase(frasesOrvananos));
