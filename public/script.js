// const highlightsSection = document.getElementById('highlights');
// const highlightItems = document.querySelectorAll('.highlight-item');
// const titleElement = document.querySelector('#highlights h2');
// const images = document.querySelectorAll('#highlights .highlight-image');

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('animate-fade-in');
//         if (entry.target.classList.contains('highlight-item')) {
//           entry.target.classList.add('animate-slide-in-left');
//         }
//         if (entry.target.classList.contains('highlight-image')) {
//           entry.target.classList.add('animate-zoom-in');
//         }
//       } else {
//         entry.target.classList.remove('animate-fade-in');
//         entry.target.classList.remove('animate-slide-in-left');
//         entry.target.classList.remove('animate-zoom-in');
//       }
//     });
//   },
//   {
//     threshold: 0.2, // Trigger the animation when the element is 20% visible
//   }
// );

// observer.observe(highlightsSection);
// highlightItems.forEach((item) => observer.observe(item));
// observer.observe(titleElement);
// images.forEach((image) => observer.observe(image));


// //JavaScript code for the scroll-to-top button
// var scrollToTopButton = document.getElementById("scroll-to-top");

// window.addEventListener("scroll", function() {
//     if (window.pageYOffset > 300) {
//         scrollToTopButton.style.display = "block";
//     } else {
//         scrollToTopButton.style.display = "none";
//     }
// });

// scrollToTopButton.addEventListener("click", function() {
//     scrollToTop(1000);
// });

// function scrollToTop(scrollDuration) {
//     var scrollStep = -window.scrollY / (scrollDuration / 15),
//         scrollInterval = setInterval(function(){
//             if ( window.scrollY != 0 ) {
//                 window.scrollBy( 0, scrollStep );
//             }
//             else clearInterval(scrollInterval);
//         },15);
// }

// /* window.addEventListener('DOMContentLoaded', function() {
//    whatsappButton.style.display = 'none';
//    setTimeout(function() {
//        whatsappButton.style.display = 'inline-block'; // Show the button after 5 seconds
//    }, 5000);
// });*/
// //nav
// function toggleMobileMenu(menu) {
//     menu.classList.toggle('open');
// }
// //JavaScript code for the smoothscroll
// function smoothScroll(target, duration) {
//     var targetElement = document.querySelector(target);
//     var targetPosition = targetElement.offsetTop;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }
//     requestAnimationFrame(animation);
// }

// var aboutLink = document.querySelector('a[href="#about"]');
// aboutLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScroll('#about', 1000);
// });

// var servicesLink = document.querySelector('a[href="#nos-services"]');
// servicesLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScroll('#nos-services', 1000);
// });

// var teamLink = document.querySelector('a[href="#points-forts"]');
// teamLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScroll('#points-forts', 1000);
// });

// var contactLink = document.querySelector('a[href="#contact"]');
// contactLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     smoothScroll('#contact', 1000);
// });

// // Get Slider Items | Array.form [ES6 Feature]
// var sliderImages = Array.from(document.querySelectorAll('.slider img'));

// // Get Number Of Slides
// var slidesCount = sliderImages.length;
// //slidesCount = 2;

// // Set Current Slide
// var currentSlide = 1;

// // Slide Number Element
// var slideNumberElement = document.getElementById('slide-number');

// // Previous and Next Buttons
// var nextButton = document.getElementById('next');
// var prevButton = document.getElementById('prev');

// /* Handle Click on Previous and Next Buttons
// nextButton.onclick = nextSlide;
// prevButton.onclick = prevSlide;*/

// // Create The Main UL Element
// var paginationElement = document.createElement('ul');

// // Set ID On Created Ul Element
// paginationElement.setAttribute('id', 'pagination-ul');

// // Create List Items Based On Slides Count
// for (var i = 1; i <= slidesCount; i++) {

//     // Create The LI
//     var paginationItem = document.createElement('li');

//     // Set Custom Attribute
//     paginationItem.setAttribute('data-index', i);

//     // Set Item Content
//     paginationItem.appendChild(document.createTextNode(i));

//     // Append Items to The Main Ul List
//     paginationElement.appendChild(paginationItem);

// }

// // Add The Created UL Element to The Page
// //document.getElementById('indicators').appendChild(paginationElement);

// // Get The New Created UL
// var paginationCreatedUl = document.getElementById('pagination-ul');

// // Get Pagination Items | Array.form [ES6 Feature]
// var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// // Loop Through All Bullets Items
// for (var i = 0; i < paginationsBullets.length; i++) {

//     paginationsBullets[i].onclick = function () {

//         currentSlide = parseInt(this.getAttribute('data-index'));

//         theChecker();

//     }

// }

// // Trigger The Checker Function
// //theChecker();

// // Next Slide Function
// function nextSlide() {

//     if (nextButton.classList.contains('disabled')) {

//         // Do Nothing
//         return false;

//     } else {

//         currentSlide++;

//         theChecker();

//     }

// }

// // Previous Slide Function
// function prevSlide() {

//     if (prevButton.classList.contains('disabled')) {

//         // Do Nothing
//         return false;

//     } else {

//         currentSlide--;

//         theChecker();

//     }

// }

// // Create The Checker Function
// function theChecker() {

//     // Set The Slide Number
//     slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

//     // Remove All Active Classes
//     removeAllActive();

//     // Set Active Class On Current Slide
//     sliderImages[currentSlide - 1].classList.add('active');

//     // Set Active Class on Current Pagination Item
//     paginationCreatedUl.children[currentSlide - 1].classList.add('active');

//     // Check if Current Slide is The First
//     if (currentSlide == 1) {

//         // Add Disabled Class on Previous Button
//         prevButton.classList.add('disabled');

//     } else {

//         // Remove Disabled Class From Previous Button
//         prevButton.classList.remove('disabled');

//     }

//     // Check if Current Slide is The Last
//     if (currentSlide == slidesCount) {

//         // Add Disabled Class on Next Button
//         nextButton.classList.add('disabled');

//     } else {

//         // Remove Disabled Class From Next Button
//         nextButton.classList.remove('disabled');

//     }

// }

// // Remove All Active Classes From Images and Pagination Bullets
// function removeAllActive() {

//     // Loop Through Images
//     sliderImages.forEach(function (img) {

//         img.classList.remove('active');

//     });

//     // Loop Through Pagination Bullets
//     paginationsBullets.forEach(function (bullet) {

//         bullet.classList.remove('active');

//     });

// }

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

// Gestion du menu mobile
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMobileMenu() {
            mobileMenuBtn.classList.add('active');
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Event listeners
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        mobileMenuClose.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay.addEventListener('click', closeMobileMenu);

        // Fermer le menu lors du clic sur un lien
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Fermer avec la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Effet de scroll pour le header
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                header.style.background = '#e6b005'; // Version plus sombre du jaune
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
            } else {
                header.style.background = '#f3c306';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }
            
            lastScrollY = currentScrollY;
        });

        // // Navbar scroll effect
        // window.addEventListener('scroll', function() {
        //     const header = document.querySelector('header');
        //     if (window.scrollY > 50) {
        //         header.classList.add('scrolled');
        //     } else {
        //         header.classList.remove('scrolled');
        //     }
        // });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // Calculer l'offset pour compenser la navbar fixe
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Scroll to top button
        window.addEventListener('scroll', function() {
            const scrollButton = document.getElementById('scroll-to-top');
            if (window.pageYOffset > 300) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Form submission handling
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && message) {
                // Animation du bouton de soumission
                const submitBtn = this.querySelector('.btn-submit');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span><i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...</span>';
                submitBtn.disabled = true;
                
                // Simuler l'envoi (remplacer par votre logique d'envoi)
                setTimeout(() => {
                    submitBtn.innerHTML = '<span><i class="fas fa-check mr-2"></i>Envoyé!</span>';
                    submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                        this.reset();
                        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                    }, 2000);
                }, 1500);
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });

        // Responsive adjustments
        function handleResize() {
            // Fermer le menu mobile lors du redimensionnement vers desktop
            if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        }

        window.addEventListener('resize', handleResize);

        // Add loading animation to page
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Gestion des focus pour l'accessibilité
        function trapFocus(element) {
            const focusableElements = element.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            element.addEventListener('keydown', function(e) {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastFocusableElement) {
                            firstFocusableElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            });
        }

        // Appliquer le trap focus au menu mobile
        trapFocus(mobileMenu);

        // Animation d'entrée pour les éléments de la page
        const animateElements = document.querySelectorAll('.service, .highlight-item');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => {
            animationObserver.observe(el);
        });

        // Préchargement des images pour une meilleure performance
        function preloadImages() {
            const imageUrls = [
                // Ajouter ici les URLs des images réelles si nécessaire
            ];
            
            imageUrls.forEach(url => {
                const img = new Image();
                img.src = url;
            });
        }

        // Appeler le préchargement après le chargement de la page
        window.addEventListener('load', preloadImages);

        // Debug pour mobile (optionnel - à supprimer en production)
        if (window.innerWidth <= 768) {
            console.log('Mode mobile activé');
            
            // Ajouter un indicateur visuel temporaire pour le debug mobile
            mobileMenuBtn.addEventListener('touchstart', function() {
                this.style.backgroundColor = 'rgba(255,255,255,0.2)';
                setTimeout(() => {
                    this.style.backgroundColor = '';
                }, 150);
            });
        }

        // Gestion des erreurs JavaScript
        window.addEventListener('error', function(e) {
            console.error('Erreur JavaScript détectée:', e.error);
        });

        // Performance monitoring
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Temps de chargement:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
            }, 0);
        });

        console.log('✅ Site BET EXNOV chargé avec succès!');
        console.log('📱 Menu mobile fonctionnel');
        console.log('🎨 Animations activées');

// window.addEventListener('scroll', function() {
//     var whatsappButton = document.getElementById('whatsapp');
//     var scrollPosition = window.scrollY;
//     if (scrollPosition < 300) {
//         whatsappButton.style.display = 'none'; // Hide the button if scroll position is less than 300 pixels
//     } else {
//         whatsappButton.style.display = 'inline-block'; // Show the button otherwise
//     }
// });



// Déclare whatsappButton globalement
  var whatsappButton = document.getElementById('whatsapp');

  // Lorsque la page est chargée, cache le bouton au début, puis l'affiche après 5 secondes
  window.addEventListener('DOMContentLoaded', function() {
      whatsappButton.style.display = 'none'; // Cache le bouton dès le chargement de la page
      setTimeout(function() {
          whatsappButton.style.display = 'inline-block'; // Affiche le bouton après 5 secondes
      }, 5000);
  });

  // Lorsque l'utilisateur fait défiler la page, ajuste l'affichage du bouton
  window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
      if (scrollPosition < 300) {
          whatsappButton.style.display = 'none'; // Cache le bouton si la position du scroll est inférieure à 300 pixels
      } else {
          whatsappButton.style.display = 'inline-block'; // Affiche le bouton autrement
      }
  });
  
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