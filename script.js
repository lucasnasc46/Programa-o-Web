function coleta(){

   // event.preventDefault(); // impede o envio do fomr
    var form = document.getElementById('formulario')
    var formData = new FormData(form); //criando um objeto para coletar os dados do form

   var res = document.getElementById('res')

    var info = "Nome: " +formData.get('fname') + "\nEmail: " + formData.get('fmail') + "\nTelefone: " + formData.get('ftel')

    var servicos = formData.getAll('service')
    info +="\n Serviços escolhidos: " + servicos.join(', ')

    var numberWs = '5581996793669'
    var msgws = encodeURIComponent(info)
    var apiWp = 'https://api.whatsapp.com/send?phone=' + numberWs + '&text=' + msgws;

    window.open(apiWp, '_blank')
    res.innerText= info
   
}