"use strict";

/**
 * Builds the navigation menu in the header element.
 * @param {*} headerElement - the header element in which the menu will be inserted. 
 */
function buildMenu(headerElement) {
  const title = document.createElement('h1');
  const menu = document.createElement('nav');
  const link1 = document.createElement('a');
  const link2 = document.createElement('a');
  const link3 = document.createElement('a');
  const link4 = document.createElement('a');

  title.textContent = "Giza Necropolis"
  menu.id = "menu";
  link1.href = "index.html";
  link2.href = "khufuPyramid.html";
  link3.href = "khafrePyramid.html";
  link4.href = "menkaurePyramid.html";
  link1.text = "Home";
  link2.text = "Pyramid of Khufu";
  link3.text = "Pyramid of Khafre";
  link4.text = "Pyramid of Menkaure";

  menu.appendChild(link1);
  menu.appendChild(link2);
  menu.appendChild(link3);
  menu.appendChild(link4);

  headerElement.appendChild(title);
  headerElement.appendChild(menu);
}

// build menu for the header
buildMenu(header);


/**
 * Builds a captioned image nested in a "figure" element.
 * @param {*} section - the section element in the HTML file
 * @param {*} imageSrc - the source attribute of the image element
 * @param {*} imageAlt - the alt attribute of the image element
 * @param {*} figCaption - the caption for the image
 */
function buildImage(section, imageSrc, imageAlt, figCaption) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");

  img.src = imageSrc;
  img.alt = imageAlt;
  caption.textContent = figCaption;

  figure.appendChild(img);
  figure.appendChild(caption);
  section.appendChild(figure);

  img.addEventListener('click', ev => {
    img.classList.toggle('modal');
  });
}


/**
 * Builds a paragraph with a subheading.
 * @param {*} section - the section in which the the paragraph is inserted
 * @param {*} subHeading - the  sub-heading of the paragraph
 * @param {*} paragraph - the content of the paragraph
 */
function buildParagraph(section, subHeading, paragraph) {
  const title = document.createElement('h3');
  const para = document.createElement('p');

  title.textContent = subHeading;
  para.textContent = paragraph;

  section.appendChild(title);
  section.appendChild(para);
}


// menuToggler event listener
menuToggler.addEventListener('click', ev => {
  if (menu.classList.toggle('open')) {
    document.getElementById("menuToggler").style.color = "rgb(255, 115, 0)";
    document.getElementById("menuToggler").style.transform = "rotate(0.25turn)";
  } else {
    document.getElementById("menuToggler").style.color = "white";
    document.getElementById("menuToggler").style.transform = "rotate(1turn)";
  }
});


// hide menu button on scrolling down and show on scrolling up
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menuToggler").style.top = "0";
  } else {
    document.getElementById("menuToggler").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}