let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackgroud(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booInt = isOdd ? -1 : 1;
        console.log(isOdd)
        shapes[i].style.transform = `translate(${x*booInt}px, ${y*booInt}px)`
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList +=  " dark-theme";
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_xlo1flc',
            'template_9r434nc',
            event.target,
            '-73NRh9fS8_Qo6i66'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is currently unavailable. Please contact me directly at reenad286@gmail.com"
            );
        })

}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}