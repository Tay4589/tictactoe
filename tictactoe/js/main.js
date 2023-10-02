	letra = "X";
 
	function joga(celula){
		let celulaclicada = document.getElementById(celula).innerHTML;
		if (celulaclicada == "X" || celulaclicada == "O"){
			alert("Opa, este quadrado já foi escolhido!");
		}else{
			document.getElementById(celula).innerHTML = letra;
			if (letra == "X"){
				letra = "O";
			}else{
				letra = "X";
			}
		}
	}
 
	function testa() {
		const c1 = document.getElementById('cel11').innerHTML;
		const c2 = document.getElementById('cell12').innerHTML
		const c3 = document.getElementById('cel13').innerHTML;
		const c4 = document.getElementById('cel21').innerHTML;
		const c5 = document.getElementById('cel22').innerHTML;
		const c6 = document.getElementById('cel23').innerHTML;
		const c7 = document.getElementById('cel31').innerHTML;
		const c8 = document.getElementById('cel32').innerHTML;
		const c9 = document.getElementById('cel33').innerHTML;

		if(c1 != '' && c4 != '' && c7 != '' && 
		   c1 == c4 && c4 == c7 || // testa a primeira coluna
			
		   c2 != '' && c5 != '' && 8 != '' && 
		   c2 == c5 && c5 == c8 || // testa a segunda coluna
			
		   c3 != '' && c6 != '' && c9 != '' && 
           c3 == c6 && c6 == c9 || // testa a terceira coluna 

			c1 != '' && c2 != '' && c3 != '' &&
            c1 == c2 && c2 == c3 || // testa a primeira linha
		
			c4 != '' && c5 != '' && c6 != '' && 
            c4 == c5 && c5 == c6 || // testa a segunda linha
            
			c7 != '' && c8 != '' && c9 != '' && c7 == c8 && 
            c7 == c8 && c8 == c9 ||  // testa a terceira linha

            c1 != '' && c2 != '' && c3 != '' && 
			c1 == c2 && c2 == c3 || // testa a primeira horizontal 

			c4 != '' && c5 != '' && c6 != '' && 
			c4 == c2 && c5 == c6 || // testa a segunda horizontal 

			c7 != '' && c8 != '' && c9 != '' && 
			c7 == c8 && c8 == c9 || // testa a terceira horizontal 

			c1 != '' && c5 != '' && c9 != '' &&
            c1 == c5 && c5 == c9 || // testa a primeira diagonal 

			c3 != '' && c5 != '' && c7 != '' && 
			c3 == c5 && c5 == c7 ||). // testa a segunda diagonal
			
			
	}