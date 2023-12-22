// * Step-by-Step
const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');

let currentActive = 1;

function update() {

    for (let [idx, circle] of circles.entries()) {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }
    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length - 1) * 100 + '%');

}
// * End Step-by-Step




// * Show Product

document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    loadProducts(product);
});
let data;
const loadProducts = (id) => {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(products => showProduct(products.ourProducts[id]));

}
const myProduct = document.querySelector('#product');
const showProduct = (product) => {

    data = product;
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'product');

    let h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode(product.title));

    let h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(product.price));

    let div3 = document.createElement('div');
    div3.setAttribute('class', 'product-info');

    let ul = document.createElement('ul');
    for (let i = 0; i < product.explain.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(product.explain[i]));
        ul.appendChild(li);
    }
    div3.appendChild(ul);

    div1.appendChild(h3);
    div1.appendChild(h4);
    div1.appendChild(div3);

    myProduct.appendChild(div1);

}
// * End Show Product





// *  Form
const register = document.querySelector('#register')
const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const obj = {
    'name': false,
    'email': false,
    'phone': false,
}


register.addEventListener('submit', e => {
    e.preventDefault();

    validateRegister();
    if (obj.name && obj.email && obj.phone) {
        const fullNameValue = fullname.value.trim();
        const nameValue = fullNameValue.split(' ');
        localStorage.setItem('Name', nameValue[0]);
        showWebBrief();

    }
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

const validateRegister = () => {

    const nameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    var regex = new RegExp('\\d{8}$');

    if (nameValue == '') {

        setError(fullname);
    } else if (nameValue.length < 3) {
        setError(fullname);
    } else {
        setSuccess(fullname);
        obj.name = true;
    }

    if (emailValue == '') {

        setError(email);
    } else {
        setSuccess(email);
        obj.email = true;

    }

    if (phoneValue == '') {

        setError(phone);
    } else if (!regex.test(phoneValue)) {

        setError(phone);
    } else {
        setSuccess(phone);
        obj.phone = true;

    }

}



// * End Form



// * Web Breif
const information = document.querySelector('#information-cart');
const web_breif = document.querySelector('.web-breif');

const showWebBrief = () => {


    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
    const firstName = localStorage.getItem('Name');



    information.innerHTML = `
   
    <div id="box-web-breif" class="p-5 w-100">
    <h4 class="w-75">Hello, ${firstName}</h4>

    <form class="web-breif w-75 " action="cart.html" enctype="multipart/form-data">
        <label class="d-block mt-3" for="description">Please write complete about your Website
            <span>*</span></label>
        <textarea class="input w-100 border p-2" name="description" id="description" cols="30"
            rows="15"></textarea><br />
        <div id="error"></div>

        <label class="d-block mt-3" for="deadline">Project deadline <span>*</span></label>
        <input type="date" name="deadline" id="deadline" class="input w-100 border p-2">
        <div id="error"></div>

        <label class="d-block mt-3" for="page">Number of page <span>*</span></label>
        <input type="number" class="input w-100 border p-2" max=${data.page} name="page" id="page">
        <div id="error"></div>

        <label class="d-block mt-3" for="figma">If you have any idea please send a file</label>
        <input type="file" class="input w-100  d-block p-2" name="figma" id="figma">
        <div class="text-center">
            <input type="button" class="w-25 p-2 mt-4" id="btn-submit" onclick="addProject()"  value="Submit">
        </div>
     </form>
  </div>
    `
}
const productObj = {
    "description": false,
    "deadline": false,
    "page": false,

};
let product = [];

const addProject = () => {
    validateProduct();

    if (productObj.description && productObj.deadline && productObj.page) {

        localStorage.setItem('product',JSON.stringify( product));
        showPayment();

    }
}



const validateProduct = () => {
    const description = document.querySelector('#description');
    const deadline = document.querySelector('#deadline');
    const page = document.querySelector('#page');
    const figma = document.querySelector('#figma');
    const descriptionValue = description.value.trim();
    const deadlineValue = deadline.value.trim();
    const pageValue = page.value.trim();
    const figmaValue = figma.value.trim();



    if (descriptionValue == '') {

        setError(description);
    } else {
        setSuccess(description);
        productObj.description = true;
        product.push(descriptionValue);
    }

    if (deadlineValue == '') {

        setError(deadline);
    } else {
        setSuccess(deadline);
        productObj.deadline = true;
        product.push(deadlineValue);
    }

    if (pageValue == '') {

        setError(page);
    } else {
        setSuccess(page);
        productObj.page = true;
        product.push(pageValue);
    }
    product.push(figmaValue);
    product.push(data.product_id);
    product.push(data.title);
    product.push(data.price);
   
  

}

// * End Web Breif


const showPayment = () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
    localStorage
    const product=JSON.parse(localStorage.getItem('product'));
    const date=product[1];
    information.innerHTML = `
    <div id="start-project" class="text-center p-5">
    <h3 class="p-2" >Your Project has Started</h3>
    <h5>Your Project'll be ready before <span class="pl-1">${date}</span></h5>
 </div>
    `
}