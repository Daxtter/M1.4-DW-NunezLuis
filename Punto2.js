const ataqueGolpe = function(){
	return "Atacando con golpe";
}
const ataqueRayo = function(){
	return "Atacando con rayo fulminante";
}
const atacar = function(funcion,personaje){
	return funcion()+ " a "+ personaje;
}

console.log(atacar(ataqueGolpe,"Personaje 2"));
console.log(atacar(ataqueRayo,"Personaje 1"));