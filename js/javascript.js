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
        a.setAttribute('href', '#');
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



//-------------------------------------------------------------------------------
// * Gsap

gsap.registerPlugin(ScrollTrigger);

// * Animation Header'
const timeline = gsap.timeline();


timeline
    .from(".header-section", {
        x: '-150%',
        ease: "back",
        delay: 0.5,
        duratioin: 0.7

    })
    .from(".icon-1", {
        y: '100%',
        opacity: 0,
        ease: "sine",
        duratioin: 0.1
    })
    .from(".icon-2", {
        y: '100%',
        opacity: 0,
        ease: "sine",
        duratioin: 0.1
    })
    .from(".icon-3", {
        y: '100%',
        opacity: 0,
        ease: "sine",
        duratioin: 0.1
    })
    .from(".icon-4", {
        y: '100%',
        opacity: 0,
        ease: "sine",
        duratioin: 0.1
    });
// * End Animation Header


// * Animation Logo
let mm = gsap.matchMedia();
mm.add("(min-width:1000px)", () => {
    gsap.from(".box-logo", {
        x: '100%',
        duration: 1,
        ease: "sine",
        delay: 0.5,

    });

})
// * End Animation Logo



// * Animation Our projects

gsap.to(".our-projects", {

    scrollTrigger: {
        trigger: '.our-projects',
        start: "top top",
        end: "140% bottom",
        pin: ".our-projects",

    }


})

gsap.to(".projectBox1", {
    x: 300,

    scrollTrigger: {
        trigger: '.our-projects',
        start: "top top",
        end: "180% bottom ",
        scrub: 4,
        toggleActions: "restart none none none"

    }
})

gsap.to(".projectBox2", {
    x: -200,

    scrollTrigger: {
        trigger: '.our-projects',
        start: "top top",
        end: "180% bottom ",
        scrub: 4,
        toggleActions: "restart none none none"

    }


})

gsap.matchMedia("(max-width:1000px)", () => {
    gsap.to(".box1", {
        x: 600,

        scrollTrigger: {
            trigger: '.our-projects',
            start: "top top",
            end: "180% bottom ",
            scrub: 4,
            toggleActions: "restart none none none"

        }
    })

    gsap.to(".box2", {
        x: -400,

        scrollTrigger: {
            trigger: '.our-projects',
            start: "top top",
            end: "180% bottom ",
            scrub: 4,
            toggleActions: "restart none none none"

        }


    })
})
// * End Animation Our projects





// * Animation Questions


ScrollTrigger.matchMedia({
    "(min-width: 767px)": function () {
        gsap.to(".askQuestions", {
            scrollTrigger: {
                trigger: '.askQuestions',
                start: "top top",
                end: "86% 60% ",
                pin: ".questionsTitle-h2",
            }
        })
    }
});


// * End Animation Questions



// * Animation Contact Us
ScrollTrigger.matchMedia({
    "(min-width: 575px)": function () {
        gsap.to(".mainSection", {
            scrollTrigger: {
                trigger: '.mainSection',
                start: "top top",
                end: "bottom bottom",
                pin: ".box-left",
            }
        })
    }
});


// * End Animation Contact Us


// * End Gsap
