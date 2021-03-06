
//Sticky jQuery plugin
$(document).ready(function(){
  $("#sticker").sticky({topSpacing:0});
});

//Ligthbox jQuery plugin
lightbox.option({
  imageFadeDuration	: 200
});

//Search functionality
const images = document.querySelectorAll('.image-link');
const form = document.getElementById('sticker')
const input = document.querySelector('input')
let description = "";

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let search = input.value.toLowerCase();
  for (let i = 0; i < images.length; i++) {
    description = images[i].getAttribute('data-title');
    if (description.toLowerCase().indexOf(search) > -1) {
      images[i].style.display = '';
    } else {
      images[i].style.display = 'none';
    }
  }
});

  /*
  $(document).ready(function() {
    $('.search-input').on('keyup', function() {
      let $search = $(this).val().toLowerCase();
      for (let i = 0; i < images.length; i++) {
        description = images[i].getAttribute('data-title');
        if (description.toLowerCase().indexOf($search) > -1) {
          images[i].style.display = '';
        } else {
          images[i].style.display = 'none';
        }
      }
    })
  });
  */
