// const {Howl, Howler} = require('howler');
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
        auto = setInterval(() => {
            credit = credit + 1
            updateScore()
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
    /*
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
        checkImage(credit)
    }
    /**
     * Change Cookie Imgage
     */
let checkImage = (score) => {
        if (img_index > 4) {
            img_index = 4
        }
        if (score > check) {
            cookieImg.setAttribute("src", "./assets/img/cookie_" + img_index + ".svg")
            img_index++
            check = check * 2
        }

    }
    /**
     * RESET FUNCTION
     */
let reset = () => {
        clearInterval(auto)
        cookieImg.setAttribute("src", "./assets/img/cookie_1.svg")
        btnMultiplier.disabled = "true"
        btnAutoClicker.disabled = "true"
        btnBonus.disabled = "true"
        score.innerHTML = 0
        labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
        labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
        labelBonus.innerHTML = "Bonus " + coutBonus;
        timeleft.style.visibility = "hidden"
        cps.style.visibility = "hidden"
        xMulti = document.getElementById('x_multi')
        auto_x_fois.style.visibility = "hidden"
        multi_x_fois.style.visibility = "hidden"
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
        check = 250;
        img_index = 2
    }
    /*
    Saving function
    */
let save = () => {
    scoreStorage.setItem("Score", credit)
    scoreStorage.setItem("MultiplierPrice", coutMultiplier)
    scoreStorage.setItem("AutoClickPrice", coutAutoClick)
    scoreStorage.setItem("Bonus", coutBonus)
    scoreStorage.setItem("ClickPower", clickPower)
    scoreStorage.setItem("ClickSec", clickSec)
    scoreStorage.setItem("img_index", img_index)
    scoreStorage.setItem("MultiplierCounter", multicounter)
    scoreStorage.setItem("AutoCounter", autocounter)
    scoreStorage.setItem("Check_score", check)
    if (auto_x_fois.style.visibility == "hidden") {
        var x = "hidden"
    }
    if (multi_x_fois.style.display == "hidden") {
        var y = "hidden"
    }
    if (cps.style.visibility = "hidden") {
        var z = "hidden"
    }
    scoreStorage.setItem("StatusclikSec", z)
    scoreStorage.setItem("Status_auto_x_fois", x)
    scoreStorage.setItem("Status_multi_x_fois", y)
    console.table(scoreStorage)
}
let initCookie = () => {


        credit = Number(scoreStorage.getItem("Score"))
        coutMultiplier = Number(scoreStorage.getItem("MultiplierPrice"))
        coutAutoClick = Number(scoreStorage.getItem("AutoClickPrice"))
        coutBonus = Number(scoreStorage.getItem("Bonus"))
        clickPower = Number(scoreStorage.getItem("ClickPower"))
        clickSec = Number(scoreStorage.getItem("ClickSec"))
        autocounter = Number(scoreStorage.getItem("AutoCounter"))
        multicounter = Number(scoreStorage.getItem("MultiplierCounter"))
        check = Number(scoreStorage.getItem("Check_score"))
        img_index = Number(scoreStorage.getItem("img_index"))
        if ((scoreStorage.getItem("Status_auto_x_fois") === "hidden")) {
            multi_x_fois.style.visibility = "hidden"
        } else {
            auto_x_fois.removeAttribute("style")
        }
        if ((scoreStorage.getItem("Status_multi_x_fois") === "hidden")) {
            multi_x_fois.style.visibility = "hidden"
        } else {
            multi_x_fois.removeAttribute("style")
        }
        if ((scoreStorage.getItem("StatusclikSec") === "hidden")) {
            cps.style.visibility = "hidden"
        } else {
            cps.removeAttribute("style")
        }
        console.log("Credit " + credit + typeof(credit))
        console.log("CoutMulti " + coutMultiplier + typeof(coutMultiplier))
        console.log("CoutAuto " + coutAutoClick + typeof(coutAutoClick))
        console.log("Cout Bounus" + coutBonus + typeof(coutBonus))
        console.log("POwer " + clickPower + typeof(clickPower))
        console.log("Sec " + clickSec + typeof(clickSec))
        console.log("Auto " + autocounter + typeof(crediautocountert))
        console.log("Multi " + multicounter + typeof(crmulticounteredit))
        console.log("chek " + check + typeof(crecheckdit))
        console.log("img_indew " + img_index + typeof(img_index))
        show(credit, btnMultiplier, coutMultiplier);
        show(credit, btnAutoClicker, coutAutoClick);
        showBonus(credit, btnBonus, coutBonus)
        updateScore()


    }
    /*Bite animation
     */
let cursorBite = (e) => {
        mouseCursor.animate([
            // keyframes
            { top: e.pageY - 5 + "px" },
            { left: e.pageX + "px" },
        ], {
            // timing options
            duration: 100
        });
        mouseCursor.animate([
            // keyframes
            { top: e.pageY + 20 + "px" },
            { left: e.pageX + "px" }
        ], {
            // timing options
            duration: 100
        });
    }
    /*---------
    Main Section
    ----------*/
    /* Initialize HTML Elements */
var multi_x_fois = document.querySelector("#multiplier .x_fois")
var auto_x_fois = document.querySelector("#auto-clicker .x_fois")
var scoreStorage = window.localStorage
const cookieClicker = document.getElementById('cookie_holder');
const btnSave = document.getElementById("save")
const btnLoad = document.getElementById("load")
const cookieImg = document.getElementById("cookieClicker")
const score = document.getElementById('score');
const btnReset = document.getElementById("reset")
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
var mouseCursor = document.getElementById("cursor_top")
var mouseCursor_back = document.getElementById('cursor_back')
const btnMenu = document.getElementById("settings")
    /*variable audio
     */
let sfx_bite = new Audio()
sfx_bite.src = "./assets/media/SF-croq.mp3"
sfx_bite.volume = "0"
let music = new Audio()
music.src = "./assets/media/Melo1.mp3 "
music.volume = '0'
    /*Initialize all variable*/
var auto = 'undefined'
var check = 250;
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
var img_index = 2
labelMultiplier.innerHTML = "Multiclick " + coutMultiplier;
labelAutoClicker.innerHTML = "Autoclick " + coutAutoClick;
labelBonus.innerHTML = "Bonus " + coutBonus;
/*
EventListener for Cookie Element
Increse Score 
Update Score
Check aviability for bonus
*/
cookieClicker.addEventListener("click", (e) => {
        cursorBite(e)
        sfx_bite.play()
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
        credit = credit - coutAutoClick;
        coutAutoClick = coutAutoClick * 2;
        show(credit, btnAutoClicker, coutAutoClick);
        autocounter++
        clickSec = autocounter;
        autoincrease();
        let a = document.querySelector("#auto-clicker .x_fois")
        a.removeAttribute("style")
        cps.removeAttribute("style")
        updateScore()

    })
    /*
    EventListener for BOnus Button
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


/*--------------
Mouth animation
-------------*/
cookieClicker.addEventListener("mousemove", cursorin)

function cursorin(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor_back.style.top = e.pageY + 40 + "px";
    mouseCursor_back.style.left = e.pageX + "px";
}
cookieClicker.addEventListener("mouseout", cursorout)

function cursorout(e) {
    mouseCursor.removeAttribute("style")
    mouseCursor_back.removeAttribute("style")
}


/**
 * Audio Event SFX
 */
var checkbox = document.getElementById("sfx")
checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            sfx_bite.volume = "1"
        } else {

            sfx_bite.volume = '0'
        }
    })
    /**
     * Audio Event Music
     */
var checkbox = document.getElementById("music")
checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        music.play()
        music.volume = "1"

    } else {
        music.volume = "0"
    }
})

btnSave.addEventListener("click", () => {
        save()
    })
    /*Start Reset */
btnReset.addEventListener("click", () => {
    reset()
})
btnLoad.addEventListener("click", () => {
    initCookie()
})