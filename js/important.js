
// * Chatbot
const body = document.querySelector('body');
const chatbot_toggler = document.querySelector('.chatbot-toggler');
const chatbox = document.querySelector('.chatbox');

const chat_input = document.querySelector('.chat-input textarea');
const send_btn = document.querySelector('.chat-input  #send-btn');

let userMessage;
const API_KEY = "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";

chatbot_toggler.addEventListener('click', () => {
    if (body.classList.contains('show-chatbot')) {
        body.classList.remove('show-chatbot');
    } else {
        body.classList.add('show-chatbot');
    }


})

const showChatLi = (userMessage, className) => {

    const li = document.createElement('li');
    li.classList.add('chat', className);
    let chatContent = className === 'outgoing' ? `<p>${userMessage}</p>` : `<i class="fa-solid fa-robot"></i><p>${userMessage}</p>`;
    li.innerHTML = chatContent;
    chat_input.value = '';
    return li;
}



const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector('p');

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorizaion": `Bearer${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": userMessage
                }]
        })
    }

    fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(data => messageElement.textContent = data.choices[0].message.content)
        .catch(error => messageElement.textContent = 'Oops! Something went wrong. Please try again.')
}

send_btn.addEventListener('click', () => {
    userMessage = chat_input.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(showChatLi(userMessage, 'outgoing'));

    setTimeout(() => {
        const incomingChatLi = showChatLi('Thinking...', 'incoming');
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 500);


})

// * End Chatbot






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
