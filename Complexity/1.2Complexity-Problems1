//Ceballos Miranda Gustavo
var limite = parseInt(prompt("Ingresa el limite(numero): "));

Erastothenes(limite);

function Erastothenes(limite) {
	var primos = [];

	for (var i = 0; i < limite; i += 1) {
		if (i != 0 && i != 1) {
			primos.push(true);
		}
		else {
			primos.push(false);
		}
	}

	for (var i = 0; i < limite; i += 1) {
		if (primos[i]) {
			for (var j = i + i; j < limite; j += i) {
				primos[j] = false;
			}
		}
	}
	var sonprimos = [];
	for (var i = 0; i < limite; i += 1) {
		if (primos[i]) {
			sonprimos.push(i);
		}
	}
	return sonprimos;
}
