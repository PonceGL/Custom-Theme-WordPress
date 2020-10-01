(function () {
  const menuIcon = document.getElementById("container-menu-icon");
  const pointA = document.getElementById("pointA");
  const pointB = document.getElementById("pointB");
  const pointC = document.getElementById("pointC");

  const lineAnimation = () => {
    pointA.classList.toggle("lineA");
    pointB.classList.toggle("lineB");
    pointC.classList.toggle("disappear");
  };

  menuIcon.addEventListener("click", lineAnimation);
})();
