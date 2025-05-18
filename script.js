document.getElementById('watchVideoBtn').addEventListener('click', function() {
    document.getElementById('video').style.display = 'block';
    document.getElementById('video').style.justifyContent = 'center';
    document.getElementById('video').style.alignItems = 'center';
    document.getElementById('video').scrollIntoView({behavior: 'smooth'});
    document.getElementById('video').play();
      });

      
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
});

function rateStar(star) {
  let ratedStars = star.querySelectorAll('span');
  
  ratedStars.forEach((s, index) => {
    s.addEventListener('click', () => {
      ratedStars.forEach((r, i) => {
        if (i <= index) {
          r.innerHTML = '&#9733;';
        } else {
          r.innerHTML = '&#9734;';
        }
      });
    });
  });
}

$('.add-to-cart').click(function() {
  alert('Product added to cart!');
});

$('.buy-now').click(function() {
  alert('Redirecting to checkout page...');
});