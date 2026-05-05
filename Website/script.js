console.log("Leaforia Ready 🌿");

// NAVBAR SCROLL

window.addEventListener("scroll", function() {
    const navbar = this.document.querySelector(".navbar");
    
    if (this.window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})
// WAKTU DISCOUNT (3 hari dari sekarang)\

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

function updateCountdown(){
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0){
        document.querySelector(".countdown").innerHTML = "Promo Ended";
        return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// update tiap 1 detik
setInterval(updateCountdown, 1000);
updateCountdown();

