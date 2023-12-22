// *  Message
const form = document.querySelector('form')
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateinputs();
});

const setError = (element) => {
    element.classList.remove('border');
    element.classList.add('error');
    element.classList.remove('success');
   
}
const setSuccess = element => {
    element.classList.remove('border');
    element.classList.add('success');
    element.classList.remove('error');
  
}

const validateinputs = () => {

    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();
    var regex = new RegExp('\\d{8}$');

    if (nameValue == '') {

        setError(fullname);
    } else  if (nameValue.length < 3 ) {
        setError(fullname);
    } else{
        setSuccess(fullname);
    
    }


    if (emailValue == '') {

        setError(email);
    } else {
        setSuccess(email);
    }

    if (phoneValue == '') {

        setError(phone);
    }  else if(!regex.test(phoneValue)){

        setError(phone);
    }else {
        setSuccess(phone);
    }


    if (messageValue == '') {

        setError(message);
    } else {
        setSuccess(message);
    }
}



// *  End Message

