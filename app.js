//setting footer date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//back to top arrow
window.addEventListener("scroll", () => {
    const scrollHeight = window.scrollY;
    const topLink = document.querySelector(".back-to-top-arrow");

    if (scrollHeight > 600) {
        topLink.classList.add("active");
    } else {
        topLink.classList.remove("active");
    }
});
console.log(sdfdsg);

//modal
var modal = document.getElementById("email-modal");
var btns = document.querySelectorAll("#modal-btn");
var span = document.getElementsByClassName("modal-close")[0];
// When the user clicks the any modal button, open the modal
for (const btn of btns) {
    btn.addEventListener("click", function () {
        modal.style.display = "block";
    });
}

// When the user clicks on (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
