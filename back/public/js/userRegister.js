window.addEventListener("load", function () {
    const form = document.querySelector(".create-form");
    const inputProfileImage = document.querySelector("#profileImage");
    const inputNombre = document.querySelector("#nombre");
    const inputEmail = document.querySelector("#email");
    const inputContrasenia = document.querySelector("#contrasenia");
    const inputConfirmarContrasenia = document.querySelector("#confirmarContrasenia");


    inputProfileImage.addEventListener("mouseover",()=>{  
        
        let errorImage = document.querySelector(".errorImage")
        if(inputProfileImage.value == ""){
            errorImage.innerHTML = "Debe cargar una imágen"
        } 
    });    

    inputProfileImage.addEventListener("change", () => {   
        let errorImage = document.querySelector(".errorImage")        
        if (inputProfileImage.value != "") {
            let acceptedExtensions = ['jpg' , 'gif' , 'png', 'jpeg'];
            let fileExtension = inputProfileImage.value.split(".").pop();
            if (!acceptedExtensions.includes(fileExtension)) {
                errorImage.innerHTML = "Las extensiones de archivo permitidas son .jpg , .gif , .png , .jpeg"
            }else{
                errorImage.innerHTML = " "
            }
        } 
    });

    inputNombre.addEventListener("keyup", () => {
        let errorName = document.querySelector(".errorName")
        if (inputNombre.value.length < 2) {
            errorName.innerHTML = "El nombre debe tener al menos dos caracteres"
        } else {
            errorName.innerHTML = " "
    }});

    inputNombre.addEventListener("blur", () => {        
        let errorName = document.querySelector(".errorName")
        if (inputNombre.value == "") {
                errorName.innerHTML = "Debes completar este campo"
        } else if (inputNombre.value.length < 2) {
                errorEmail.innerHTML = "El nombre debe tener al menos dos caracteres" 
        } else {
                errorEmail.innerHTML = " "
        }}); 
    
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
        if (inputContrasenia.value.length < 8) {
            errorPassword.innerHTML = "La contraseña debe tener al menos ocho caracteres"              
        } else {
            errorPassword.innerHTML = " "
        }});

    inputContrasenia.addEventListener("blur", () => {        
        let errorPassword = document.querySelector(".errorPassword")
            if (inputContrasenia.value == "") {
                    errorPassword.innerHTML = "Debes completar este campo"
            } else if (inputContrasenia.value.length < 8 ) {
                    errorEmail.innerHTML = "La contraseña debe tener al menos ocho caracteres" 
            } else {
                    errorEmail.innerHTML = " "
            }
        }
    );   

    inputConfirmarContrasenia.addEventListener("keyup", () => {
        let errorConfirmPassword = document.querySelector(".errorConfirmPassword") 
        if (inputConfirmarContrasenia.value.length < 8) {
            errorConfirmPassword.innerHTML = "La contraseña debe tener al menos ocho caracteres"              
        } else {
            errorConfirmPassword.innerHTML = " "
        }});

    inputConfirmarContrasenia.addEventListener("blur", () => {        
        let errorConfirmPassword = document.querySelector(".errorConfirmPassword")
        if (inputConfirmarContrasenia.value == "") {
                        errorConfirmPassword.innerHTML = "Debes completar este campo"
        } else if (inputConfirmarContrasenia.value.length < 8 ) {
                        errorConfirmPassword.innerHTML = "La contraseña debe tener al menos ocho caracteres" 
        } else if(inputConfirmarContrasenia.value != inputContrasenia.value ){
                        errorConfirmPassword.innerHTML = "Debe coincidir con la contraseña"
        } else {
                        errorConfirmPassword.innerHTML = " "
        }
    });   

    //form.addEventListener("submit", (e) => {
    //   e.preventDefault();
    //});
    })
        

    
        
    



