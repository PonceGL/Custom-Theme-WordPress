(function () {
  const body = document.body;
  const gallery = document.getElementById("gallery");
  const items = document.querySelectorAll(".gallery .gallery_item");
  const gallery_item = document.querySelector("#gallery").children;
  let index;
  let imgSrc;

  if (gallery.offsetWidth > 1000) {
    iterador = gallery.offsetWidth * 0.16;
  } else if (gallery.offsetWidth > 600 && gallery.offsetWidth < 1000) {
    iterador = gallery.offsetWidth * 0.18;
  } else if (gallery.offsetWidth < 600) {
    iterador = gallery.offsetWidth * 0.28;
  }

  Array.prototype.forEach.call(items, (item) => {
    let image = item.querySelector("img");
    image.onload = () => {
      let ratio = image.width / image.height;
      item.style.width = iterador * ratio + "px";
      item.style.flexGrow = ratio;
    };
  });

  for (let i = 0; i < gallery_item.length; i++) {
    gallery_item[i]
      .querySelector(".gallery_item_image")
      .addEventListener("click", function () {
        index = i;
        changeImage();
        crear();
      });
  }

  function nextImage() {
    if (index == gallery_item.length - 1) {
      index = 0;
    } else {
      index++;
    }
    closeModal();
    changeImage();
    crear();
  }
  function prevImage() {
    if (index == 0) {
      index = gallery_item.length - 1;
    } else {
      index--;
    }
    closeModal();
    changeImage();
    crear();
  }
  function withKey(e) {
    switch (true) {
      case e.which == 27:
        closeModal();
        break;
      case e.which == 37:
        prevImage(e);
        break;
      case e.which == 39:
        nextImage(e);
        break;
    }
  }
  function changeImage() {
    imgSrc = gallery_item[index].querySelector("img").getAttribute("src");
    imgName = gallery_item[index].querySelector(".gallery_item_info_name")
      .innerHTML;
    imgDescription = gallery_item[index].querySelector(
      ".gallery_item_info_description"
    ).innerHTML;
    imgEnlace = gallery_item[index]
      .querySelector(".gallery_item_info")
      .getAttribute("href");
  }
  function crear() {
    body.classList.add("modal-open");
    let section = document.createElement("section");
    section.setAttribute("class", "lightbox");
    section.setAttribute("id", "lightbox");
    let lightbox_item = document.createElement("div");
    lightbox_item.setAttribute("class", "lightbox_item");
    section.appendChild(lightbox_item);
    let closeButton = document.createElement("i");
    closeButton.setAttribute("class", "fas fa-times-circle");
    closeButton.setAttribute("id", "fa-times-circle");
    lightbox_item.appendChild(closeButton);
    let containerarrowleft = document.createElement("div");
    containerarrowleft.setAttribute("class", "container-arrow arrow-left");
    lightbox_item.appendChild(containerarrowleft);
    let left = document.createElement("i");
    left.setAttribute("class", "fas fa-chevron-circle-left");
    containerarrowleft.appendChild(left);
    let containerarrowright = document.createElement("div");
    containerarrowright.setAttribute("class", "container-arrow arrow-right");
    lightbox_item.appendChild(containerarrowright);
    let right = document.createElement("i");
    right.setAttribute("class", "fas fa-chevron-circle-right");
    containerarrowright.appendChild(right);
    let container_image = document.createElement("div");
    container_image.setAttribute("class", "lightbox_container_image");
    lightbox_item.appendChild(container_image);
    let lightbox_item_image = document.createElement("img");
    lightbox_item_image.setAttribute("class", "lightbox_item_image");
    lightbox_item_image.setAttribute("src", `${imgSrc}`);
    container_image.appendChild(lightbox_item_image);
    let lightbox_info = document.createElement("a");
    lightbox_info.setAttribute("class", "lightbox_item_info");
    lightbox_info.setAttribute("href", `${imgEnlace}`);
    lightbox_item.appendChild(lightbox_info);
    let info_name = document.createElement("h4");
    info_name.setAttribute("class", "lightbox_item_info_name");
    info_name.innerText = `${imgName}`;
    lightbox_info.appendChild(info_name);
    let info_description = document.createElement("p");
    info_description.setAttribute("class", "lightbox_item_info_description");
    info_description.innerText = `${imgDescription}`;
    lightbox_info.appendChild(info_description);
    body.appendChild(section);
    body.addEventListener("keydown", withKey);
    containerarrowleft.addEventListener("click", prevImage);
    containerarrowright.addEventListener("click", nextImage);
    closeButton.addEventListener("click", closeModal);
  }
  function closeModal() {
    section = document.getElementById("lightbox");
    body.removeChild(section);
    body.classList.remove("modal-open");
  }
})();
