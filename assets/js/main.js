;
(function($) {

    $(document).ready(function() {
        $(document).on('click', '.header-area .show-menu', function() {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
div.id = "preloader",
    div.className = "preloader",
    div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div, document.body.firstChild), window.onload = function() {
        document.getElementById("preloader").classList.add("off")
    };

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
    
        const data = {
            fullName,
            email,
            subject,
            message
        };
    
        fetch('https://mail-sender-zeta.vercel.app/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text()) 
        .then(result => {
            console.log(result, "result");
  
            const successMsg = document.querySelector('.alert-success');
            console.log(successMsg, "successMsg");
    
            successMsg.style.display = 'block';
            successMsg.innerText = 'Your message was sent successfully.';
    
            // Hide the success message after 2 seconds
            document.getElementById('contactForm').reset();

            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 2000);
        })
        
        .catch(error => {
            console.error('Error:', error);
            const successMsg = document.querySelector('.alert-danger');
    
            successMsg.style.display = 'block';
            successMsg.innerText = 'There was an error sending your message. Please try again..';
    
            // Hide the success message after 2 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 2000);
        });
    });
    