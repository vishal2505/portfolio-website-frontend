// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_y8ay92d";
//     const templateID = "template_o48vsku";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }

// Replace with your own email.js user ID and email template ID


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const EMAILJS_SERVICE_ID = 'service_y8ay92d';
    const EMAILJS_TEMPLATE_ID = 'template_o48vsku';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log('Email sent successfully!', response);
        alert('Email sent successfully!');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
    });
});
