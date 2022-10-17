window.addEventListener("load", function(){
    const form= document.querySelector(".create-form")      
    const inputNombre = document.querySelector("#nombre")  
    const inputPrecio = document.querySelector("#precio") 
    const inputDescripcion = document.querySelector("#descripcion") 
    const inputImagenProducto = document.querySelector("#imagenProducto")      
    const divErrores = document.querySelector(".errores")
    const ulErrores = document.querySelector(".ulErrores")

    inputNombre.focus()   
    
    inputImagenProducto.addEventListener("mouseover",()=>{  
        
        let errorImage = document.querySelector(".errorImage")
        if(inputImagenProducto.value == ""){
            errorImage.innerHTML = "Debe cargar una imágen"
        } 
    });    

    inputImagenProducto.addEventListener("change", () => {   
        let errorImage = document.querySelector(".errorImage")        
        if (inputImagenProducto.value != "") {
            let acceptedExtensions = ['jpg' , 'gif' , 'png', 'jpeg'];
            let fileExtension = inputImagenProducto.value.split(".").pop();
            if (!acceptedExtensions.includes(fileExtension)) {
                errorImage.innerHTML = "Las extensiones de archivo permitidas son .jpg , .gif , .png , .jpeg"
            }else{
                errorImage.innerHTML = " "
            }
        } 
    });

    inputNombre.addEventListener("keyup", () => {
        let errorName = document.querySelector(".errorName")
        if (inputNombre.value.length < 5) {
            errorName.innerHTML = "El nombre debe tener al menos cinco caracteres"           
        } else {
            errorName.innerHTML = " "
        }});

    inputDescripcion.addEventListener("keyup", () => {
        let errorDescription = document.querySelector(".errorDescription")
        if (inputDescripcion.value.length < 20) {
           errorDescription.innerHTML = "El nombre debe tener al menos veinte caracteres"
        } else {
            errorDescription.innerHTML = " "
        }});
    
    //form.addEventListener("submit", (e) => {
    //    e.preventDefault();
    //});
    }) 
    
    