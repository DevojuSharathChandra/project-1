let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function time(){
    let date = new Date;

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let h_ro= 30*hh+mm/12;
    let m_ro=6*mm;
    let s_ro= 6*ss;

    hr.style.transform=`rotate(${h_ro}deg)`;
    min.style.transform=`rotate(${m_ro}deg)`;
    sec.style.transform=`rotate(${s_ro}deg)`;
}

setInterval(time,1000)