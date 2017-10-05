 do { // do ejecutar función isValidCard if codigo no está vacía while código 
	var codigo = prompt('Ingrese número de tarjeta');
	if (codigo != '') {
		isValidCard();
	}
	} while (codigo == '' && typeof codigo !== 'number');



function isValidCard() {
	var emptyArr = [];
		for (var i = 0 ; i < codigo.length ; i++) { // mete cada numbero singular en un nuevo array para convertirlos en elementos individuales
			emptyArr.push(parseInt(codigo.charAt(i))); 
			for (var j = 1 ; j < emptyArr.length ; j = j + 2) { //desde la posición 1 = segundo elemento mete los elementos pares en otro array
				var emptyArr2 = [];
				emptyArr2.push(parseInt(emptyArr.charAt(j)))
				if (j * 2 >= 10) { //si los nuevos elementos en las posiciones pares al dividirlos por 2 >= 10
					for (var x = 0 ; x < emptyArr2.length ; x++) {
						for (var y = 1 ; y < emptyArr2.length ; y++) {
							emptyArr2[j].charAt(x) + emptyArr2[j].charAt(y)
						}
					}
				}
			}
		} return 
	}


	