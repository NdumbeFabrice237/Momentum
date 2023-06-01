const bgsuris = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimnyzLOnYhkZwtcu74zjzpp8Ohq_5YEn6_A&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KznDoHDgXTW2w3HKo0RHvGQa3VLCVjBYIQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScPhTceMuvmYKHWSXVcJlpS0TtJWmzsMyVEg&usqp=CAU"]

const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let bg = document.querySelector('.main')
    let greeting = "Good Morning";
    let session = "AM";


    // hh = 0;
    // mm = 0;
    // ss = 0;
    // localStorage.setItem('date', 2);

// check if the date is different from the one in the local Storage and set a new background image

 if (localStorage.getItem("date") !== date.getDate().toString()) {
    let randomImage = bgsuris[Math.floor(Math.random() *bgsuris.length)];
    localStorage.getItem("date", date.getDate());
    localStorage.setItem("bg", randomImage);
 }

 console.log(localStorage.getItem("date") !== date.getDate().toString);

    if (hh === 0) {
        hh = 12;
    }

    if (hh >= 12) {
        // hh = hh - 12;
        hh -= 12;
        session = "PM";
        greeting = "Good Afternoon";
    }

    if (hh > 17 ) {
        greeting = "Good Evening";
    }

    //Converting single digit numbers to double digits e.g 7 to 07
    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;

    let time = `${hh}:${mm}:${session}`;

    // if (ss % 2 === 0) {
    //     document.getElementById('clock').style.textShadow = '0 0 10px white'
    //     document.getElementById('clock').style.color = "white"
    // } else {
    //     document.getElementById('clock').style.textShadow = '0 0 10px blueviolet'
    //     document.getElementById('clock').style.color = "blueviolet"
    // }

    document.querySelector('.time').textContent = time;

    document.querySelector('.greeting').textContent = greeting;

    let t = setTimeout(() => currentTime(), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
        currentTime();
     let bg = document.querySelector('.main-sectioln');
     localStorage.getItem("bg") &&
     (bg.style.backgroundImage = `url(${localStorage.getItem("bg")})`);
});