/*------------
Functions
----------*/
/** Show take The score and check if is enough to buy.
 * 
 * @param {Number} score- click score 
 * @param {String} btn - HTML button element
 * @param {Number} prix - price of element
 */
let show = (score, btn, prix) => {
        if (score >= prix) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    }
    /**
     * Increase start a setInterval to increase the click per seconds 
     * @param {Number} number - click per seconds
     */
let autoincrease = () => {
    setInterval(() => {
        cookieClicker.click()
        show(credit, btnMultiplier, coutMultiplier);
        show(credit, btnAutoClicker, coutAutoClick);
        show(credit, btnBonus, coutBonus)
    }, 1000);
}
let finish = () => {
    clearInterval(intervalId);
    click_bonus = 0
}
let start = () => {
    intervalId = setInterval(bonus, 1000);
}
let bonus = () => {
        timeleft.innerHTML = "Bonus " + b + "s left"
        b--
        if (b == 0) finish();
        else {
            cookieClicker.click()
        }
    }
    // let play = () => {
    //     var audio = document.getElementById("audio");
    //     audio.play();
    // }
let hide = () => {
    console.log("closed")
    let menu = document.getElementById("menu_settings")
    menu.style.display = "none"

}
let isopen = () => {
    let menu = document.getElementById("menu_settings")
    if (menu.style.display == "none") return false
    else return true
}

let updateScore = () => {
    labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
    labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
    labelBonus.innerHTML = "Bonus " + coutBonus;
    score.innerHTML = credit;
    xMulti.innerHTML = "x" + multicounter
    xAuto.innerHTML = "x" + autocounter
    cps.innerHTML = clickSec + " click/sec "
}
let reset = () => {
    btnMultiplier.disabled = "true"
    btnAutoClicker.disabled = "true"
    btnBonus.disabled = "true"
    score.innerHTML = 0

    labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
    labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
    labelBonus.innerHTML = "Bonus " + coutBonus;
    timeleft.style.display = "none"
    xMulti = document.getElementById('x_multi')
    let a = document.querySelector("#auto-clicker .x_fois")
    a.style.display = "none"
    let b = document.querySelector("#multiplier .x_fois")
    b.style.display = "none"
    click_bonus = 0
    credit = 0;
    coutMultiplier = 30;
    coutAutoClick = 120;
    coutBonus = 250;
    clickPower = 1;
    clickSec = 1;
    autocounter = 1
    multicounter = 1
    intervalId = null
    b = 30
}

/*---------
Main Section
----------*/
//Récupération des boutons & inputs:
const cookieClicker = document.getElementById('cookie_holder');
const score = document.getElementById('score');
const btnMultiplier = document.getElementById('multiplier');
const btnAutoClicker = document.getElementById('auto-clicker');
const btnBonus = document.getElementById("bonus")
const cps = document.getElementById("clicks_seconde")
const labelMultiplier = document.getElementById('multiplier_label');
const labelAutoClicker = document.getElementById('autoclick_label');
const labelBonus = document.getElementById("bonus_label")
const timeleft = document.getElementById("timer_bonus")
var xMulti = document.getElementById('x_multi')
var xAuto = document.getElementById('x_auto')
const btnMenu = document.getElementById("settings")

//Compteur
var click_bonus = 0
var credit = 0;
var coutMultiplier = 30;
var coutAutoClick = 125;
var coutBonus = 250;
var clickPower = 1;
var clickSec = 1;
var intervalId = null
var autocounter = 0
var multicounter = 0
var b = 30
labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
labelBonus.innerHTML = "Bonus " + coutBonus;

//EventListener
cookieClicker.addEventListener("click", () => {
    // play()
    credit = credit + clickPower
    updateScore()
    show(credit, btnMultiplier, coutMultiplier);
    show(credit, btnAutoClicker, coutAutoClick);
    show(credit, btnBonus, coutBonus)
})
btnMultiplier.addEventListener('click', () => {
    clickSec = clickSec + multicounter;
    multicounter++
    credit = credit - coutMultiplier;
    clickPower = clickPower + 1;
    let a = document.querySelector("#multiplier .x_fois")
    a.removeAttribute("style")
    coutMultiplier = coutMultiplier * 2;
    updateScore()
    labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
    show(credit, btnMultiplier, coutMultiplier);
    show(credit, btnAutoClicker, coutAutoClick);
    show(credit, btnBonus, coutBonus)
})
btnAutoClicker.addEventListener('click', () => {
    clickSec = clickSec + multicounter;
    autocounter++
    credit = credit - coutAutoClick;
    coutAutoClick = coutAutoClick * 2;
    autoincrease();
    let a = document.querySelector("#auto-clicker .x_fois")
    a.removeAttribute("style")
    cps.removeAttribute("style")
    updateScore()
})
btnBonus.addEventListener("click", () => {
    credit = credit - coutBonus
    coutBonus = coutBonus * 4
    start()
    console.log("bonus activated")
    timeleft.removeAttribute("style")
    updateScore()
    show(credit, btnMultiplier, coutMultiplier);
    show(credit, btnAutoClicker, coutAutoClick);
    show(credit, btnBonus, coutBonus)
})

btnMenu.addEventListener("click", () => {
    if (!isopen()) {
        let menu = document.getElementById("menu_settings")
        menu.removeAttribute("style")
        console.log("open")
    } else { hide() }
})
reset()