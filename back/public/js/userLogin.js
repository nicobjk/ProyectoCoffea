window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputEmail = document.querySelector("#email")   
    const inputContrasenia = document.querySelector("#contrasenia")
    
    const divErrores = document.querySelector(".errores")
    const ulErrores = this.document.querySelector(".ulErrores")

    inputEmail.focus()

    inputEmail.addEventListener("keyup", () => {        
        let errorEmail = document.querySelector(".errorEmail")
            if (!validator.isEmail(inputEmail.value)) {
                errorEmail.innerHTML = "Debe ingresar un email válido"
            } else {
                errorEmail.innerHTML = " "
    }});

    inputEmail.addEventListener("blur", () => {        
        let errorEmail = document.querySelector(".errorEmail")
            if (inputEmail.value == "") {
                errorEmail.innerHTML = "Debes completar este campo"
            } else if (!validator.isEmail(inputEmail.value)) {
                errorEmail.innerHTML = "Debe ingresar un email válido" 
            } else {
                errorEmail.innerHTML = " "
    }});
        
    inputContrasenia.addEventListener("keyup", () => {
        let errorPassword = document.querySelector(".errorPassword")
        if (inputContrasenia.value.length == "") {
            errorPassword.innerHTML = "Debe completar este campo"              
        } else {
            errorPassword.innerHTML = " "
    }});

    //form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //});
})

  
    