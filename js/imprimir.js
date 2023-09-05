
const nomeUsuario = document.getElementsByClassName("nomeUsuario");
const siapeUsuario = document.getElementById("siapeUsuario");
const origemUsuario = document.getElementById("origemUsuario");
const cargoUsuario = document.getElementById("cargoUsuario");
const pronome = document.getElementsByClassName("pronome");
const pronome2 = document.getElementsByClassName("pronome2");
const meu__assunto = document.getElementById("assunto");
const data = document.getElementById("dataBeneficio");
const assinatura = document.getElementById("assinatura");
const fundamentoAbono = document.getElementById("fundamento");


  // Verifica se os dados estão armazenados na sessionStorage
  if (sessionStorage.getItem("usuario")) {
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    const nome= usuario.nome;
    const matriculaOrigem = usuario.matricula_origem;
    const matriculaSiape = usuario.matricula_siape;
    const cargo = usuario.cargo;
    const sexo = usuario.sexo;
    const assunto = usuario.assunto;
    const dataBeneficio = usuario.data;
    var fundamento = usuario.fundamento;
    const assinante = usuario.assinante;
    const resultado = usuario.resultado;

    if (resultado == "deferido") {
      const fundamento__1 = document.getElementById("049006");
      fundamento__1.style.display = "none";

      const fundamento__2 = document.getElementById("049008");
      fundamento__2.style.display = "none";

      const fundamento__3 = document.getElementById("049010");
      fundamento__3.style.display = "none";

      const fundamento__4 = document.getElementById("049021");
      fundamento__4.style.display = "none";

      const fundamento__5 = document.getElementById("049023");
      fundamento__5.style.display = "none";

      const fundamento__6 = document.getElementById("049027");
      fundamento__6.style.display = "none";

      const fundamento__7 = document.getElementById("049034");
      fundamento__7.style.display = "none";

      const fundamento__8 = document.getElementById("049036");
      fundamento__8.style.display = "none";
    }

    for (let index = 0; index < nomeUsuario.length; index++) {
      nomeUsuario[index].innerHTML = nome;
    }


    if(sexo =="feminino"){
      pronome.innerHTML = "servidora";
      pronome2.innerHTML = "a supracitada servidora";


      for (let index = 0; index < pronome.length; index++) {
        if(index === 0){
          pronome[index].innerHTML = "Servidora";
        }
        else{
          pronome[index].innerHTML = "a servidora";
        }
      }

      for (let index = 0; index < pronome2.length; index++) {
        pronome2[index].innerHTML = "a supracitada servidora";
        
      }

    }
    else{
      for (let index = 0; index < pronome.length; index++) {
        if(index === 0){
          pronome[index].innerHTML = "Servidor";
        }
        else{
          pronome[index].innerHTML = "o servidor";
        }
      }

      for (let index = 0; index < pronome2.length; index++) {
        pronome2[index].innerHTML = "o supracitado servidor";
        
      }
    }

    if (fundamento == "049006") {
      const fundamento__1 = document.getElementById("049006");
      fundamento__1.style.display = "block";
      fundamento = "art. 3° da Emenda Constitucional n° 103/2019, nos termos do art. 2º, incisos I, II e III, §1º, inciso II da Emenda Constitucional Nº 41/2003";
    }
    if (fundamento == "049008") {
      const fundamento__2 = document.getElementById("049008");
      fundamento__2.style.display = "block";
      fundamento = "art. 3° da Emenda Constitucional n° 103/2019, nos termos do art. 6º, incisos I, II, III e IV da Emenda Constitucional Nº 41/2003"
    }
    if (fundamento == "049010") {
      const fundamento__3 = document.getElementById("049010");
      fundamento__3.style.display = "block";
      fundamento = "art. 3° da Emenda Constitucional n° 103/2019, nos termos do art. 3° da Emenda Constitucional n° 47/2005";
    }
    if (fundamento == "049021") {
      const fundamento__4 = document.getElementById("049021");
      fundamento__4.style.display = "block";
      fundamento = "Art. 4°, § 6°, inciso II, da EC N° 103/2019";
    }
    if (fundamento == "049023") {
      const fundamento__5 = document.getElementById("049023");
      fundamento__5.style.display = "block";
      fundamento = "Art. 4°, § 6°, inciso I, da EC N° 103/2019";
    }
    if (fundamento == "049027") {
      const fundamento__6 = document.getElementById("049027");
      fundamento__6.style.display = "block";
      fundamento = "Art. 10°, § 1°, inciso I, da EC N° 103/2019";
    }
    if (fundamento == "049034") {
      const fundamento__7 = document.getElementById("049034");
      fundamento__7.style.display = "block";
      fundamento = "Art. 20°, § 2°, inciso I, da EC N° 103/2019";
    }
    if (fundamento == "049036") {
      const fundamento__8 = document.getElementById("049036");
      fundamento__8.style.display = "block";
      fundamento = "Art. 20°, § 2°, inciso II, da EC N° 103/2019";
    }

    meu__assunto.innerHTML = assunto;    
    siapeUsuario.innerHTML = matriculaSiape;
    origemUsuario.innerHTML = matriculaOrigem;
    cargoUsuario.innerHTML = cargo;
    data.innerHTML = dataBeneficio;
    assinatura.innerHTML = assinante;
    fundamentoAbono.innerHTML = fundamento;
   
  } 


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();

document.getElementById("data__atual").innerHTML = day + "/" + month + "/" + year;