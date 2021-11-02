//Logo

const logo = document.querySelector(".logo");
const inputLogo = document.getElementById("inputLogo");
const inputProfile = document.getElementById("changePicture");
const profilePic = document.querySelector(".profilePic");

profilePic.addEventListener("click", function() {
    inputProfile.click();
})

logo.addEventListener('click', function() {
    inputLogo.click();
});

function displayImage(id) {
    const fileReader = new FileReader();
    if (id === "inputLogo") {
        fileReader.onload = function(e) {
            document.getElementById("image").setAttribute('src', e.target.result);
        }
        fileReader.readAsDataURL(inputLogo.files[0]);
    } else {
        fileReader.onload = function(e) {
            document.getElementById("profilePicture").setAttribute('src', e.target.result);
        }
        fileReader.readAsDataURL(inputProfile.files[0]);
    }

}

const menuBtn = document.querySelector(".menuBtn");
const navigationPage = document.querySelector(".navigationPage");
const exitBtn = document.querySelector(".exitBtn");

menuBtn.addEventListener("click", function() {
    navigationPage.style.transform = "translateY(0%)"
});

exitBtn.addEventListener("click", function() {
    navigationPage.style.transform = "translateY(-100%)"
})