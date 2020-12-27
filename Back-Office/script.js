// JAVASCRIPT PERFIL

// TENTATIVA DE PASSWORD PERFIL

let password = true;

function showPassword(){
    if(password){
        document.getElementById("password1").setAttribute("type", "password");
        password= false;
    } else {
        document.getElementById("password1").setAttribute("type", "text");
        password= true;
    } 
}

// EDITAR

document.getElementById("nome1").addEventListener("click", EnableNome);

function EnableNome() {
    var disabled = document.getElementById("nome1").disabled;
  if (disabled) {
    document.getElementById("nome1").disabled = false;
  } else {
    document.getElementById("nome1").disabled = true;
  }
   }
   
document.getElementById("email1").addEventListener("click", EnableMail);

function EnableMail() {
    var disabled = document.getElementById("email1").disabled;
  if (disabled) {
    document.getElementById("email1").disabled = false;
  } else {
    document.getElementById("email1").disabled = true;
  }
   }
   
document.getElementById("morada1").addEventListener("click", EnableMorada);

function EnableMorada() {
    var disabled = document.getElementById("morada1").disabled;
  if (disabled) {
    document.getElementById("morada1").disabled = false;
  } else {
    document.getElementById("morada1").disabled = true;
  }
   }
   
document.getElementById("nif1").addEventListener("click", EnableNif);

function EnableNif() {
    var disabled = document.getElementById("nif1").disabled;
  if (disabled) {
    document.getElementById("nif1").disabled = false;
  } else {
    document.getElementById("nif1").disabled = true;
  }
   }
   
document.getElementById("password1").addEventListener("click", EnablePass);

function EnablePass() {
    var disabled = document.getElementById("password1").disabled;
  if (disabled) {
    document.getElementById("password1").disabled = false;
  } else {
    document.getElementById("password1").disabled = true;
  }
   }
   
   
   
//CONSULTAR

window.onload = Semanaselected;

function Semanaselected() {
	document.getElementById("semana").style.backgroundColor = "#0061AE";
}

function Semananonselected() {
	document.getElementById("semana").style.background = "transparent";
}

function Messelected() {
	document.getElementById("mes").style.backgroundColor = "#0061AE";
}

function Mesnonselected() {
	document.getElementById("mes").style.background = "transparent";
}

function Anoselected() {
	document.getElementById("ano").style.backgroundColor = "#0061AE";
}

function Anononselected() {
	document.getElementById("ano").style.background = "transparent";
}


function showSemana() {
	let x = document.getElementById("semana_occ");
	let y = document.getElementById("mes_occ");
	let z = document.getElementById("ano_occ");
	if (x.style.visibility === "hidden") {
		x.style.visibility = "visible";
		y.style.visibility = "hidden";
		z.style.visibility = "hidden";
		Semanaselected();
		Mesnonselected();
		Anononselected();
	}
	else {
		x.style.visibility = "visible";
		y.style.visibility = "hidden";
		z.style.visibility = "hidden";
		Semanaselected();
		Mesnonselected();
		Anononselected();
	}
}

function showMes() {
	let x = document.getElementById("semana_occ");
	let y = document.getElementById("mes_occ");
	let z = document.getElementById("ano_occ");
	if (y.style.visibility === "hidden") {
		x.style.visibility = "hidden";
		y.style.visibility = "visible";
		z.style.visibility = "hidden";
		Messelected();
		Semananonselected();
		Anononselected();
	}
	else {
		x.style.visibility = "hidden";
		y.style.visibility = "visible";
		z.style.visibility = "hidden";
		Messelected();
		Semananonselected();
		Anononselected();
	}
}

function showAno() {
	let x = document.getElementById("semana_occ");
	let y = document.getElementById("mes_occ");
	let z = document.getElementById("ano_occ");
	if (z.style.visibility === "hidden") {
		x.style.visibility = "hidden";
		y.style.visibility = "hidden";
		z.style.visibility = "visible";
		Anoselected();
		Mesnonselected();
		Semananonselected();
	}
	else {
		x.style.visibility = "hidden";
		y.style.visibility = "hidden";
		z.style.visibility = "visible";
		Anoselected();
		Mesnonselected();
		Semananonselected();
	}
}



//function sendMail() {
    //var link = "mailto:joao10lemos10@gmail.com"
    //        + "mailfrom:soundscoutoficial@gmail.com"
      //       + "&subject=" + encodeURIComponent("Help")
        //     + "&body=" + encodeURIComponent(document.getElementById('myText').value)
    //;
    
    //window.location.href = link;
    
   // window.open('mailto:joao10lemos10@gmail.com.com?subject=help');
//}

let data;

function setup(){
    createCanvas(400,400);
    
}

//DASHBOARD

//FORMULARIO COLETIVO

window.onload = Coletivoselected;

function Individualselected() {
	document.getElementById("Individual").style.backgroundColor = "#0061AE";
}

function Individualnonselected() {
	document.getElementById("Individual").style.background = "transparent";
}

function Coletivoselected() {
	document.getElementById("Coletivo").style.backgroundColor = "#0061AE";
}

function Coletivononselected() {
	document.getElementById("Coletivo").style.background = "transparent";
}

function showIndividual() {
	let x = document.getElementById("form_individual");
	let y = document.getElementById("form_coletivo");
	if (x.style.visibility === "hidden") {
		x.style.visibility = "visible";
		y.style.visibility = "hidden";
		Individualselected();
		Coletivononselected();
	}
	else {
		x.style.visibility = "visible";
		y.style.visibility = "hidden";
		Individualselected();
		Coletivononselected();
	}
}

function showColetivo() {
	let x = document.getElementById("semana_occ");
	let y = document.getElementById("mes_occ");
	if (y.style.visibility === "hidden") {
		x.style.visibility = "hidden";
		y.style.visibility = "visible";
		Coletivoselected();
		Individualnonselected();
	}
	else {
		x.style.visibility = "hidden";
		y.style.visibility = "visible";
		Coletivoselected();
		Individualnonselected();
	}
}



//AVALIAÇÃO INDIVIDUAL

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 

slider.oninput = function() {
output.innerHTML = this.value;
}




//POP UP

function myFunction() {
  alert("Nova Ocorrência");
}


//Filter TablesConsultar Ocorrências

function myFunctionOccu() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("selecionarOccu");
  filter = input.value.toUpperCase();
  table = document.getElementById("OccuTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


//Filter Tables Registo Ocorrencias

function myFunctionTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("selecionarTable");
  filter = input.value.toUpperCase();
  table = document.getElementById("Table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
