const phaseQuestions = {
    planning: [
        { 
            question: "According to CPHEEO, what is the per capita water supply standard for urban areas?", 
            options: ["135 liters per capita per day (LPCD)", "150 liters per capita per day", "120 liters per capita per day", "100 liters per capita per day"], 
            answer: "135 liters per capita per day (LPCD)"
        },
        { 
            question: "What is the primary purpose of a soil investigation before pipeline installation?", 
            options: ["To determine soil bearing capacity and corrosivity", "To identify water table level", "To estimate excavation costs", "To monitor pipeline pressure"], 
            answer: "To determine soil bearing capacity and corrosivity"
        },
        { 
            question: "What is the recommended maximum distance between two sluice valves on a water pipeline network?", 
            options: ["500 meters", "1000 meters", "200 meters", "150 meters"], 
            answer: "500 meters"
        },
        { 
            question: "In a feasibility study, what determines the best water source for the project?", 
            options: ["Quality, quantity, and proximity of water source", "Cost of treatment", "Population density", "Availability of contractors"], 
            answer: "Quality, quantity, and proximity of water source"
        },
        { 
            question: "What is the importance of demand forecasting in water supply planning?", 
            options: ["To ensure future water supply meets population needs", "To finalize project budgets", "To avoid pipeline corrosion", "To test pipeline durability"], 
            answer: "To ensure future water supply meets population needs"
        }
    ],
    design: [
        { 
            question: "What is the minimum depth for burying water supply pipelines in urban areas, as per CPHEEO guidelines?", 
            options: ["1.0 to 1.2 meters", "0.5 to 1 meter", "2.0 to 2.5 meters", "1.5 to 1.7 meters"], 
            answer: "1.0 to 1.2 meters"
        },
        { 
            question: "What factor determines the diameter of distribution pipes in a water supply network?", 
            options: ["Peak flow rate and velocity", "Reservoir capacity", "Ground slope", "Pipe material"], 
            answer: "Peak flow rate and velocity"
        },
        { 
            question: "Which type of pipe joint is preferred for DI pipes in urban water supply?", 
            options: ["Push-on joints", "Threaded joints", "Flanged joints", "Butt-welded joints"], 
            answer: "Push-on joints"
        },
        { 
            question: "What is the hydraulic gradient line (HGL) used for in water supply design?", 
            options: ["To represent water pressure variation in the system", "To indicate pipe material quality", "To monitor flow velocity", "To measure soil settlement"], 
            answer: "To represent water pressure variation in the system"
        },
        { 
            question: "What is the maximum permissible water velocity in a water pipeline?", 
            options: ["3.0 m/s", "2.0 m/s", "1.5 m/s", "4.5 m/s"], 
            answer: "3.0 m/s"
        }
    ],
    procurement: [
        { 
            question: "Which test ensures pipe quality before procurement?", 
            options: ["Hydrostatic pressure test", "Tensile strength test", "Visual inspection", "Chemical analysis"], 
            answer: "Hydrostatic pressure test"
        },
        { 
            question: "What ensures contractor compliance during procurement?", 
            options: ["Material Test Certificates (MTC)", "Tender advertisements", "Public inspections", "Vendor reviews"], 
            answer: "Material Test Certificates (MTC)"
        },
        { 
            question: "Which document defines quantities, materials, and costs for procurement?", 
            options: ["Bill of Quantities (BOQ)", "Purchase Order", "Tender Notice", "Specification Sheet"], 
            answer: "Bill of Quantities (BOQ)"
        },
        { 
            question: "Which pipe material is preferred for high-pressure water transmission?", 
            options: ["Ductile Iron (DI)", "PVC", "Cast Iron", "HDPE"], 
            answer: "Ductile Iron (DI)"
        },
        { 
            question: "What ensures timely delivery during procurement?", 
            options: ["A detailed supply schedule", "Cost minimization", "Single-source contracting", "Vendor selection based on availability"], 
            answer: "A detailed supply schedule"
        }
    ],
    construction: [
        { 
            question: "What is the purpose of bedding in pipeline construction?", 
            options: ["To provide uniform support for pipes", "To anchor pipes firmly in place", "To prevent water pressure loss", "To protect pipes from external loads"], 
            answer: "To provide uniform support for pipes"
        },
        { 
            question: "What test ensures pipeline integrity after installation?", 
            options: ["Pressure test", "Leakage test", "Corrosion test", "Visual inspection"], 
            answer: "Pressure test"
        },
        { 
            question: "What is the recommended trench width for a pipeline installation?", 
            options: ["Pipe diameter + 0.6 meters", "Pipe diameter + 1.5 meters", "Pipe diameter + 0.3 meters", "Pipe diameter + 0.9 meters"], 
            answer: "Pipe diameter + 0.6 meters"
        },
        { 
            question: "What material is recommended for backfilling trenches?", 
            options: ["Granular soil free of stones", "Clay soil", "Loose sand", "Wet soil"], 
            answer: "Granular soil free of stones"
        },
        { 
            question: "Why is soil compaction necessary after pipe installation?", 
            options: ["To avoid soil settlement and pipe misalignment", "To increase water flow", "To reduce trench width", "To increase pipe diameter"], 
            answer: "To avoid soil settlement and pipe misalignment"
        }
    ],
    commissioning: [
        { 
            question: "What is the final step in commissioning a water supply system?", 
            options: ["Ensuring all tests meet design specifications", "Calibrating flow meters", "Leakage detection", "Inspecting reservoirs"], 
            answer: "Ensuring all tests meet design specifications"
        },
        { 
            question: "What ensures water quality during commissioning?", 
            options: ["Chlorination and bacteriological testing", "Visual inspection", "Chemical treatment", "Pressure testing"], 
            answer: "Chlorination and bacteriological testing"
        },
        { 
            question: "What is the purpose of flow testing during commissioning?", 
            options: ["To verify uniform water distribution", "To detect leaks", "To monitor soil behavior", "To adjust reservoir levels"], 
            answer: "To verify uniform water distribution"
        },
        { 
            question: "Why is the system flushed during commissioning?", 
            options: ["To remove debris and contaminants", "To reduce pipeline pressure", "To improve water velocity", "To test soil settlement"], 
            answer: "To remove debris and contaminants"
        },
        { 
            question: "Which document marks the official handover of the system?", 
            options: ["Commissioning Certificate", "Quality Compliance Report", "Test Validation Report", "Material Certificate"], 
            answer: "Commissioning Certificate"
        }
    ],
    operation: [
        { 
            question: "What is the purpose of regular leak detection in water pipelines?", 
            options: ["To reduce water loss and improve efficiency", "To lower pipeline pressure", "To extend pipeline length", "To improve water taste"], 
            answer: "To reduce water loss and improve efficiency"
        },
        { 
            question: "Why is SCADA used during operation and maintenance?", 
            options: ["To monitor and control system performance remotely", "To test water quality", "To replace faulty pipes", "To build new reservoirs"], 
            answer: "To monitor and control system performance remotely"
        },
        { 
            question: "What is the recommended interval for pipeline maintenance?", 
            options: ["Quarterly", "Monthly", "Annually", "Bi-annually"], 
            answer: "Quarterly"
        },
        { 
            question: "What is a critical aspect of water supply sustainability?", 
            options: ["Regular maintenance and monitoring", "Replacing pipelines every year", "Increasing system pressure", "Reducing water storage"], 
            answer: "Regular maintenance and monitoring"
        },
        { 
            question: "What equipment is used to measure water flow in pipelines?", 
            options: ["Flow meters", "Pressure gauges", "SCADA sensors", "Chlorinators"], 
            answer: "Flow meters"
        }
    ],
    projectExecution: [
    {
        question: "Which department must approve road restoration plans after pipeline installation in urban areas?",
        options: ["Tamil Nadu Highways Department", "Public Works Department", "Urban Development Authority", "Revenue Department"],
        answer: "Tamil Nadu Highways Department"
    },
    {
        question: "For obtaining permission to cut National Highways during pipeline laying, which authority must be contacted?",
        options: ["National Highways Authority of India (NHAI)", "Tamil Nadu Highways Department", "Public Works Department", "Ministry of Road Transport and Highways"],
        answer: "National Highways Authority of India (NHAI)"
    },
    {
        question: "For tax exemption on construction materials for water supply projects, which department handles approvals?",
        options: ["Commercial Taxes Department", "Revenue Department", "Public Works Department", "Tamil Nadu Infrastructure Development Board"],
        answer: "Commercial Taxes Department"
    },
    {
        question: "Before beginning excavation, which online portal is used in Tamil Nadu for applying for permissions from multiple departments?",
        options: ["Tamil Nadu e-Governance Portal", "Smart City Portal", "TNeGA Road Cutting Portal", "Public Works E-Approval System"],
        answer: "Tamil Nadu e-Governance Portal"
    },
    {
        question: "To ensure water quality compliance during pipeline commissioning, which test is mandatory?",
        options: ["Chlorination and bacteriological testing", "Turbidity testing", "PH adjustment test", "Hardness compliance test"],
        answer: "Chlorination and bacteriological testing"
    },
    {
        question: "What document is essential for initiating payment requests for completed milestones in Tamil Nadu-funded projects?",
        options: ["Work Completion Certificate", "Tender Completion Report", "Tax Exemption Form", "Utility Clearance Document"],
        answer: "Work Completion Certificate"
    },
    {
        question: "For obtaining approvals to cross railway tracks during pipeline laying, which railway office must provide clearance?",
        options: ["Divisional Railway Manager’s Office", "Southern Railway Headquarters", "Indian Railways Urban Development Unit", "Public Works Railways Section"],
        answer: "Divisional Railway Manager’s Office"
    },
    {
        question: "Which agency ensures stakeholder consultations are conducted for urban water supply projects in Tamil Nadu?",
        options: ["Tamil Nadu Municipal Administration and Water Supply Department", "Tamil Nadu Highways Department", "Tamil Nadu Revenue Department", "Tamil Nadu Pollution Control Board"],
        answer: "Tamil Nadu Municipal Administration and Water Supply Department"
    },
    {
        question: "To ensure timely release of funds for the project, which document must be submitted to the Tamil Nadu Water Supply and Drainage Board?",
        options: ["Monthly Progress Report (MPR)", "Completion Certificate", "Tender Award Report", "Invoice Summary Document"],
        answer: "Monthly Progress Report (MPR)"
    },
    {
        question: "What is required from the Urban Local Body (ULB) before pipeline laying can begin in areas with existing infrastructure?",
        options: ["No Objection Certificate (NOC)", "Environmental Clearance Certificate", "Road Width Survey Report", "Utility Assessment Report"],
        answer: "No Objection Certificate (NOC)"
    }
]
};



// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let totalScore = 0; // Track total score for the entire game
let currentPhase = "basic";
let completedPhases = { basic: false, intermediate: false, advanced: false };
let startTime;
let endTime;
let initialCost = 100; // ₹100 crore
let initialTime = 12; // 12 months (1 year)
let totalQuestions = 40; // Adjust total number of questions
let costDecrement = initialCost / totalQuestions; // Reduce cost per question
let timeDecrement = initialTime / totalQuestions; // Reduce time per question

// Set initial display of time as years
document.getElementById("project-time").innerText = "1 Year";

function updateProjectTime() {
    let remainingTimeInMonths = Math.max(initialTime, 0).toFixed(2); // Calculate remaining months
    if (remainingTimeInMonths >= 12) {
        document.getElementById("project-time").innerText = "1 Year"; // Display 1 Year
    } else {
        document.getElementById("project-time").innerText = `${remainingTimeInMonths} Months`; // Display as months
    }
}

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

}

function showQuiz() {
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("scenario-page").style.display = "none";
    startMusic();

    // Automatically start the first phase only now
    startPhase("planning");
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

    // Determine the final message
    let costExceeded = initialCost > 0 ? `₹${initialCost.toFixed(2)}` : "₹0";
    let timeExceeded = initialTime > 0 ? `${initialTime.toFixed(2)} months` : "0 months";
    let summaryMessage =
        initialCost > 0 || initialTime > 0
            ? `You exceeded the project limits by <strong>${costExceeded}</strong> and <strong>${timeExceeded}</strong>.`
            : `Congratulations! You stayed within the project cost and time limits!`;

    const message = `
        Thank you, <strong>${name}</strong>, for completing the game!
        <br>Your total score is <strong>${totalScore}</strong>, and you took <strong>${timeTaken}</strong> to complete the game.
        <br>${summaryMessage}
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

        // Decrease cost and time for a correct answer
        initialCost -= costDecrement;
        initialTime -= timeDecrement;
    } else {
        wrongSound.play(); // Play wrong answer sound
        element.classList.add("incorrect"); // Add an incorrect answer style

        // Highlight the correct answer
        options.forEach((li) => {
            if (li.innerText === correctAnswer) li.classList.add("correct");
        });

        // Increase cost and time for an incorrect answer
        initialCost += costDecrement;
        initialTime += timeDecrement;
    }

    // Update the project cost and time displays
    document.getElementById("project-cost").innerText = `${Math.max(initialCost, 0).toFixed(2)} crore`;
    document.getElementById("project-time").innerText = `${Math.max(initialTime, 0).toFixed(2)} Months`;

    // Update the score display
    const scoreDisplay = document.getElementById("score-value");
    if (scoreDisplay) scoreDisplay.innerText = totalScore;

    // Enable the Next button
    const nextBtn = document.getElementById("next-btn");
    nextBtn.style.display = "block"; // Ensure it is visible
    nextBtn.disabled = false; // Enable the button after selection

 // Update the remaining time after the answer
    initialTime -= timeDecrement; // Reduce time
    updateProjectTime(); // Call the function to update display
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
    } else if (currentPhase === "operation") {
        document.getElementById("projectExecution-btn").disabled = false; // Unlock Project Execution button
    }

    // Check if the current phase is the last phase
    if (currentPhase === "projectExecution") {
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
        } else if (currentPhase === "operation") {
            startPhase("projectExecution");
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
    currentPhase = phase; // Set the current phase
    currentQuestionIndex = 0; // Start from the first question
    score = 0; // Reset phase score
    document.getElementById("score-value").innerText = totalScore;

    // Ensure the left image is visible
    document.getElementById("left-image").style.display = "block";

    // Hide the right image until the last phase
    if (phase !== "projectExecution") {
        document.getElementById("right-image").style.display = "none";
    }

    loadQuestion(); // Load the first question of the phase
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
