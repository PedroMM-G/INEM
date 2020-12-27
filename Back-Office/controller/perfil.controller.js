//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os auditors
    refreshperfil(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("selecionar_perfil").onsubmit = function(e) {
        //validação do formulário ao submeter
        validator();
    }

    function saveperfil() {
        var data = {};
        //data.id_auditor = document.getElementById("").value;
        data.password = document.getElementById("password1").value;
        data.name = document.getElementById("nome1").value;
        //data.age = document.getElementById("p").value;
        //data.genre = document.getElementById("availability_mat").value;
        data.address = document.getElementById("morada1").value;
        data.cellphone = document.getElementById("nif1").value; //ATENÇAOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO MUDEI O NIF PARA TELE
        data.email = document.getElementById("email1").value;
        console.log(JSON.stringify(data));
        fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/auditors', {
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
                    alert("Duplicated auditors Code");
                }
                else {
                    throw Error(response.statusText);
                }
            }
            else {
                document.getElementById("email1").reset();
                document.getElementById("morada1").reset(); 
                document.getElementById("nif1").reset(); 
                document.getElementById("nome1").reset(); 
                document.getElementById("password1").reset(); 
                //limpeza dos dados do form
                alert("submitted with success");
                refreshauditors();
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }

    function deleteperfil() {
        let id = document.getElementById("delete_mat").value;
        console.log(JSON.stringify(data));
        fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/auditors' + id, {
            method: 'DELETE'
        }).then(function(response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                if (response.status === 409) {
                    alert("Duplicated auditors Code");
                }
                else {
                    throw Error(response.statusText);
                }
            }
            else {
                document.getElementById("dataTable").reset(); //limpeza dos dados do form
                alert("submitted with success");
                refreshauditors();
            }
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            alert("Submission error");
            console.error(err);
        });
    }

    function refreshperfil() {
        async function fetchAsync() {
            const renderperfil = document.getElementById("dataTable");
            let txt = "";
            const response = await fetch('https://8be6e272ea074b059952fa0fd08c59ee.vfs.cloud9.us-east-1.amazonaws.com/auditors');
            const auditors = await response.json();
            for (const newMat of auditors) {
                txt += "<tr><td style='text-align:right'>" + newMat.designation + "</td><td>" + newMat.availability + "</tr>";
            }
            txt += "</tbody></table>";
            renderperfil.innerHTML = txt;
        }
        //chama a função fetchAsync()
        fetchAsync().then(data => console.log("ok")).catch(reason => console.log(reason.message));
    }


    //função de validação
    function validator() {
        let validator = new Validator(document.querySelector('selecionar_perfil'), function(err, res) {
            if (res) {
                saveperfil();
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
};
