function openMenu() {
    var x = document.getElementById("mob-nav");
    var y = document.getElementById("close-icon");
    var z = document.getElementById("open-icon");
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "flex";
        y.style.display = "block";
        z.style.display = "none";
    }
}