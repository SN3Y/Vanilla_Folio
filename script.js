const conocer = document.querySelector('.conocer');
const conocerSpan = document.querySelector('.conocerSpan');
const conocerMenu = document.querySelector('.conocerMenu');
const conocerOpen = document.querySelector('.check');
const menu = document.querySelector('.menu')
const conocerClose = document.querySelector('conocerClose');
const contacto = document.querySelector('.contacto');
const cerrar = document.querySelector('.close');
const modal = document.querySelector('.modalContainer');
const submitBotton = document.querySelector('formSubmit');


contacto.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('activeModal');
})

cerrar.addEventListener('click', ()=>{
    modal.classList.remove('activeModal');
})

conocer.addEventListener('click', (e)=>{
    e.preventDefault()
    conocer.classList.toggle('conocerHeight')
    conocerMenu.classList.toggle('activeClass');
    conocerMenu.addEventListener('mouseleave', ()=>{
        conocerMenu.classList.remove('activeClass');
    })
    
})
conocerOpen.addEventListener('click', ()=>{
    menu.classList.toggle('menuActive');
})

//sendMail Function
function validateForm(){
    const formName = document.getElementById("form_name").value
    const formEmail = document.getElementById("form_email").value
    const formMessage = document.getElementById("form_message").value

    if(formName==="" || formEmail==="" || formMessage===""){
        alert("Ingrese todos los datos requeridos")
        return false
    }else{
        sendMail()
        modal.classList.remove('activeModal');
    }
}
function sendMail(){

        var params ={

            from_name : document.getElementById("form_name").value,
            email_id : document.getElementById("form_email").value,
            message : document.getElementById("form_message").value
        }
        emailjs.send('service_yea3hks', 'template_yb5rgis', params).then(function res(e){
            alert("Mensaje Enviado " + e.status)
        }) ;            
}
        
               
            