export function PasswordGenerator() {
    const passwords = ["Bez pracy nie ma kołaczy",
	"Jaka praca taka płaca",
	"pierwsze koty za płoty",
	"Cicha woda brzegi rwie",
	"Cicho jakby makiem zasiał",
	"Ciekawość to pierwszy stopień do piekła",
	"Ciemny jak tabaka w rogu",
	"Człowiek raz się rodzi i raz umiera",
	"Człowiek strzela Pan Bóg kule nosi",
	"Czyha jak diabeł na dobrą duszę",
	"Czym chata bogata tym rada",
	"Czym skorupka za młodu nasiąknie tym na starość trąci",
	"Pokorne cielę dwie matki ssie",
	"Póki w maju wiatr z północy ma się u nas zimno w nocy",
	"Praca tuczy bieda uczy",
	"Prawdziwa cnota krytyk się nie boi"]

  return passwords[Math.floor(Math.random()*passwords.length)]
}

export default PasswordGenerator