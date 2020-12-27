//quando inicia a página faz

window.onload = function() {
    //chama a função para atualizar os occurrences
    refreshoccurrences(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("selecionar_occurrence").onsubmit = function(e) {
        //validação do formulário ao submeter
        validator();
    }

    function saveoccurrences() {
        var data = {};
        data.cod_occurence = document.getElementById("cod_occurence").value;
        data.id_request = document.getElementById("id_request_occurence").value;
        data.departure_time = document.getElementById("departure_time_occurence").value;
        data.arrival_time = document.getElementById("arrival_time_occurence").value;
        data.n_casualties = document.getElementById("n_casualties_occurence").value;
        data.body.n_ingered = document.getElementById("body.n_ingered_occurence").value;
        data.location = document.getElementById("location_occurence").value;
        data.terrain_state = document.getElementById("terrain_state_occurence").value;
        data.total_cost = document.getElementById("total_cost_occurence").value;
        data.notes = document.getElementById("notes_occurences").value;
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/occurrences', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                if (response.status === 409) {
                    alert("Duplicated occurrences Code");
                }
                else {
                    throw Error(response.statusText);
                }
            }
            else {
                document.getElementById("OccuTable").reset(); //limpeza dos dados do form METER A NOSSA TABELA
                alert("submitted with success");
                refreshoccurrences();
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }

  function refreshoccurrences() {
            async function fetchAsync() {
                const renderoccurrences = document.getElementById("OccuTable");
                let txt = "";
                const response = await fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/occurrences');
                const occurrences = await response.json();
                txt += "<table class='table'>";
                txt += "<thead>";
                txt += "<tr><th>Nº</th><th>Cidade</th><th>Data</th><th>Hora</th></tr></thead><tbody>";
                for (const newOccu of occurrences) {
                    txt += "<tr><td style='text-align:right'>" + newOccu.cod_occurence + "</td><td>" + newOccu.location + "</td><td>" + newOccu.departure_time + "</td><td>" + newOccu.arrival_time + "</td>" + "</tr>";
                }
                txt += "</tbody></table>";
                renderoccurrences.innerHTML = txt;
            }
            //chama a função fetchAsync()
            fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
        }
  
  
;

//função de validação
function validator() {
    let validator = new Validator(document.querySelector('selecionar_occurrence'), function(err, res) {
        if (res) {
            saveoccurrences();
        }
    }, {
        rules: {
            password: function(value) {
                return (value === document.getElementById("pwd").value);
            }
        },
        messages: {
            en: {
                password: {
                    incorrect: "Password didn't match"
                }
            }
        }
    });
}
}; //quando inicia a página faz

function deleteoccurrences(){
    let id= document.getElementById("delete_occur").value;
    console.log(JSON.stringify(data));
    fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/occurrences'+ id, {
        method: 'DELETE'
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100–599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
            if (response.status === 409) {
                alert("Duplicated Material Code");
            }
            else {
                throw Error(response.statusText);
            }
        }
        else {
            document.getElementById("OccuTable").reset(); //limpeza dos dados do form
            alert("submitted with success");
            refreshoccurrences();
        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        alert("Submission error");
        console.error(err);
    });
}