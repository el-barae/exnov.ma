//JavaScript code for the scroll-to-top button
var scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function() {
    scrollToTop(1000);
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval);
        },15);
}

window.addEventListener('scroll', function() {
    var whatsappButton = document.getElementById('whatsapp');
    var scrollPosition = window.scrollY;
    if (scrollPosition < 300) {
        whatsappButton.style.display = 'none'; // Hide the button if scroll position is less than 300 pixels
    } else {
        whatsappButton.style.display = 'inline-block'; // Show the button otherwise
    }
});

/* window.addEventListener('DOMContentLoaded', function() {
   whatsappButton.style.display = 'none';
   setTimeout(function() {
       whatsappButton.style.display = 'inline-block'; // Show the button after 5 seconds
   }, 5000);
});*/
//nav
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
//JavaScript code for the smoothscroll
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var aboutLink = document.querySelector('a[href="#about"]');
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#about', 1000);
});

var servicesLink = document.querySelector('a[href="#nos-services"]');
servicesLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#nos-services', 1000);
});

var teamLink = document.querySelector('a[href="#points-forts"]');
teamLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#points-forts', 1000);
});

var contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#contact', 1000);
});

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;
//slidesCount = 2;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

/* Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;*/

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

    // Create The LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
//document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();

    }

}

// Trigger The Checker Function
//theChecker();

// Next Slide Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {

        currentSlide++;

        theChecker();

    }

}

// Previous Slide Function
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

        // Do Nothing
        return false;

    } else {

        currentSlide--;

        theChecker();

    }

}

// Create The Checker Function
function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');

    // Check if Current Slide is The First
    if (currentSlide == 1) {

        // Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');

    } else {

        // Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled');

    }

    // Check if Current Slide is The Last
    if (currentSlide == slidesCount) {

        // Add Disabled Class on Next Button
        nextButton.classList.add('disabled');

    } else {

        // Remove Disabled Class From Next Button
        nextButton.classList.remove('disabled');

    }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');

    });

    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });

}

function submitEmailForm(form) {
    var obj = new XMLHttpRequest();
    obj.onreadystatechange = function(){
        if(obj.readyState == 4){
            if(obj.status == 200){
                var res = JSON.parse(obj.responseText);
                alert("Email sent successfully!");
            }
            else{
                alert("XMLHttp status " + obj.status + ": " + obj.statusText);
            }
        }
    };
    obj.open("post", form.action, true);
    obj.setRequestHeader("Content-Type", "application/json");
    obj.send(JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value }));
    return false;
}