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
let increase = () => {
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
            click_bonus = (click * 2) - 1
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
const xMulti = document.getElementById('x_multi')
const xAuto = document.getElementById('x_auto')
const btnMenu = document.getElementById("settings")


//Compteur
var click_bonus = 0
var credit = 0;
var coutMultiplier = 30;
var coutAutoClick = 120;
var coutBonus = 250;
var click = 1;
var clickSeconde = 1;
var intervalId = null
var b = 30
labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
labelBonus.innerHTML = "Bonus " + coutBonus;
//EventListener
cookieClicker.addEventListener("click", () => {
    // play()
    credit = credit + click + click_bonus;
    score.innerHTML = credit;
    show(credit, btnMultiplier, coutMultiplier);
    show(credit, btnAutoClicker, coutAutoClick);
    show(credit, btnBonus, coutBonus)
})
btnMultiplier.addEventListener('click', () => {
    let a = document.querySelector("#multiplier .x_fois")
    a.removeAttribute("style")
    credit = credit - coutMultiplier;
    click = click + 1;
    coutMultiplier = coutMultiplier * 2;
    xMulti.innerHTML = "x" + click
    score.innerHTML = credit;
    labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
    show(credit, btnMultiplier, coutMultiplier);
})
btnAutoClicker.addEventListener('click', () => {
    let a = document.querySelector("#auto-clicker .x_fois")
    a.removeAttribute("style")
    credit = credit - coutAutoClick;
    coutAutoClick = coutAutoClick * 2;
    increase();
    cps.removeAttribute("style")
    labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
    cps.innerHTML = clickSeconde + " click/sec "
    clickSeconde++;
    xAuto.innerHTML = "x" + clickSeconde

})
btnBonus.addEventListener("click", () => {
    credit = credit - coutBonus
    coutBonus = coutBonus * 4
    score.innerHTML = credit;
    start()
    console.log("bonus activated")
    timeleft.removeAttribute("style")
    labelBonus.innerHTML = "Bonus " + coutBonus;
    show(credit, btnBonus, coutBonus)
})

btnMenu.addEventListener("click", () => {
    if (!isopen()) {
        let menu = document.getElementById("menu_settings")
        menu.removeAttribute("style")
        console.log("open")
    } else { hide() }
})