/*
Variabler
Parametrar
Funktion
if statements (if sats)

expression (uttryck)
*/
/*
Datatyper i JavaScript:
+ number -> 1
+ boolean -> true
+ string -> "hello", 'hello'
+ null, undefined, object, Symbol, BigInt

1 + 2
Operator: används för att kombinera värden

camelCase  (JavaScript variabler, funktionsnamn m.m.)
PascalCase  (komponenter, klasser m.m.)
kebab-case  (CSS)
snake_case
*/

// skriv en funktion som returnerar en rektangels area
function rectangleArea(width, height) {
	let area = width * height
	return area
}

let area = rectangleArea(100, 200)
console.log(`Arean för rektangeln är: ` + area)


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

