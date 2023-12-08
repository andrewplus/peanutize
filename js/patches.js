// New flags
var DEBUG = true;

var halloweenEnabled = true;
var holidaysEnabled = true;
var valentinesEnabled = true;
var easterEnabled = true;

// View character key debug shortcut (k key)
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 75 && DEBUG && (peanuts.section.currentSection === "creator" || peanuts.section.currentSection === "ending")) {
        document.getElementsByClassName("deny")[0].style.display = "none";
        document.querySelector(".alert .message").style.userSelect = "text";
        peanuts.alert.message({
            message: "Your character code: " + peanuts.creator.data.key,
            confirm: "Close",
            deny: "",
            callback: viewKeyCallback
        })
    }
});

// View character key callback
function viewKeyCallback(e) {
    window.setTimeout(() => {
        document.getElementsByClassName("deny")[0].style = "";
        document.querySelector(".alert .message").style.userSelect = "none";
    }, 500)
}

// CTRL+S save shortcut
document.addEventListener("keydown", function(e) {
      if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)  && e.keyCode == 83 && DEBUG) {
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

// part-types position fix for mobile
function partTypesFix() {
    document.querySelector(".part-types").style.left = (0.25 * window.innerWidth + -66.25) + "px";
}

window.addEventListener("resize", partTypesFix);
partTypesFix()