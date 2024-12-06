const phaseQuestions = {
    planning: [
        {
            question: "What is the primary goal of a feasibility study?",
            options: [
                "Assess project viability",
                "Develop a detailed design",
                "Conduct system testing",
                "Monitor project performance",
            ],
            answer: "Assess project viability",
        },
    ],
    design: [
        {
            question: "What is included in the detailed engineering design phase?",
            options: [
                "Developing detailed drawings and specifications",
                "Procuring materials for construction",
                "Testing the system components",
                "Assessing project viability",
            ],
            answer: "Developing detailed drawings and specifications",
        },
    ],
    procurement: [
        {
            question: "What is the main goal of the procurement phase?",
            options: [
                "Prepare tenders and evaluate bids",
                "Construct project components",
                "Test and commission systems",
                "Operate and maintain the system",
            ],
            answer: "Prepare tenders and evaluate bids",
        },
    ],
    construction: [
        {
            question: "What is the focus during the construction phase?",
            options: [
                "Building the project infrastructure",
                "Procurement of necessary equipment",
                "Testing the system performance",
                "Feasibility assessment",
            ],
            answer: "Building the project infrastructure",
        },
    ],
    commissioning: [
        {
            question: "What happens during commissioning and system testing?",
            options: [
                "Ensure systems are fully operational and meet design specifications",
                "Procure required materials",
                "Conduct a feasibility study",
                "Operate and maintain the system",
            ],
            answer: "Ensure systems are fully operational and meet design specifications",
        },
    ],
    operation: [
        {
            question: "What is the primary focus during operation and maintenance?",
            options: [
                "Ensure continued functionality of systems and processes",
                "Develop detailed project drawings",
                "Test the project systems",
                "Procure and tender equipment",
            ],
            answer: "Ensure continued functionality of systems and processes",
        },
    ],
};
// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0; // Track total score for the entire game
let currentPhase = "basic";
let completedPhases = { basic: false, intermediate: false, advanced: false };
let startTime;
let endTime;

// Audio Elements
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const backgroundMusic = new Audio("music.mp3");

backgroundMusic.loop = true;
backgroundMusic.volume = 0.1; // Set volume to 20% (range is 0.0 to 1.0)

// Navigation Functions
function navigateToScenario() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const designation = document.getElementById("designation").value;

    if (!name || !department || !designation) {
        alert("Please enter your name, designation, and department.");
        return;
    }

    startTime = Date.now();
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";

    // Automatically start the first phase
    setTimeout(() => {
        startPhase("planning");
    }, 1000); // Delay to give time for transition
}

function showQuiz() {
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("scenario-page").style.display = "none";
    startMusic();
}

function showScenarioPage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("scenario-page").style.display = "flex";
    stopMusic();
}

function showCongratulationsPage() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("congratulations-page").style.display = "flex";
    stopMusic();

    endTime = Date.now();
    const totalTime = Math.round((endTime - startTime) / 1000);
    const name = document.getElementById("name").value;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const timeTaken = minutes > 0 ? `${minutes} minutes and ${seconds} seconds` : `${seconds} seconds`;

    const message = `
        Thank you, <strong>${name}</strong>, you have successfully completed the game!
        <br>Your total score is <strong>${totalScore}</strong>, and you took <strong>${timeTaken}</strong> to complete the game.
    `;
    document.getElementById("congratulations-message").innerHTML = message;

    const congratulationsGif = document.getElementById("congratulations-gif");
    if (congratulationsGif) {
        congratulationsGif.src = "celebration.gif";
        congratulationsGif.style.display = "block";
    }

    console.log(`Game completed by ${name} with a total score of ${totalScore} in ${timeTaken}.`);
}

// Quiz Functions
function loadQuestion() {
    const questions = phaseQuestions[currentPhase];

    // If all questions are answered, move to the next phase
    if (currentQuestionIndex >= questions.length) {
        updatePhase(); // Trigger phase transition
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionsList = document.getElementById("options");
    const questionElement = document.getElementById("question");
    const nextBtn = document.getElementById("next-btn");

    // Reset Next button
    nextBtn.disabled = true; // Disable Next button initially
    nextBtn.style.display = "none"; // Hide Next button initially

    // Clear previous options
    optionsList.innerHTML = "";

    // Reset the question and fade it in
    questionElement.innerText = question.question;
    questionElement.style.opacity = 0; // Start hidden
    questionElement.style.transition = "opacity 0.5s ease-in-out";
    setTimeout(() => {
        questionElement.style.opacity = 1; // Fade in
    }, 100);

    // Create options and enable interactions
    question.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.style.opacity = 0; // Start hidden
        li.style.transition = "opacity 0.5s ease-in-out";
        li.classList.add("option-item"); // Styling class for options
        li.style.pointerEvents = "none"; // Disable pointer events initially

        // Append to options list
        optionsList.appendChild(li);

        // Fade in the option with a delay
        setTimeout(() => {
            li.style.opacity = 1; // Make the option visible
            li.style.pointerEvents = "auto"; // Enable interactions
            li.onclick = () => handleOptionSelect(option, question.answer, li); // Attach click handler
        }, index * 500); // Delay between options
    });

    // Handle Next button click for question transitions
    nextBtn.onclick = () => {
        nextBtn.disabled = true; // Disable the button immediately after clicking
        currentQuestionIndex++; // Move to the next question
        loadQuestion(); // Load the next question
    };
}

function handleOptionSelect(selectedOption, correctAnswer, element) {
    const options = document.querySelectorAll("#options li");

    // Disable further selections
    options.forEach((li) => (li.onclick = null));

    // Highlight the selected option and update the score
    if (selectedOption === correctAnswer) {
        correctSound.play(); // Play correct answer sound
        element.classList.add("correct"); // Add a correct answer style
        score += 10; // Increment score for the current phase
        totalScore += 10; // Increment total score for the entire game
    } else {
        wrongSound.play(); // Play wrong answer sound
        element.classList.add("incorrect"); // Add an incorrect answer style

        // Highlight the correct answer
        options.forEach((li) => {
            if (li.innerText === correctAnswer) li.classList.add("correct");
        });
    }

    // Update the score display
    const scoreDisplay = document.getElementById("score-value");
    if (scoreDisplay) scoreDisplay.innerText = totalScore;

    // Enable the Next button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block"; // Ensure it is visible
    nextBtn.disabled = false; // Enable the button after selection
}

function updatePhase() {
    completedPhases[currentPhase] = true;

    // Capture the current phase score before resetting
    const phaseScore = score;
    console.log(
        `Current Phase: ${currentPhase}, Phase Score: ${phaseScore}, Total Score Before Update: ${totalScore}`
    );

    // Unlock the next phase button based on the current phase
    if (currentPhase === "planning") {
        document.getElementById("design-btn").disabled = false; // Unlock Design button
    } else if (currentPhase === "design") {
        document.getElementById("procurement-btn").disabled = false; // Unlock Procurement button
    } else if (currentPhase === "procurement") {
        document.getElementById("construction-btn").disabled = false; // Unlock Construction button
    } else if (currentPhase === "construction") {
        document.getElementById("commissioning-btn").disabled = false; // Unlock Commissioning button
    } else if (currentPhase === "commissioning") {
        document.getElementById("operation-btn").disabled = false; // Unlock Operation button
    }

    // Check if the current phase is the last phase
    if (currentPhase === "operation") {
        document.getElementById("right-image").style.display = "block"; // Show the right image
        showCompletionPopup(); // Show the final message pop-up
        return; // Exit function to prevent further transitions
    }

    // Show the phase completion pop-up for other phases
    showPhaseCompletionPopup(currentPhase, phaseScore, () => {
        if (currentPhase === "planning") {
            startPhase("design");
        } else if (currentPhase === "design") {
            startPhase("procurement");
        } else if (currentPhase === "procurement") {
            startPhase("construction");
        } else if (currentPhase === "construction") {
            startPhase("commissioning");
        } else if (currentPhase === "commissioning") {
            startPhase("operation");
        }

        score = 0; // Reset for the next phase
        console.log(`Score Reset to: ${score}`);
        document.getElementById("score-value").innerText = totalScore; // Display the cumulative total score
    });

    console.log(`Total Score After Update: ${totalScore}`);
}

function showPhaseCompletionPopup(phase, phaseScore, callback) {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "10px";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "#fff";
    popup.style.textAlign = "center";
    popup.style.fontSize = "1.5em";
    popup.style.zIndex = "1000";
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.5s ease-in-out";

    popup.innerHTML = `
        <h2>Phase Complete!</h2>
        <p>You completed the <strong>${phase}</strong> phase.</p>
        <p>Your score for this phase: <strong>${phaseScore}</strong></p>
        <p>Total score so far: <strong>${totalScore}</strong></p>
        <button id="popup-close-btn">Continue</button>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);

    const closeButton = document.getElementById("popup-close-btn");
    closeButton.onclick = () => {
        popup.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(popup);
            if (callback) callback();
        }, 500);
    };
}

function showCompletionPopup() {
    const popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "10px";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popup.style.color = "#fff";
    popup.style.textAlign = "center";
    popup.style.fontSize = "1.5em";
    popup.style.zIndex = "1000";
    popup.style.opacity = 0;
    popup.style.transition = "opacity 0.5s ease-in-out";

    popup.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You have successfully completed all the phases!</p>
        <p>Thank you for participating in this game.</p>
        <button id="popup-close-btn">Finish</button>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.opacity = 1;
    }, 100);

    const closeButton = document.getElementById("popup-close-btn");
    closeButton.onclick = () => {
        popup.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(popup);
            showCongratulationsPage();
        }, 500);
    };
}

function startPhase(phase) {
    currentPhase = phase;
    currentQuestionIndex = 0;
    score = 0; // Reset the phase-specific score
    document.getElementById("score-value").innerText = totalScore;

    // Ensure the left image remains visible after the planning phase starts
    document.getElementById("left-image").style.display = "block";

    // Hide the right image until the last phase is completed
    if (phase !== "operation") {
        document.getElementById("right-image").style.display = "none";
    }

    showQuiz();
    loadQuestion(); // Automatically load the first question
}

// Restart Function
function restartQuiz() {
    location.reload();
}

// Music Control Functions
function startMusic() {
    backgroundMusic.play();
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function toggleMute() {
    backgroundMusic.muted = !backgroundMusic.muted;
    document.getElementById("mute-button").innerText = backgroundMusic.muted ? "Unmute" : "Mute";
}
