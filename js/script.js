// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// Toggle content based on button clicks
const educationBtn = document.getElementById('educationBtn');
const certificationsBtn = document.getElementById('certificationsBtn');
const educationContent = document.getElementById('educationContent');
const certificationsContent = document.getElementById('certificationsContent');

educationBtn.addEventListener('click', () => {
    educationBtn.classList.add('active');
    certificationsBtn.classList.remove('active');
    educationContent.style.display = 'block';
    certificationsContent.style.display = 'none';
});

certificationsBtn.addEventListener('click', () => {
    certificationsBtn.classList.add('active');
    educationBtn.classList.remove('active');
    certificationsContent.style.display = 'block';
    educationContent.style.display = 'none';
});

// Initially show education content
educationContent.style.display = 'block';

// Javascvript code for calling api and getting the visitor count from backend

document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch visitor count from the API (replace with your actual API endpoint)
    async function fetchVisitorCount() {
        try {

			// TODO

            const response = await fetch('https://aheys2titghqxzulspfbisjhpm0dzrcd.lambda-url.us-east-1.on.aws/');
            
            const data = await response.json();
			
            // Assuming the API returns an object with a 'count' property
            //const visitorCount = data.count || 0;

			// Below code need to be removed once api is developed
			//const response = {
			//	count: 100, //  mock visitor count
			//};

			//const visitorCount  = response.count
			// until this point - code need to be removed
            
            // Display the visitor count on the webpage
            const visitorCounter = document.getElementById('visitor-counter');
            visitorCounter.textContent = `Total Visitors: ${data}`;
        } catch (error) {
            console.error('Error fetching visitor count:', error);
            
            // Handle errors, e.g., display a default value
            const visitorCounter = document.getElementById('visitor-counter');
            visitorCounter.textContent = 'Unable to fetch visitor count';
        }
    }

    // Call the fetchVisitorCount function when the page loads
    fetchVisitorCount();
});

