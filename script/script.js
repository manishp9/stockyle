$(document).ready(function () {
  new WOW().init();
});

$(".toggle-btn").click(function (e) {
  e.preventDefault();
  $("body").toggleClass("active");
  $(".right-navbar-box").slideToggle();
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 20) {
//     // You can adjust the scroll position threshold
//     $("header").addClass("scrolled");
//     $(".right-navbar-box").slideUp();
//     $("body").removeClass("active");
//   } else {
//     $("header").removeClass("scrolled");
//   }
// });
$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $("header").addClass("scrolled");
    $("body").removeClass("active");
    // Check screen size
    if ($(window).width() <= 1023) {
      $(".right-navbar-box").slideUp();
    }
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());

var swiper = new Swiper(".reviewSlider", {
  slidesPerView: 1,
  //           autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,
  autoHeight: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
      autoHeight: false,
    },
  },
});

$(document).ready(function () {
  // Open the first FAQ on page load
  const firstFaq = $(".faq-acoddian-item-box").first();
  firstFaq.addClass("active"); // Add active class
  firstFaq.find(".faq-para-box").slideDown(); // Open the first FAQ

  // FAQ toggle functionality
  $(".faq-acoddian-item-box").on("click", function () {
    const currentBox = $(this);
    const currentContent = currentBox.find(".faq-para-box");

    // Close other boxes
    $(".faq-acoddian-item-box")
      .not(currentBox)
      .removeClass("active")
      .find(".faq-para-box")
      .slideUp();

    // Toggle the clicked box
    if (!currentBox.hasClass("active")) {
      currentBox.addClass("active");
      currentContent.slideDown();
    } else {
      currentBox.removeClass("active");
      currentContent.slideUp();
    }
  });
});

$(".input-form input, .input-form textarea").focus(function () {
  $(this).parents(".input-form").addClass("active");
});

$(".input-form input, .input-form textarea").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".input-form").removeClass("active");
  } else {
    $(this).addClass("filled");
  }
});
