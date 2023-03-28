let hr = document.querySelector(`.hour`);
let min = document.querySelector(`.minut`);
let sec = document.querySelector(`.sec`);

function DisplayTime(){
  let  date = new Date()
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = hh*30 + mm/2;
    let mRotation = mm*6 +ss/10;
    let sRotation = ss*6;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    console.log(hh)

}
setInterval(DisplayTime, 10);