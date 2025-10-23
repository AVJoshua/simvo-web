//Craps Main Data
let crapsUsername = ""

//Craps Game Settings
const startingMoney = 1000
const startingRounds = 0

//HTML Element IDs
const crapsUsernameInput = "craps-username-input"
const crapsRegistrationPane = "craps-registration-pane"
const crapsMainSection = "craps-main-section"
const crapsStatsUsername = "craps-stats-username"
const crapsStatsMoney = "craps-stats-money"
const crapsStatsRounds = "craps-stats-rounds"

//In-game variables
let currentMoney = startingMoney
let currentRounds = startingRounds


function registerCrapsPlayer() {
	crapsUsername =	document.getElementById(crapsUsernameInput).value

	// Username validation check
    let firstCharIsDigitRegex = /^[0-9]|[^a-zA-Z0-9_]/g
    if (firstCharIsDigitRegex.test(crapsUsername) || crapsUsername.length < 5) {
        alert("Username must be at least 5 characters long, alphanumeric and underscore only, no spaces, and cannot start with a digit")
    } else {
        removeRegistrationPane()
        showMainGameSection()
        setUpFirstRound ()
    }
}

function removeRegistrationPane () {
    document.getElementById(crapsRegistrationPane).style.display = "none"
}

function showMainGameSection () {
    document.getElementById(crapsMainSection).style.display = "block"
}

function setUpFirstRound () {
    document.getElementById(crapsStatsUsername).innerHTML = crapsUsername
    currentMoney = startingMoney
    currentRounds = startingRounds
    setMoney (currentMoney)
    setRounds(currentRounds)
}

function setMoney (moneye) {
    document.getElementById(crapsStatsMoney).innerHTML = moneye
}

function setRounds (round) {
    document.getElementById(crapsStatsRounds).innerHTML = round
}
