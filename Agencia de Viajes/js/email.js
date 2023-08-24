
// form:
const btn_send = document.getElementById("btn_submit")


document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_qdvahw8'; 
    btn_send.value = "Enviando Email"

    emailjs.sendForm(serviceID,templateID, this)
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
            swal({
            title: "Good job!",
            text: "Mensaje enviado!",
            icon: "success",
            button: "Listo!",
            });        
        }, function(err) {
            console.log('FAILED')
            swal({
            title: "Good job!",
            text: "Error inesperado al enviar el mensaje :(",
            icon: "error",
            button: "Aww yiss!",
            });
        });
})


