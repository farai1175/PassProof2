fetch("navbar.html")
    .then((Response) => Response.text())
    .then((data) => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    });

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;
}
