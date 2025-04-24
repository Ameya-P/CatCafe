/***
    ################################
    ||         DARK MODE          ||
    ################################

  Purpose:
  - Use this starter code to add a dark mode feature to your website.
***/

// Step 1: Select the theme button
let themeButton = document.querySelector("#theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark-mode")) {
        html.classList.remove("dark-mode");
    } else {
        html.classList.add("dark-mode");
    }
    // Write your code here
    // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/***
    ################################
    ||       FORM HANDLING        ||
    ################################

  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

***/

// Step 1: Add your query for the submit RSVP button here
let submitButton = document.querySelector("#rsvp-button");
let count = 3;

const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();

    const entries = document.querySelector(".rsvp-participants");
    const entry = document.createElement("p");
    entry.textContent = `🐱 ${person.name.value} from ${person.homestate.value} has RSVP'd.`;

    entries.appendChild(entry);

    count++;
    document.querySelector("#rsvp-count").textContent = `☕ ${count} people have RSVP'd to this event!`;
}

// Step 3: Add a click event listener to the submit RSVP button here
//Deleted submitButton.addEventListener("click", addParticipant);

/*** 
    ################################
    ||      Form Validation       ||
    ################################

  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
    event.preventDefault();

    const containsErrors = {
        name: false, 
        homestate: false,
        email: false
    };

    const person = {
        name: document.querySelector("#name"),
        homestate: document.querySelector("#home-state"),
        email: document.querySelector("#email")
    }

    // Loop through all inputs
  
    for (const key in person) {
        input = person[key];
        if (input.value.length < 2) {
            containsErrors[key] = true;
            input.classList.add("error");
        } else {
            containsErrors[key] = false;
            if (input.classList.contains("error")) {
                input.classList.remove("error");
            }
        }
    }

    if (person.email.value.includes("@") == false) {
        containsErrors[email] = true;
        if (!person.email.classList.contains("error")) {
            person.email.classList.add("error");
        }
    } else {
        containsErrors[email] = false;

        if (person.email.classList.contains("error")) {
            person.email.classList.remove("error");
        }
    }

    // TODO: Inside loop, validate the value of each input
    if (!Object.values(containsErrors).includes(true)) {
        addParticipant(event, person);
        toggleModal(person);
        document.querySelector("form").reset();
    }
  
    // TODO: If no errors, call addParticipant() and clear fields
  
  }
  
  // Step 3: Replace the form button's event listener with a new one that calls validateForm()
  submitButton.addEventListener("click", validateForm);

/*** 
    ################################
    ||       Success Modal        ||
    ################################

  Purpose:
  - Use this starter code to add a pop-up modal to your website.
***/

let animation = true;
const motionButton = document.querySelector("#motion-button")
const motionStatus = document.querySelector('#motion-status')
const reduceMotion = (event) => {
    if (animation) {
        animation = false;
        motionStatus.textContent = "Motion: Off";
    } else {
        animation = true;
        motionStatus.textContent = "Motion: On";
    }
}

motionButton.addEventListener("click", reduceMotion);

const toggleModal = (person) => {
    const modal = document.querySelector(".modal");
    const modelContent = document.querySelector("#modal-text");
    
    // Update modal display to flex
    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    console.log(person.name.value)
    modelContent.textContent = `Thank mew ${person.name.value} so much for signing up to visit our cozy Cat Café — we’re feline overjoyed to welcome you into our purr-fect little family! 🐱☕ Whether you’re here for the cuddles, the coffee, or just a little pawsitivity, we can’t wait to share some meowgical moments with you.`

    if (animation) {
        let intervalId = setInterval(animateImage, 800);
    }

    // Set modal timeout to 5 seconds
    setTimeout(() => {
        // TODO: Update modal display to none
        if (animation) {
            clearInterval(intervalId);
        }
        modal.style.display = "none";
    }, 5000);
}

const closeButton = document.querySelector("#close-modal")
const closeModal = (event) => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

/***
    ################################
    ||         Animations         ||
    ################################

 Purpose:
 - animation variables and animateImage() function
 ***/
let stickFactor = 0;
let baristaFactor = 0;
let modalStick = document.querySelector("#stick")
let modalBarista = document.querySelector("#barista")

const animateImage = () => {
    if (stickFactor == 0) {
        stickFactor = -10;
    } else {
        stickFactor = 0;
    }

    if (baristaFactor == 0) {
        baristaFactor = 10;
    } else {
        baristaFactor = 0;
    }

    modalStick.style.transform = `rotate(${stickFactor}deg)`; 
    modalBarista.style.transform = `rotate(${baristaFactor}deg)`;
}

/***
################################
||         Dating App         ||
################################

***/

let suitorNum = 1;

const suitorImageSource = ["img/suitors/cat1.jpg", 
    "img/suitors/cat2.jpg", 
    "img/suitors/cat3.png", 
    "img/suitors/cat4.png", 
    "img/suitors/cat5.png"];

const suitorNames = ["Mr. Whiskers", 
    "TunaTurner", 
    "Clawdia", 
    "Sir Pounce-a-lot", 
    "LunaFurball"];
const suitorAges = [7, 2, 5, 3, 4];
const suitorJobs = ["📚 Bookstore Security Officer", 
    "🎤 Freelance Yowler / Midnight Vocalist", 
    "🐾 Freelance Sock Assassin", 
    "⚔️ Sofa Knight / Crinkle Toy Tester", 
    "🔮 Astrology Influencer / Moonbeam Analyst"];

const suitorBios = ["Professional napper. Will judge you from the bookshelf. (Definitely 47 in cat years.)", 
    "I eat, I scream at 3am, I love. Swipe if you like chaos. (Legally an adult, emotionally a gremlin.)", 
    "Meowdy. I bite ankles and hearts 💘 (Certified menace with a soft side.)", 
    "Knight in furry armor. Defender of treats. (Has a sword. It’s a breadstick.)", 
    "Not a phase, Mom. I'm mysterious. Let’s vibe under the moon. 🌙 (Reads horoscopes unironically.)"];

const yesButton = document.querySelector("#yes");
const noButton = document.querySelector("#no");

const changeProfile = (event) => {
    const image = document.querySelector("#suitor-img");
    const nameAge = document.querySelector("#name-age");
    const job = document.querySelector("#job");
    const description = document.querySelector("#description")

    image.src = suitorImageSource[suitorNum];
    nameAge.textContent = `${suitorNames[suitorNum]}, ${suitorAges[suitorNum]}`;
    job.textContent = `${suitorJobs[suitorNum]}`;
    description.textContent = `${suitorBios[suitorNum]}`;
    suitorNum = (suitorNum + 1) % 5;
}

const toggleDatingModal = () => {
    var audio = new Audio('audio/cat-meow.mp3');
    audio.play();

    const modal = document.querySelector("#dating-modal");
    
    // Update modal display to flex
    modal.style.display = "flex";

    // Set modal timeout to 5 seconds
    setTimeout(() => {
        // Update modal display to none
        modal.style.display = "none";
        changeProfile();

    }, 2500);
}

yesButton.addEventListener("click", toggleDatingModal);
noButton.addEventListener("click", () => {
    var audio = new Audio('audio/cat-fighting.mp3');
    audio.play();

    setTimeout(() => {
        changeProfile();
    }, 5000);
});