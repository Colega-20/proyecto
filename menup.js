/**
 * gereria logica
 *
 * @format
 */

$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

(function () {
  var $body = document.body,
    $menu_trigger = $body.getElementsByClassName("svg")[0];

  if (typeof $menu_trigger !== "undefined") {
    $menu_trigger.addEventListener("click", function () {
      $body.className = $body.className == "menu-active" ? "" : "menu-active";
    });
  }
}).call(this);
//end
//boton de equipo
function equipoMsg() {
  document.querySelector(".equipo").style.display = "flex";
}

function equipo_close() {
  document.querySelector(".equipo").style.display = "none";
}
//end

//boton menu
const svg = "svg";
$(function () {
  $(svg).on("mouseover", function () {
    $(this).addClass("hover");
  });
  $(svg).on("mouseout", function () {
    $(this).removeClass("hover");
  });
  $(svg).on("click", function () {
    $(this).toggleClass("down");
  });
});

(function () {
  var $body = document.body,
    $menu_trigger = $body.getElementsByClassName("menu-trigger")[0];

  if (typeof $menu_trigger !== "undefined") {
    $menu_trigger.addEventListener("click", function () {
      $body.className = $body.className == "menu-active" ? "" : "menu-active";
    });
  }
}).call(this);
//end

//pagina de eror 404
function index() {
  window.location.href = "404/404.html";
} // end
