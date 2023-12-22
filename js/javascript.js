document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
    loadQuestions();
});


// * Products

const Products = document.querySelector('.show-products');

const loadProducts = () => {
    fetch('../json/products.json')
        .then(response => response.json())
        .then(products => showProducts(products.ourProducts));
}

const showProducts = (products) => {
    products.map(product => {


        let div1 = document.createElement('div');
        div1.setAttribute('class', 'product');

        let h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(product.title));

        let h4 = document.createElement('h4');
        h4.appendChild(document.createTextNode(product.price));

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'button');

        let a = document.createElement('a');
        a.setAttribute('class', 'btn-order');
        a.setAttribute('href', './pages/cart.html?product='+product.product_id);
        a.appendChild(document.createTextNode('Order Now'));
        div2.appendChild(a);

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
        div1.appendChild(div2);
        div1.appendChild(div3);

        Products.appendChild(div1);

    })



}

// * End Products




// * Questions
const accordion = document.querySelector('#accordion');


const loadQuestions = () => {
    fetch('../json/questions.json')
        .then(response => response.json())
        .then(questions => showQuestions(questions.questions))
}

const showQuestions = (questions) => {
    let num = 1;
    questions.map(data => {

        accordion.innerHTML += `
<div class="card mt-5 mb-5 ">
    <div class="card-header" id="heading${num}">
        <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${num}"
                aria-expanded="true" aria-controls="collapse${num}">
                 ${data.question}</button>
        </h5>
    </div>

    <div id="collapse${num}" class="collapse " aria-labelledby="heading${num}"" data-parent="#accordion">
        <div class="card-body">
            ${data.answer}
        </div>
    </div>
</div>`
        num++;
    })
    num = 1;
}
// * End Questions


