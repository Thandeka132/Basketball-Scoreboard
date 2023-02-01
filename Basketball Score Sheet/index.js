let homePoints = document.getElementById("count-home")
let guestPoints = document.getElementById("count-guest")
countHomePts = 0;
countGuestPts = 0;

function homeAddOnePoint() {
    countHomePts += 1 
    homePoints.textContent = countHomePts
}

function homeAddTwoPoints() {
    countHomePts += 2 
    homePoints.textContent = countHomePts
}

function homeAddThreePoints() {
    countHomePts += 3
    homePoints.textContent = countHomePts
}

function guestAddOnePoint() {
    countGuestPts += 1
    guestPoints.textContent = countGuestPts
}

function guestAddTwoPoints() {
    countGuestPts += 2
    guestPoints.textContent = countGuestPts
}

function guestAddThreePoints() {
    countGuestPts += 3
    guestPoints.textContent = countGuestPts
}