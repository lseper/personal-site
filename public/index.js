const thoughts = [
    {
        title: "Change",
        date: new Date(2024, 4, 30, 16, 52),
        location: "Mountain View, CA",
        content: `<p>Change is the only constant there is in life.</p>
        <br />
        <p>For the longest time I have been afraid of it. People, interests, desires, it all changes.
        Perhaps I'm not afraid of change, but rather that everything around me changes, yet I stay the same.
        It seems my biggest fear is that I <em>won't</em> change. That I will become rendered obsolete by the world.</p>
        <br />
        <p>But if that is true, I think there is a strange comfort in that. You become the sole owner of yourself, of your being.
        Your value is no longer tethered to that of others, and instead must blossom from the void within lest be consumed by madness.
        It's terrifyingly beautiful.</p>
        `
    },
    {
        title: "Gilgamesh and Cybernetics",
        date: new Date(2024, 4, 30, 17, 40),
        location: "Mountain View, CA",
        content: `<p>As technology progresses more and more, perhaps even the best of us will find ourselves obsolete. The last champions of humanity
        rendered valueless by their very own ingenuity. And no, I don't mean it in the Skynet sense, if you compare quality of life differences
        between the 1800s and now, it's clear that technology has been a net positive. I think it'll only "get better" physically, so to say. 
        Maslow would be proud of our robot overlords! xD</p>
        <br />
        <p>But mentally, I can only think of it getting worse. Either that, or the whole cyber-chips-in-your-brain thing will happen, which is 
        much more terrifying. Despite science fiction, I don't think doing so nullifies the human experience. You could argue the same with any 
        technological advancement; Do I, visiting my boyfriend in San Francisco, experience something "less human" than Gilgamesh did in Sumeria?</p>
        <br />
        <p>I don't think so. Such a comparison seems moot. I'm sure in thousands of years humans will awe and wonder in the mundane and the 
        everyday I experience today, yet I would be stroking my ego to say I am Gilgamesh-esque.</p>
        `
    },
];

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
    show: "block"},
    {
        id: "projects-div",
        show: "block"
    },
    {
        id: "blog-div",
        show: "block",
    }
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

function showProjects() {
    showDiv([5]);
    shownDivs = [5];
}

function showBlog() {
    showDiv([6]);
    shownDivs = [6];
}

const calendarModal = document.getElementById("calendarModal");

function showPostCalendarModal() {
    console.log("calendar")
    // todo
}

function hidePostCalendarModal() {
    zeldaModal.style.display = "none";
    document.body.classList.remove('blackout')
}

function getRandomPost() {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    const thoughtsTitle = document.getElementById("thought-title");
    const thoughtsContent = document.getElementById("thought-container");
    const thoughtsDate = document.getElementById("thought-date");
    const thoughtsLocation = document.getElementById("thought-location");
    thoughtsTitle.innerText = randomThought.title;
    thoughtsContent.innerHTML = randomThought.content;
    thoughtsDate.innerText = randomThought.date.toLocaleString();
    thoughtsLocation.innerText = randomThought.location;

    // todo
}

function getPreviousPost() {
    console.log("previous post")
    // todo
}

function getNextPost() {
    console.log("next post")
    // todo
}

// modal js 
// Get the modal
const zeldaModal = document.getElementById("zeldaModal");

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

// When the user clicks on <span> (x), close the zeldaModal
span.onclick = function() {
  hideModal(zeldaModal);
}

// When the user clicks anywhere outside of the zeldaModal, close it
window.onclick = function(event) {
    if (event.target == zeldaModal) {
        zeldaModal.style.display = "none";
        document.body.classList.remove('blackout')
    }
    if (event.target == calendarModal) {
        calendarModal.style.display = "none";
        document.body.classList.remove('blackout')
    }
}

function showModal(modal) {
    modal.style.display = "block";
    document.body.classList.add('blackout');
}

function hideModal(modal) {
    modal.style.display = "none";
    document.body.classList.remove('blackout')
}

const exitEvent = e => {
  if (!e.toElement && !e.relatedTarget && e.clientY < 5) {
    document.removeEventListener('mouseout', exitEvent);
    
    showModal(zeldaModal);
    setCookie("resumeModalSeen", true, 7);
  }
};

if(!getCookie("resumeModalSeen")){
    setTimeout(() => {
        document.addEventListener("mouseout", exitEvent);
    }, 8000);
}

getRandomPost();

// about-div
// clubs-div
// honors-div
// scholarships-flex
// work-div
