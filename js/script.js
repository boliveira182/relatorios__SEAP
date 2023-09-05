const selecao = document.getElementById("resultado");
const divDeferido = document.getElementById("deferido");
const divIndeferido = document.getElementById("indeferido");
alert("passou")


alert(selecao.value)
divDeferido.style.display = "none";
divIndeferido.style.display = "none";

selecao.addEventListener("change", () => {
  alert("entrou")
    if (selecao.value == "deferido") {
        divDeferido.style.display = "block"; // Habilita a div ao selecionar "Opção 1"
      } else {
        divDeferido.style.display = "none"; // Desabilita a div ao selecionar qualquer outra opção
    }
    if (selecao.value == "indeferido") {
        divIndeferido.style.display = "block"; // Habilita a div ao selecionar "Opção 1"
      } else {
        divIndeferido.style.display = "none"; // Desabilita a div ao selecionar qualquer outra opção
    }
});




const formulario = document.getElementById("form-register");
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const nomeDigitado = document.getElementById("nome").value;
    const matriculaSiape = document.getElementById("siape").value;
    const matriculaOrigem = document.getElementById("origem").value;
    const cargo = document.getElementById("cargo").value;
    const sexo =  document.getElementById("sexo").value;

    const usuario = {
      nome: nomeDigitado,
      matricula_siape: matriculaSiape,
      matricula_origem: matriculaOrigem,
      cargo: cargo,
      sexo: sexo
    };

    // Armazena os dados na sessionStorage
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
    
    // window.location.href = "./imprimir.html";
  });