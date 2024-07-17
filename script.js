function changeAboutMeText()
{
    const aboutMeTexts = ["Front End Developer", "Web developer", "Web Designer"]
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeElement = document.querySelector('.about-me');

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type()
    {
        const currentText = aboutMeTexts[textIndex];

        if (!isDeleting && charIndex < currentText.length)
        {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        }

        else if(isDeleting && charIndex > 0){
            aboutMeElement.textContent = currentText.substring(0, charIndex -1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }

        else{
            isDeleting = !isDeleting;
            if (!isDeleting){
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    type();
}


changeAboutMeText();



function disableScroll() {
    document.body.style.overflow = 'hidden';
}

function enableScroll() {
    document.body.style.overflow = 'auto';
}

document.getElementById('menu-toggle').addEventListener('click',function (){
    var nav = document.getElementById('menu');
    if (nav.classList.contains('hidden')){
        nav.classList.remove('hidden');
        nav.style.display = 'block';
        disableScroll();
    }
    else{
        nav.classList.add('hidden');
        nav.style.display = 'none';
        enableScroll();
    }
});



document.addEventListener('DOMContentLoaded', function () {
 
    var modals = {
        projmodal1: document.getElementById('projmodal1'),
        projmodal2: document.getElementById('projmodal2')
    };

 
    var buttons = document.querySelectorAll('.know-more');

 
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modalId = button.getAttribute('data-modal');
            modals[modalId].style.display = 'block';
            disableScroll();
        });
    });

 
    var spans = document.querySelectorAll('.close');

 
    spans.forEach(function (span) {
        span.addEventListener('click', function () {
            span.closest('.modal').style.display = 'none';
            enableScroll();
        });
    });

 
    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            enableScroll()
        }
    });
 
    var slideIndex = [1, 1];
    var slideId = ["projmodal1", "projmodal2"];
    showSlides(1, 0);
    showSlides(1, 1);

    function plusSlides(n, no) {
        showSlides(slideIndex[no] += n, no);
    }

    function showSlides(n, no) {
        var i;
        var x = document.querySelectorAll("#" + slideId[no] + " .mySlides");
        if (n > x.length) { slideIndex[no] = 1 }
        if (n < 1) { slideIndex[no] = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex[no] - 1].style.display = "block";
    }

    window.plusSlides = plusSlides;
});


document.addEventListener('scroll', function() {
    const section = document.getElementById('programming-lang');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        const progressBars = document.querySelectorAll('.progress-bar');

        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
            bar.style.opacity = 1;
        });
    }
});





(function() {
    emailjs.init('3FpLHeICW93CkaOIJ');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_3xzc83p', 'template_n6xhyva', this) 
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});
