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

// about-div
// clubs-div
// honors-div
// scholarships-flex
// work-div