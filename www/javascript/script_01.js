const EventNames = {
    MOUSE_DOWN: "mousedown",
    MOUSE_UP: "mouseup",
    CLICK: "click",
    MOUSE_OVER: "mouseover",
    MOUSE_OUT: "mouseout",
    INPUT: "input"
    // etc
};

const Direction = {
    NEXT: 1,
    PREVIOUS: 2
}

const Interval = {
    DEBUG: 1000,
    PROD: 5000,
    DELAY: 50
}

/** 
 * 
 * 5.1. Déclarez une fonction nommée "checkIndex".
 * 5.2. Déclarez une condition pour tester si la checkbox loop_chx est cochée.
 * 5.3. Dans cette condition, si l'index est inférieur à 0, l'index devient égale au dernier index disponible du tableau de citations.
 * 5.4. Dans cette condition, si l'index est supérieur au dernier index disponible du tableau de citations, l'index devient égale au premier index disponible du tableau de citations.
 *  
 **/
function checkIndex() {
    if (loopChx.checked) {
        autoChx.disabled = false;
        console.log("loopChx.checked");
        const min = 0;
        const max = quotes.length - 1;

        if (index < min) {
            index = max;
        }

        if (index > max) {
            index = min;
        }

        if (next.disabled) {
            disableButton(next, false);
        }

        if (previous.disabled) {
            disableButton(previous, false);
        }
    } else {
        if (index == 0) {
            disableButton(next, false);
            disableButton(previous);
        } else if (index == quotes.length - 1) {
            if (autoChx.checked) {
                clearInterval(intervalID);
            }
            autoChx.disabled = true;
            disableButton(next);
            disableButton(previous, false);
        } else {
            autoChx.disabled = true;
            if (next.disabled) {
                disableButton(next, false);
            }
            if (previous.disabled) {
                disableButton(previous, false);
            }
        }
    }
}

function previousNextClickHandler(evt) {
    // switch (evt.target) {
    //     case next:
    //     case flecheNext:

    //         break;

    //     default:
    //         break;
    // }
    changeIndex(evt.target == next ? Direction.NEXT : Direction.PREVIOUS);
}

function changeIndex(direction = Direction.NEXT) {
    if (randomChx.checked) {
        let randomIndex;
        do {
            randomIndex = getRandomArbitrary(0, quotes.length);
            console.log("randomIndex", randomIndex);

        } while (randomIndex == index);
        index = randomIndex;
    } else {
        direction == Direction.NEXT ? index++ : index--;
        checkIndex();
    }

    loadQuote(index);
    console.log("changeIndex", "index", index);

}

/** 
 * 
 * 6.1. Déclarez une fonction nommée "disableButton" acceptant un paramètre nommé "button" et un autre nommé "bool" défini à true par défaut.
 * 6.2. Utilisez le param bool pour définir la propriété disabled du boutton.
 * 6.3. Si bool est à true, la classe CSS du bouton est "disabled", sinon la classe CSS est "buttonNextPrevious"
 * 6.4. Si bool est à true, supprimez l'écouteur d'évènement "click", sinon il faut l'ajouter.
 * 
 **/

function disableButton(button, bool = true) {
    button.disabled = bool;
    button.className = bool ? "disabled" : "buttonNextPrevious";
    if (bool) {
        button.removeEventListener(EventNames.CLICK, previousNextClickHandler);
    } else {
        button.addEventListener(EventNames.CLICK, previousNextClickHandler);
    }
}

function getRandomArbitrary(min, max, hasFloat = false) {
    var randomNumber = Math.random() * (max - min) + min;
    return hasFloat ? randomNumber : Math.floor(randomNumber);
}

/** 
 * 
 * 3.1. Déclarez une fonction nommée "loadQuote" acceptant un paramètre nommé "index".
 * 3.2. Dans la fonction, Déclarez une const nommée "quote" dont la valeur est égale à l'élément du tableau quotes dont l'index est le paramètre "index".
 * 3.3. Changez le texte de la div #numero pour y afficher le numéro de la citation / total de citations (ex : "3/14").
 * 3.4. Changez le texte de la div #citation pour y afficher le texte de la citation.
 * 3.5. Changez le texte de la div #auteur pour y afficher l'auteur de la citation.
 *  
 **/
function loadQuote(index) {
    const numeroDiv = document.querySelector("#numero");
    const citationDiv = document.querySelector("#citation");
    const authorDiv = document.querySelector("#auteur");
    const errorDiv = document.querySelector("#error");
    numeroDiv.textContent = getZeroFormat(index + 1, quotes.length) + "/" + quotes.length;
    if(index == -1){
        citationDiv.textContent = "";
        authorDiv.textContent = "";
        errorDiv.textContent = "Aucun résultat.";
    }else{
        const quote = quotes[index];
        citationDiv.textContent = quote[0];
        authorDiv.textContent = quote[1];
        errorDiv.textContent = "";
    }
}

function getZeroFormat(num, limit){
    const sNum = num.toString();
    const sLimit = limit.toString();
    const numZero = sLimit.length - sNum.length;
    let start = 0;
    let zero = "";
    while (start < numZero) {
        zero += "0";
        start++;
    }
    const format = zero + sNum;
    return format
}


/** 
 * 
 * 1.1. Ouvrez les citations dans le fichier "citations.txt" présent dans le dossier "asset" du TP.
 * 1.2. Créez une var quotes de type tableau qui contiendra chaque citation sous forme de tableau à 2 éléments (ex : [["texte de la citation 1", "auteur de la citation 1"], ["texte de la citation 2", "auteur de la citation 2"]]).
 *  
 **/
let baseQuotes = [
    ["La vie, c'est comme une boite de chocolats : on sait jamais sur quoi on va tomber.", "Forest Gump"],
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"]
];

let quotes = [...baseQuotes];

/** 
 * 
 * 2.1. Déclarez une const nommée "nouveau" stockant le résultat de la requête de l'élément HTML #nouveau.
 * 2.2. Déclarez une const nommée "previous" stockant le résultat de la requête de l'élément HTML #previous.
 * 2.3. Déclarez une const nommée "next" stockant le résultat de la requête de l'élément HTML #next.
 * 2.4. Déclarez une const nommée "randomChx" stockant le résultat de la requête de l'élément HTML #random_chx.
 * 2.5. Ecoutez l'évènement de clic sur randomChx qui exécutera la function chxClickHandler.
 * 2.6. Déclarez une const nommée "loopChx" stockant le résultat de la requête de l'élément HTML #loop_chx.
 * 2.7. Ecoutez l'évènement de clic sur loopChx qui exécutera la function chxClickHandler.
 * 2.8. Déclarez une let nommée "index" définie à 0.
 * 
 * 4.1. Appelez la fonction loadQuote() avec la var index en paramètre.
 *  
 **/

const nouveau = document.querySelector("#nouveau");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

const randomChx = document.querySelector("#random_chx");
console.log(randomChx);

randomChx.addEventListener(EventNames.CLICK, chxClickHandler);

const loopChx = document.querySelector("#loop_chx");
loopChx.addEventListener(EventNames.CLICK, chxClickHandler);

const autoChx = document.querySelector("#auto_chx");
autoChx.addEventListener(EventNames.CLICK, chxClickHandler);

const searchIpt = document.querySelector("#search_ipt");
searchIpt.addEventListener(EventNames.INPUT, searchInputHandler);

const clearSearchIptBtn = document.querySelector("#clear_search_ipt_btn");
clearSearchIptBtn.addEventListener(EventNames.CLICK, clearSearchIptBtnHandler);

let debug = window.location.protocol == "file:" ? true : false;
console.log("debug", debug);

let index = debug ? 0 : 0;
let intervalID;

loadQuote(index);
checkIndex();

function chxClickHandler(evt) {
    switch (evt.target) {
        case loopChx:
            console.log("toto");
            checkIndex();
            break;
        case randomChx:
            loopChx.disabled = randomChx.checked;
            if (randomChx.checked) {
                loopChx.checked = false;
                console.log("loopChx.checked", loopChx.checked);
                if (previous.disabled) {
                    disableButton(previous, false);
                }
                if (next.disabled) {
                    disableButton(next, false);
                }
            } else {
                checkIndex();
            }
            break;
        case autoChx:
            if (autoChx.checked) {
                intervalID = setInterval(changeIndex, debug ? 200 : 5000);
                console.log("intervalID", intervalID);
            } else {
                clearInterval(intervalID);
            }
            break;
        default:
            break;
    }
}


function playQuotes(){

}

function stopQuotes(){
    
}

let timer = 0;
function playTimer(){

}

function searchInputHandler(evt) {
    console.log(searchIpt.value);
    quotes = filterElement(baseQuotes, searchIpt.value);
    console.log(quotes);
    if(quotes.length > 0){

        refresh();
    }else{
        loadQuote(-1);
    }
}

function clearSearchIptBtnHandler(evt) {
    searchIpt.value = "";
    quotes = [...baseQuotes];
    console.log(quotes);
    refresh();    
}

function filterElement(arr, filter) {
    return arr.filter(function (element) {
        const author = element[1];
        const bool = author.toLowerCase().includes(filter.toLowerCase());
        return bool;
    })
}

function refresh(){
    index = 0;
    loadQuote(index);
    checkIndex();
}