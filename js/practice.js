/* Primer tipo de funcion: estandar ----> estructura que menos se utiliza */

function standar(){
    let name_save = document.getElementById("user_name").value
    let lastname_save = document.getElementById("lastname").value
    console.log(name_save, lastname_save);
};

/* Estructura anonima o clousure  */
const function_clousure = function(){
    console.log('Ejecutando la funcion anonima')
};

/* Funcion flecha  */
const function_arrow = ()=>{console.log('Ejecutando arrow function')}

const age_validate = ()=>{
    let user_age = document.getElementById("user_age").value
    if(user_age < 18)
        console.log('user es menor de edad')
    else console.log('User es mayor de edad')
};
/* Function 2 */
const age_validate2=()=> {
   document.getElementById("user_age").value < 18 ? console.log('User es menor de edad') : console.log('User es mayor de edad')
};
