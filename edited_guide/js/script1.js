



/*toggle between visible on scroll*/

let toggleClassOnVisible;
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  toggleClassOnVisible = function (element, className) {
    if (element == null) {
      console.warn(`"${element}" not found`)
    }
    let observer = new IntersectionObserver(entries => {
      if (entries[0].isVisible || entries[0].isIntersecting) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    });
    observer.observe(element);
  };
} else {
  toggleClassOnVisible = function (element, className) {
    console.warn("IntersectionObserver is not supported");
    element.classList.add(className);
  }
}

document.querySelectorAll('[data-visible-class]').forEach(function (element) {
  let className;
  if (element.dataset) {
    className = element.dataset.visibleClass;
  } else {
    className = element.getAttribute('data-visible-class');
  }
  toggleClassOnVisible(element, className);
});

  /*arrowUp */

let arrowButton = document.getElementById("arrowToTop");


if (arrowButton != null ) {


function arrowShows() {



  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrowButton.style.display = "block";
   
  } else {
    arrowButton.style.display = "none";
  }


}

document.getElementsByTagName('body')[0].onscroll = function() {

  arrowShows();

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

}




/*load SVG and fetch */

window.addEventListener("DOMContentLoaded", calculateScreen);


function loadSVG() {
  fetch("http://ilvalamberte.eu/svg/timelinefinal.svg")
    .then(response => response.text())
    .then(svgdata => {
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

        /*fetchJSON();*/
        
       
    });
}

function loadMobileSVG() {
  fetch("http://ilvalamberte.eu/svg/timelinefinal_mob.svg")
    .then(response => response.text())
    .then(svgdata => {
      document
        .querySelector("#svg_timeline")
        .insertAdjacentHTML("afterbegin", svgdata);

        /*fetchJSON();*/
        
       
    });
}


function calculateScreen() {
  if (window.innerWidth < 450) {
    loadMobileSVG();
  } else {
    loadSVG();
  }
}

