var hoverImage = document.getElementById('me');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    hoverImage.style.top = (y + 20) + 'px';
    hoverImage.style.left = (x + 20) + 'px';
};

$(document).ready(function(){
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        });
      }
    }
  });
});