// HTML Element IDs
const CrapsUsernameInput = "craps-username-input"
const CrapsRegistrationPane = "craps-game-registration-pane"
const CrapsMainSection = "craps-main-section"

function RegisterCrapsGamePlayer() {
    let Crapsusername = document.getElementById(CrapsUsernameInput).value
    alert(Crapsusername + " has been registered to play the Craps Game!")
    RemoveRegistrationPane()
    ShowMainGameSection()
}

function RemoveRegistrationPane() {
    document.getElementById(CrapsRegistrationPane).style.display = "none"

}
function ShowMainGameSection() {
    document.getElementById(CrapsMainSection).style.display = "block"

}