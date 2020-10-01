//°°°°°°°°°°°°°°°°°°°°°°°°°°° Menu °°°°°°°°°°°°°°°°°°°°°°°°°°°
$(".menuPrincipal").slideUp();

$("#container-menu-icon").click(function () {
  $(".menuPrincipal").slideToggle("slow");
});

$(".dropdown").slideUp();
$(".dropdownMenu").click(function (e) {
  e.preventDefault();
  $(".dropdown").slideToggle();
});

//°°°°°°°°°°°°°°°°°°°°°°°°°°° Formulario °°°°°°°°°°°°°°°°°°°°°°°°°°°
$("#contactoFormulario").validate();

$(".formTerms p").click(function () {
  let checado = document.querySelector(".formTerms p");
  if (checado.classList.contains("check")) {
    $(".formTerms p").removeClass("check");
    $("input[type=checkbox]").prop("checked", false);
    $(".fa-check").css({
      display: "none",
    });
  } else {
    $(".formTerms p").addClass("check");
    $("input[type=checkbox]").prop("checked", true);
    $(".fa-check").css({
      display: "inline-block",
    });
    $("#terms-error").remove();
  }
});

//°°°°°°°°°°°°°°°°°°°°°°°°°°° Click derecho °°°°°°°°°°°°°°°°°°°°°°°°°°°

document.oncontextmenu = document.body.oncontextmenu = function () {
  return false;
};

$(".modalCophyright").hide();

$("main").mousedown(function (e) {
  //1: izquierda, 2: medio/ruleta, 3: derecho
  if (e.which == 3) {
    const pageX = e.pageX;
    const pageY = e.pageY;

    $(".modalCophyright").css({
      top: pageY + "px",
      left: pageX + "px",
    });

    $(".modalCophyright").show();
  }

  setTimeout(function () {
    $(".modalCophyright").hide();
  }, 2000);
});
