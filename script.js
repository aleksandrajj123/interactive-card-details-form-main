const name = document.getElementById('name');
const number = document.getElementById('nr');
const exp = document.getElementById('date');
const cvc = document.getElementById('nrcvc');

function validation(){
    
    if (isNaN(number.value)){
        const nr_error = document.getElementById('error_number')
        nr_error.style.display = "contents"
    }

    if (exp.value === null){
        const date_error = document.getElementById('error_exp')
        date_error.style.display = "contents"
    }

};

const form = document.getElementById("form")
form.addEventListener('submit', (element)=>{
    
    validation()

})
