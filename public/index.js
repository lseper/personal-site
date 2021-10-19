window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) {
        showAll();
    } else {
        showDiv(shownDivs);
    }
})

const phone = "612-412-2313";
const email = "seperliam@gmail.com";

const onCopyText = "copied!"

async function copyPhone() {
    replaceText("phone");
    await navigator.clipboard.writeText(phone);
}

async function replaceText(id) {
    const previousText = document.getElementById(id).innerText;
    document.getElementById(id).innerText = onCopyText;
    console.log(previousText);
    // wait for two seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    document.getElementById(id).innerText = previousText;
}

async function copyEmail() {
    replaceText("email");
    await navigator.clipboard.writeText(email);
}

let shownDivs = [0];

const divs = [
    { id: "about-div",
    show: "block"}, 
    { id: "clubs-div",
    show: "block"}, 
    { id: "honors-div",
    show: "block"}, 
    { id: "scholarships-flex",
    show: "flex"}, 
    { id: "work-div",
    show: "block"}
]

function showDiv(div_nums) {
    for(let i = 0; i < divs.length; i++){
        const divObj = divs[i];
        if(div_nums.some(e => e === i)) {
            const div = document.getElementById(divObj.id);
            div.style.display = divObj.show;
        } else {
            document.getElementById(divObj.id).style.display = "none";
        }
    }
}

function showAll() {
    divs.forEach(e => document.getElementById(e.id).style.display = e.show);
}

function showAbout() {
    showDiv([0]);
    shownDivs = [0];
}

function showClubs() {
    showDiv([1]);
    shownDivs = [1];
}

function showHonors() {
    showDiv([2, 3]);
    shownDivs = [2, 3];
}

function showWork() {
    showDiv([4]);
    shownDivs = [4];
}

// modal js 
// Get the modal
const modal = document.getElementById("zeldaModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// cookie setting for modal
const setCookie = (cname, cvalue, exdays) => {
    let expires = "";

    if (exdays) {
        let day = new Date();
        day.setTime(day.getTime() + exdays * 24 * 60 * 60 * 1000);
        expires = `expires=${day.toUTCString()}`;
    }
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

const getCookie = (cname) => {
    let ca = document.cookie.split(";");
    const foundCookie = ca.find(e => {
        const splitEl = e.split("=");
        return splitEl[0] === cname;
    })
    // if we found a cookie, return the value of that cookie
    if(foundCookie != undefined){
        return foundCookie.split("=")[1] === "true";
    }
    return null;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.classList.remove('blackout')
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('blackout')
    }
}

const exitEvent = e => {
  if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
    document.removeEventListener('mouseout', exitEvent);
    
    modal.style.display = "block";
    document.body.classList.add('blackout');
    setCookie("resumeModalSeen", true, 7);
  }
};

if(!getCookie("resumeModalSeen")){
    setTimeout(() => {
        document.addEventListener("mouseout", exitEvent);
    }, 1000);
}

// about-div
// clubs-div
// honors-div
// scholarships-flex
// work-div