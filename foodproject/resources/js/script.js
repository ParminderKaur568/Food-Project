AOS.init();

     $(document).ready(function () {
  // Smooth scrolling
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70, // adjust for fixed navbar
        },
        800
      );
    }
  });

  // Highlight active nav link on scroll
  $(window).on("scroll", function () {
   
    var scrollPos = $(document).scrollTop();

    $("section").each(function () {
      var top = $(this).offset().top - 80;
      var bottom = top + $(this).outerHeight();
      var id = $(this).attr("id");

      if (scrollPos >= top && scrollPos <= bottom) {
        $(".main-nav li a").removeClass("active");
        $('.main-nav li a[href="#' + id + '"]').addClass("active");
      }
    });
  });
});
       const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });