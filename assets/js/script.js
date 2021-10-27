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
    /** Show take The score and check if is enough to buy.
     * additional control on seconds left
     * 
     * @param {Number} score- click score 
     * @param {String} btn - HTML button element
     * @param {Number} prix - price of element
     */
let showBonus = (score, btn, prix) => {
        if ((score >= prix) && (b == 30)) {
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
            showBonus(credit, btnBonus, coutBonus)
        }, 1000);
    }
    /**
     * Finish Function
     */
let finish = () => {
        clearInterval(intervalId);
        b = 30;
        timeleft.style.display = "none"
        showBonus(credit, btnBonus, coutBonus)
        clickPower = multicounter
    }
    /**
     * Start Function
     */
let start = () => {
        clickPower = clickPower * 2
        intervalId = setInterval(bonus, 1000);
    }
    /**
     * Bonus
     */
let bonus = () => {
        timeleft.innerHTML = "Bonus " + b + "s left"
        b--
        if (b < 0) finish();
        else {}
    }
    // let play = () => {
    //     var audio = document.getElementById("audio");
    //     audio.play();
    // }
    /**
     hide functioon
    */
let hide = () => {
        console.log("closed")
        let menu = document.getElementById("menu_settings")
        menu.style.display = "none"
    }
    /**
         Is OPEN functioon
        @returns {boolean} 
        */
let isopen = () => {
        let menu = document.getElementById("menu_settings")
        if (menu.style.display == "none") return false
        else return true
    }
    /**
     * Update SCORE FUNCTION
     */
let updateScore = () => {
        labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
        labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
        labelBonus.innerHTML = "Bonus " + coutBonus;
        score.innerHTML = credit;
        xMulti.innerHTML = "x" + multicounter
        xAuto.innerHTML = "x" + autocounter
        cps.innerHTML = clickSec + " click/sec "
    }
    /**
     * RESET FUNCTION
     */
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
        let auto_x_fois = document.querySelector("#auto-clicker .x_fois")
        auto_x_fois.style.display = "none"
        let multi_x_fois = document.querySelector("#multiplier .x_fois")
        multi_x_fois.style.display = "none"
        credit = 0;
        coutMultiplier = 30;
        coutAutoClick = 125;
        coutBonus = 250;
        clickPower = 1;
        clickSec = 1;
        intervalId = null
        autocounter = 0
        multicounter = 0
        b = 30
    }
    /*---------
    Main Section
    ----------*/
    /* Initialize HTML Elements */
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
    /*Initialize Variable*/
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
/*
EventListener for Cookie Element
Increse Score 
Update Score
Check aviability for bonus
*/
cookieClicker.addEventListener("click", () => {
        // play()
        credit = credit + clickPower
        updateScore()
        show(credit, btnMultiplier, coutMultiplier);
        show(credit, btnAutoClicker, coutAutoClick);
        showBonus(credit, btnBonus, coutBonus)
    })
    /*
    EventListener for MultiClick Button
    Increse Counter and ClickPower
    Increse Price
    Decrese Price from Score
    Remove "display:none"
    Update Score
    Check aviability for bonus
    */
btnMultiplier.addEventListener('click', () => {

        multicounter++
        credit = credit - coutMultiplier;
        clickPower++
        let a = document.querySelector("#multiplier .x_fois")
        a.removeAttribute("style")
        coutMultiplier = coutMultiplier * 2;
        clickSec = clickSec + 1
        updateScore()
        labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
        show(credit, btnMultiplier, coutMultiplier);
        show(credit, btnAutoClicker, coutAutoClick);
        showBonus(credit, btnBonus, coutBonus)
    })
    /*
    EventListener for AutoClick Button
    Increse Counter and Click per Seconds
    Increse Price
    Decrese Price from Score
    Start Auto Click
    Remove "display:none"
    Update Score
    */
btnAutoClicker.addEventListener('click', () => {
        autocounter++
        clickSec = autocounter * clickPower;
        credit = credit - coutAutoClick;
        coutAutoClick = coutAutoClick * 2;
        autoincrease();
        let a = document.querySelector("#auto-clicker .x_fois")
        a.removeAttribute("style")
        cps.removeAttribute("style")
        updateScore()

    })
    /*
    EventListener for MultiClick Button
    Increse Counter and ClickPower
    Increse Price
    Decrese Price from Score
    Remove "display:none"
    Update Score
    Check aviability for bonus
    */
btnBonus.addEventListener("click", () => {
        credit = credit - coutBonus
        coutBonus = coutBonus * 4
        start()
        console.log("bonus activated")
        timeleft.removeAttribute("style")
        updateScore()
        show(credit, btnMultiplier, coutMultiplier);
        show(credit, btnAutoClicker, coutAutoClick);
        showBonus(credit, btnBonus, coutBonus)
    })
    /*
    Open And Close settings pop up menu
    */
btnMenu.addEventListener("click", () => {
    if (!isopen()) {
        let menu = document.getElementById("menu_settings")
        menu.removeAttribute("style")
        console.log("open")
    } else { hide() }
})

/*Start Reset */
reset()