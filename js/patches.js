// New flags
var DEBUG = false;

var halloweenEnabled = true;
var holidaysEnabled = true;
var valentinesEnabled = true;
var easterEnabled = true;

// Debug shortcut (c key)
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 67 && DEBUG) {
        peanuts.speciesselect.createDog();
        peanuts.dogselect.createMediumDog();
        window.setTimeout(() => {peanuts.creator.partsMenu.select(1);}, 2000);
    }
});

// CTRL+S save shortcut
document.addEventListener("keydown", function(e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83) {
        e.preventDefault();

        if (peanuts.section.currentSection === "creator") {
            peanuts.creator.onFinish();
        }
      }
}, false);

// Character only download option
document.getElementsByClassName("download-characterOnly")[0].addEventListener("click", function() {
    var image = peanuts.creator.data.cr.renderImage("characterOnly");
    var link = document.createElement("a");
    link.download = "peanuts-character.png";
    link.href = image;
    link.click();
});