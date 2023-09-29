// Om du inte ser hela den här raden, behöver du slå på WORD WRAP. Välj menyn: View -> Word Wrap. Eller leta upp Word Wrap i inställningarna: File -> Settings -> Preferences -> sök på "wrap".
/*
Dessa är våra byggstenar - problemlösning med bottom-up metoden:
	Variabler
	Parametrar
	Funktion
	if statements (if sats)
*/
/*
Datatyper i JavaScript:
+ number -> 1
+ boolean -> true
+ string -> "hello", 'hello'
+ null, undefined, object, Symbol, BigInt

Operator: används för att kombinera värden. Exempel: +, -, /, *, %

camelCase  (JavaScript variabler, funktionsnamn m.m.)
PascalCase  (komponenter, klasser m.m.)
kebab-case  (CSS)
snake_case
*/

// Övning 1: skriv en funktion som returnerar en rektangels area
function rectangleArea(width, height) {
	let area = width * height
	return area
}

let area = rectangleArea(100, 200)
console.log(`Arean för rektangeln är: ` + area)

// --------------------------------------------------- //


// Övning 2: kontrollera om en sträng är tom
// function checkIfStringEmpty  <- första försöket till namn
function stringIsEmpty(string) {
	// Extra övning: kontrollera OM string är en sträng eller en annan datatyp
	// Tips: använd typeof!

	// == kontrollerar om två värden är lika, tillåtet att ha olika datatyper
	// === måste vara samma datatyp också
	if( string.length === 0 ) {
		return true
	} else {
		return false
	}
	// Alternativa if-satser:
	// if( string === '' )
	// if( !string )

	// Extra utmaning: man behöver inte använda en if-sats...
}

const isEmpty1 = stringIsEmpty('')
console.log(`Är sträng 1 tom? ` + isEmpty1)

const isEmpty2 = stringIsEmpty('hej')
console.log(`Är sträng 2 tom? ` + isEmpty2)

// Falsy: 0, '', null, undefined


// --------------------------------------------------- //

// Övning 3: skriv en funktion som kontrollerar om ett nummer är positivt eller negativt
// Vi gör två varianter: 1) skriva ut svaret, 2) returnera svaret som en boolean
// alternativt namn: checkIfPositiveOrNegative
function checkIfNumberIsPositive(number) {
	if( number > 0 ) {
		console.log(`Talet ${number} är positivt!`)
	}
	else if( number < 0 ) {
		console.log(`Talet ${number} är negativt!`)
	}
	else {
		console.log('Talet 0 är varken positivt eller negativt.')
	}
}

checkIfNumberIsPositive(500)
checkIfNumberIsPositive(-2)
checkIfNumberIsPositive(0)

// Returnerar true om parametern är ett positivt tal. Se upp med nollan!
function numberIsPositive(number) {
	if (number > 0) {
		return true
	} else {
		return false
	}
}

// --------------------------------------------------- //
// Övning 4: Skriv en funktion som räknar ut fakulteten (eng. factorial) av ett tal
// Rekursion: en funktion som anropar sig själv
// - basfall  (enklast möjliga)
// - rekursionsfall
function factorial(n) {
	if( n <= 1 ) {
		return 1
	} else if( n === 2 ) {
		return 2
	} else {
		return n * factorial(n - 1)
	}
}

console.log('2! == ', factorial(2))
console.log('3! == ', factorial(3))
console.log('4! == ', factorial(4))


// EXCLUSIVE PREVIEW
// Exempel på hur JavaScript används på webbsida
const button = document.querySelector('#hello-button')
button.addEventListener('click', whenClick)

function whenClick() {
	console.log('Användaren klickade på knappen')
	button.classList.toggle('fancy')
}


// --------------------------------------------------- //
// Övning 11: returnera det mellersta tecknet i ett ord
function getMiddleCharacter(word) {
	// Ta reda på strängens längd
	// är ordets längd udda eller jämnt?
	// Räkna ut "mitten"
	// plocka ut 1 eller 2 tecken (beroende på udda/jämnt)
	// returnera tecknet/tecknen

	const length = word.length
	if( length % 2 === 0 ) {
		// Jämnt antal tecken
		// Exempel på en jämn sträng: 'anka'. Använd exempel för att göra sådan här kod lite mera konkret!
		let x = length / 2 - 1
		let chars = word[x] + word[x + 1]
		return chars

	} else {
		// Udda antal tecken
		// Exempel på udda sträng: 'badboll'
		let x = Math.floor(length / 2)
		let char = word[x]
		return char
	}
}

console.log('Mitten på anka är: ' + getMiddleCharacter('anka'))  // längd 4
console.log('Mitten på kaleanka är: ' + getMiddleCharacter('kaleanka'))  // längd 8
console.log('Mitten på badboll är: ' + getMiddleCharacter('badboll')) // längd 7
