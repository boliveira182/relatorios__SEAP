jQuery.noConflict()(function($){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Anterior',
            next : 'Próximo',
            finish : 'Enviar',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 

            if (currentIndex === 0) {
                if (!$('#cargo').val() || !$('#name').val() || !$('#assunto').val()|| !$('#matricula_siape').val() || !$('#matricula_origem').val() || !$('#sexo').val()) {
                    alert('Por favor, preencha todos os campos do Passo 1.');
                    return false;
                }
            }
            if (currentIndex === 1) {
                if (!$('#resultado').val() || !$('#assinante').val()) {
                    alert('Por favor, preencha todos os campos do Passo 2.');
                    return false;
                }

                if ($('#resultado').val() =="deferido") {
                    if (!$('#data').val() || !$('#fundamento').val()) {
                        alert('Por favor, preencha todos os campos do Passo 2.');
                        return false;
                    }
                }

                if ($('#resultado').val() =="indeferido") {
                    if (!$('#estimativa').val() || !$('#fundamento_indeferido').val()) {
                        alert('Por favor, preencha todos os campos do Passo 2.');
                        return false;
                    }
                }
            }

            var fullname = $('#name').val();
            var assunto = $('#assunto').val();
            var matricula_siape = $('#matricula_siape').val();
            var matricula_origem = $('#matricula_origem').val();
            var cargo = $('#cargo').val();
            var sexo = $('#sexo').val();
            var assinante = $('#assinante').val();
            var resultado = $('#resultado').val();

            $('#fullname-val').text(fullname);
            $('#matricula_siape-val').text(matricula_siape);
            $('#matricula_origem-val').text(matricula_origem);
            $('#cargo-val').text(cargo);
            $('#assunto-val').text(assunto);
            $('#sexo-val').text(sexo);
            $('#assinante__def-val').text(assinante);
            $('#assinante__indef-val').text(assinante);
            $('#result-val').text(resultado);
            $('#resultado-val').text(resultado);

            

            return true;
        },
        onFinished: function (event, currentIndex) {
            $("#form-total").submit();
        }
    });

    $("#deferido").css("display","none")
    $("#indeferido").css("display","none")
    $("#deferido_result").css("display","none")
    $("#indeferido_result").css("display","none")

    $( "#resultado" ).on( "change", function(event) {
        if (event.target.value == "deferido") {
            $("#deferido").css("display","block")
            $("#deferido_result").css("display","block")
            var resultado = "Deferido"
        }else{
            $("#deferido").css("display","none")
            $("#deferido_result").css("display","none")
            var resultado = "Indeferido"
        }
        if (event.target.value == "indeferido") {
            $("#indeferido").css("display","block")
            $("#indeferido_result").css("display","block")
            var resultado = "Indeferido"
        }else{
            $("#indeferido").css("display","none")
            $("#indeferido_result").css("display","none")
            var resultado = "Deferido"
        }
        $('#resultado-val').text(resultado);  
    } );

    $( "#fundamento" ).on( "change", function(event) {
        var fundamento = $('#fundamento').val();
        $('#fundamento-val').text(fundamento);
    } );

    $( "#fundamento_indeferido" ).on( "change", function(event) {
        var fundamento_indeferido = $('#fundamento_indeferido').val();
        $('#fundamento_indeferido-val').text(fundamento_indeferido);
    } );

    $( "#data" ).on( "change", function(event) {
        var selectedDate = $('#data').val();
        // Convertendo a data para o formato dia/mês/ano
        var dateParts = selectedDate.split('-');
        var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        $('#data-val').text(formattedDate);

    } );

    $( "#estimativa" ).on( "change", function(event) {
        var selectedDate = $('#estimativa').val();
        // Convertendo a data para o formato dia/mês/ano
        var dateParts = selectedDate.split('-');
        var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        $('#estimativa-val').text(formattedDate);

    } );



    $("form").submit(function(event){
        event.preventDefault();
        var fullname = $('#name').val();
        var assunto = $('#assunto').val();
        var matricula_siape = $('#matricula_siape').val();
        var matricula_origem = $('#matricula_origem').val();
        var cargo = $('#cargo').val();
        var sexo = $('#sexo').val();
        var assinante = $('#assinante').val();
        var resultado = $('#resultado').val();

        if(resultado =="deferido"){
            var fundamento =  $('#fundamento').val();
            var selectedDate = $('#data').val();
            // Convertendo a data para o formato dia/mês/ano
            var dateParts = selectedDate.split('-');
            var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        }else{
            var fundamento =  $('#fundamento_indeferido').val();
            var selectedDate = $('#estimativa').val();
            // Convertendo a data para o formato dia/mês/ano
            var dateParts = selectedDate.split('-');
            var formattedDate = dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0];
        }

        const dados = {
            nome: fullname,
            assunto: assunto,
            matricula_siape: matricula_siape,
            matricula_origem: matricula_origem,
            cargo: cargo,
            sexo: sexo,
            resultado: resultado,
            assinante: assinante,
            fundamento: fundamento,
            data: formattedDate,
          };

        // Convertendo o objeto para uma string JSON
        var jsonData = JSON.stringify(dados);

        // Armazena os dados na sessionStorage
        sessionStorage.setItem("usuario", jsonData);

        if (resultado=="indeferido") {
            window.location.href = "./imprimir.html";
        }else{
            window.location.href = "./imprimir_def.html";
        }
        
      });



});


