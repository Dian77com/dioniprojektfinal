let vleracheck=document.getElementsByClassName('in1');
    let button=document.getElementById('b1');

function f1() {
let currentOpacity = parseFloat(button.style.opacity) || 1; // Default to 1 if not set

if (currentOpacity === 0.9) {
    button.style.opacity = '0.2';
    button.disabled=true;
    button.style.cursor='not-allowed'

    
} else  {
    button.style.opacity = '0.9';
    button.disabled=false;
    button.style.cursor='pointer'
    button.addEventListener('click',function(){
        document.getElementsByClassName('info')[0].style.visibility='hidden';
    })
}
}

let emri=document.getElementById('name')
let gjatesia = emri.value.length;  


function f2() {
    let gjatesia = emri.value.length;  

    if (gjatesia >= 8) {
        emri.style.border = '1px solid #ddd';  
    } else {
        emri.style.border = '1px solid red'; 
    }
}

emri.addEventListener('input', f2);
let email = document.getElementById('email');
let eme = /[0-9]/.test(email.value); 

function f3() {
    let email = document.getElementById('email');
    let eme = /[0-9]/.test(email.value); 

    
    if (email.value.includes('@') && eme && email.value.includes('gmail.com') ) {
        email.style.border = '1px solid #ddd';  
    } else {
        email.style.border = '1px solid red';  
    }
}
email.addEventListener('input',f3)
let message=document.getElementById('message');

let gjatesia3=message.value.length;

function f4(){
let message=document.getElementById('message');

let gjatesia3=message.value.length;

if( gjatesia3>=1 ){
    message.style.border = '1px solid #ddd'; 



}



else{
    message.style.border = '1px solid red';  


}
}
message.addEventListener('input',f4)



