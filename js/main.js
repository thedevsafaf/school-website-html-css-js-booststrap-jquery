// loader script
var setTime;

function loaderFunction() {
  setTime = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("fullSection").style.display = "block";
}
// loader script ends

//dropdown jquery 

  // Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
});

  // make it as accordion for smaller screens
  if ($(window).width() < 992) {
    $('.dropdown-menu a').click(function(e){
      e.preventDefault();
        if($(this).next('.submenu').length){
          $(this).next('.submenu').toggle();
        }
        $('.dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.submenu').hide();
    })
  });
}

//dropdown jquery ends

// jQuery counterUp
$('[data-toggle="counterUp"]').counterUp({
  delay: 15,
  time: 1500
});
// jQuery counterUp ends

//top-button-navigation

  //Get the button
var topButton = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//top-button-navigation ends

// contact form script

const scriptURL = 'https://script.google.com/macros/s/AKfycbxXchZZ6NwPg6eSY3oO7XBltoK63Hf9j1rA_0aA3nRGZY_Uxotz/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})

// contact form script ends