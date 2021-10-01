//Ceballos Miranda Gustavo
var limite = parseInt(prompt("Ingresa el limite(numero): "));

erstt(limite);

function erstt(limite) {
	var prm = [];

	for (var i = 0; i < limite; i += 1) {
		if (i != 0 && i != 1) {
			prm.push(true);
		}
		else {
			prm.push(false);
		}
	}

	for (var i = 0; i < limite; i += 1) {
		if (prm[i]) {
			for (var j = i + i; j < limite; j += i) {
				prm[j] = false;
			}
		}
	}
	var sonprm = [];
	for (var i = 0; i < limite; i += 1) {
		if (prm[i]) {
			sonprm.push(i);
		}
	}
	return sonprm;
}
