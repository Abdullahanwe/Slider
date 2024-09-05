// Get Slider Items  | Array. from [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slides
var slidesCount = sliderImages.length;

// Set current Slide 
var currentSlide = 1;

// Slide Number String Element
var slideNUmberElement = document.getElementById('slide-number');
// Previous and Next Button
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handel Click On Previous and Next Button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element 
var paginationElement = document.createElement('ul');

// Set ID Created Ul Element 
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count

for (var i = 1; i <= slidesCount; i++) {
    // Create The li
    var paginationItem = document.createElement('li');

    // Set Custom Attribute  
    paginationItem.setAttribute('data-index', i);

    // set Item Content 
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items To The Main Ul List 
    paginationElement.appendChild(paginationItem);

}

//Add The Created Ul Element To The page 
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created Ul 
var paginationCreatedUl = document.getElementById('pagination-ul');
// Get Pagination Items  | Array. from [ES6 Feature]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }

}

// Trigger The Checker Function 
theChecker();

//function Next Slide 
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {


        currentSlide++;
        theChecker();
    }
}
//function Prev Slide 

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    } else {


        currentSlide--;
        theChecker();
    }
}

// Create The Cheker Function 
function theChecker() {
    //Set The slide Number
    slideNUmberElement.textContent = 'Slide #' + (currentSlide) + 'of ' + (slidesCount);
    //Remove All Active Class
    removeAllActive();

    // Setr Active Class On Current Slide 
    sliderImages[currentSlide - 1].classList.add('active')
        // Set Active Class  on Currant Pagination Item 
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    // Chech if Curent Slider is The First 
    if (currentSlide == 1) {
        // Add disabled Class on Previous Button 
        prevButton.classList.add('disabled');

    } else {
        // Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled')
    }
    // Chech if Curent Slider is The Last
    if (currentSlide == slidesCount) {
        // Add disabled Class on Previous Button 
        nextButton.classList.add('disabled');

    } else {
        // Remove Disabled Class From Previous Button
        nextButton.classList.remove('disabled')
    }

}



// Remove All Active Class From Images And Pagination Bullets
function removeAllActive() {
    // loop Through Images
    sliderImages.forEach(function(img) {
            img.classList.remove('active');
        })
        //Loop Throught pagination Bullets 
    paginationBullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    })
}