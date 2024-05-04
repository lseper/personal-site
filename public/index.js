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
        technological advancement; Do I, visiting my boyfriend in San Francisco in the year 2024, sitting in a padded, cushioned chair, typing on 
        a laser-cut and harmoniously designed computer keyboard, while a 144hz monitor refreshes each and every pixel so I can see each and every character
        I type, experience something "less human" than Gilgamesh did in Sumeria? In fact, I'd argue I experience something quite similar to that of the next 
        generation of cyborg humans, and that my experience is much more alike theirs than Gilgamesh's.</p>
        `
    },
    {
        title: "That Obra Dinn sure can return!",
        date: new Date(2024, 5, 1, 23, 28),
        location: "Mountain View, CA",
        content: `<p>My friend Sam asked if I wanted to play Return of the Obra Dinn, a game I'd seen through my studies of graphics programming.
        I was initially excited by the art direction of the game, as the shader style seemed really cool. I really like the main game loop of discover ->
        deduce -> confirm. It also presents to you radically strange content at it's peak, and then gives you the buildup - an interesting turn on things.<p>
        <br />
        <p>I will say the game is EXTREMELY difficult. I much enjoy playing it around friends, as I don't know if I'd have the patience nor mental energy to 
        juggle a lot of the small detective work to do it! It's a decent jump outside my comfort zone, but I'm glad I took it, as it's been very interesting.</p>
        <br />
        <p>I'll say one of my favorite things is the incredible sound design of the game. The beginning of the flashback scenes with the narration and text on a 
        simple uniform color background is incredible. I can tell each and every audio track was crafted with utmost care, as hearing the muffled voices, creaky boards
        and swish and swash of the ocean really breathes life into the game.</p>
        `
    },
    {
        title: "Do not be afraid of yourself!",
        date: new Date(2024, 5, 1, 23, 28),
        location: "Mountain View, CA",
        content: `<p>For the longest time I thought my obsessive intensity about things many people thought mundane, difficult, and uninteresting was bad. My friend Spottacus 
        recently gave a <a href="https://www.youtube.com/watch?v=uE20gAvnru0&pp=ygUSc3BvdHRhY3VzIGJlcmtlbGV5">talk at Berkeley</a> that has resonated with my rather well.<p>
        <br />
        <p> For the longest time, I thought my feverish intensity and obsession was something I needed to reign in, but now I see that it's something I should <em>embrace</em>. 
        So if you're reading this, embrace your interests! For the longest time I was afraid I was "missing out" on what life was "about" by obsessing over the things that 
        interested me. But now I see that that is what life is to me. The joy of study and pursuit in itself are what I crave, and it's exhilirating to think of the possibilities 
        that could come from that!</p>
        <br />
        <p>Carpe Diem!</p>
        `
    }
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
