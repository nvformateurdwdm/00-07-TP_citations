const EventNames = {
    MOUSE_DOWN: "mousedown",
    MOUSE_UP: "mouseup",
    CLICK: "click",
    MOUSE_OVER: "mouseover",
    MOUSE_OUT: "mouseout",
    INPUT: "input"
    // etc
};

/** 
 * 
  * 8.1. Déclarez l'objet litéral Direction contenant 2 propriétés :
 * NEXT défini à 1
 * PREVIOUS défini à 2
 *  
 **/
const Direction = {
    NEXT: 1,
    PREVIOUS: 2
}

/** 
 * 
 * 15.1. Déclarez l'objet litéral Interval contenant 3 propriétés :
 * DEBUG défini à 1000
 * PROD défini à 5000
 * DELAY défini à 50
 *  
 **/
const Interval = {
    DEBUG: 1000,
    PROD: 5000,
    DELAY: 50
}

/** 
 * 
 * 0.1. Déclarez une const debug qui sera définie à true si vous testez l'appli avec le protocol file: ou si vous utilisez le live server.
 *  
 **/
const debug = (window.location.protocol == "file:") || (window.location.hostname == "127.0.0.1");
console.log("debug", debug);

/** 
 * Fonction de génération de textes à mettre dans le txt.
 **/
function getText() {
    let text = "";
    for (let index = 0; index < quotes.length; index++) {
        text += (index + 1) + "------------------------" + "\n\n";
        const quote = quotes[index];
        const txt = quote[0];
        const author = quote[1];
        text += "texte : " + txt + "\n" + "auteur : " + author + "\n\n";
    }
    prompt("toto", text)
}

/** 
 * Fonction de génération de nombre aléatoire.
 * Utilisée dans ce TP pour obtenir un index aléatoire dans le tableau de citations.
 **/
function getRandomArbitrary(min, max, hasFloat = false) {
    var randomNumber = Math.random() * (max - min) + min;
    return hasFloat ? randomNumber : Math.floor(randomNumber);
}

/** 
 * 
 * 1.1. Ouvrez les citations dans le fichier "citations.txt" présent dans le dossier "asset" du TP.
 * 1.2. Créez une var quotes de type tableau qui contiendra chaque citation sous forme de tableau à 2 éléments (ex : [["texte de la citation 1", "auteur de la citation 1"], ["texte de la citation 2", "auteur de la citation 2"]]).
 * 
 * 22.1. Changez le nom de la var "quotes" en "baseQuotes". Ce changement est requis en raison du filtre à mettre à place. On doit garder une base de tableau de citations.
 *  
 **/

// Tableau de citations

// 22.1
let baseQuotes = [
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
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"],
    ["La vie, c'est comme une boite de chocolats : on sait jamais sur quoi on va tomber.", "Forest Gump"]
];

/** 
 * 
 * 23.1. Déclarez une var "quotes" qui clone le tableau de baseQuotes.
 *  
 **/
let quotes = [...baseQuotes];

/** 
 * 
 * 5.1. Déclarez une fonction nommée "checkIndex" acceptant un paramètre nommé "index".
 * 5.2. Déclarez une condition pour tester si la checkbox loop_chx est cochée.
 * 5.3. Dans cette condition, si l'index est inférieur à 0, l'index devient égale au dernier index disponible du tableau de citations.
 * 5.4. Dans cette condition, si l'index est supérieur au dernier index disponible du tableau de citations, l'index devient égale au premier index disponible du tableau de citations.
 * 5.5. Dans cette condition, si la case de lefture automatique n'est pas cochée, on réactive les boutons suivant / précédent s'ils ne le sont pas déjà.
 * 
 * 8.1. Déclarez le sinon du 5.2.
 * 8.2. Dans le sinon du 5.2, si l'index est égal à 0, désactivez le bouton permettant d'afficher la citation précédente en appelant la function disableButton().
 * 8.3. Sinon, si (else if) l'index est à égal au dernier index du tableau de citations, désactivez le boutton permettant d'afficher la citation suivante en appelant la function disableButton().
 * 8.4. Sinon, testez la propriété disable du bouton de citation précédente et activez le si elle est à true. De même pour le bouton de citation suivante.
 * 
 * 10.1. A la toute fin de la fonction, affichez un log permettant de débugguer l'index. Pour vous aider à vous retrouver dans les logs, indiquez le nom de la fonction en 1er paramètre (ex: console.log("checkIndex", index);)
 *  
 **/
function checkIndex() {
    console.log("loopChx.checked", loopChx.checked);

    if (quotes.length < 2) {
        randomChx.checked = false;
        randomChx.disabled = true;
    } else {
        randomChx.disabled = false;
    }

    // 5.2
    if (loopChx.checked) {
        const min = 0;
        const max = quotes.length - 1;

        // 5.3
        if (index < min) {
            index = max;
        }

        // 5.4
        if (index > max) {
            index = min;
        }

        // 5.5
        if (!autoChx.checked) {
            if (previous.disabled) {
                disableButton(previous, false);
            }

            if (next.disabled) {
                disableButton(next, false);
            }
        }
    // 8.1
    } else {
        // 8.2
        if (index == 0) {
            disableButton(previous);
            disableButton(next, !(quotes.length > 1));
        // 8.3
        } else if (index == quotes.length - 1) {
            disableButton(next);
            disableButton(previous, false);
            if (autoChx.checked) {
                stopQuotes();
                autoChx.checked = false;
            }
        // 8.4
        } else {
            if (!autoChx.checked) {

                if (previous.disabled) {
                    disableButton(previous, false);
                }

                if (next.disabled) {
                    disableButton(next, false);
                }
            }
        }
    }
    // 10.1
    console.log("checkIndex", index);
}

/** 
 * 
 * 11.1. Déclarez le gestionnaire d'évènement chxClickHandler.
 * 11.2. Déclarez un switch pour évaluer la case qui a été cochée ainsi que chacun des cas des cases.
 * 
 * 12.1. Dans le cas de la case aléatoire, il faut décocher la case de boucle. Son état corrrepond aussi à celui de la case aléatoire.
 * 12.2. Si la case aléatoire est cochée, il faut activer les boutons suivant / précédent s'ils ne le sont pas déjà.
 * 12.3. Sinon, il faut appeler la fonction checkIndex() pour vérifier si on doit désactiver / activer les boutons de navigation.
 * 
 * 13.1. Dans le cas de la case de boucle, il faut appeler la fonction checkIndex() pour vérifier si on doit désactiver / activer les boutons de navigation.
 * 
 * 14.1. Dans le cas de la case de lecture automatique, déclarez une condition pour savoir si la case auto est cochée.
 * 14.2. Si oui, testez si la case de boucle est cochée et appelez la fonction de lecture de citations si c'est le cas (voir points 20).
 * 14.3. Si la case de boucle n'est pas cochée, déclarez une condition if / else.
 * 14.4. Dans le if, testez si l'index est inférieur au nombre de citations - 1 ou si la case aléatoire est cochée.
 * 14.5. Si oui, appelez la fonction de lecture de citations (voir points 20).
 * 14.6. Sinon, affichez une alerte pounr indiquer à l'utilisateur "Fin des citations atteinte !" et décochez la case de lecture auto.
 * 14.7. Si la case de lecture auto n'est pas cochée, appelez la fonction d'arrêt de lecture de citations (voir points 18) ainsi que checkIndex().
 *  
 **/
function chxClickHandler(evt) {
    console.log("evt.target", evt.target);

    // 11.2
    switch (evt.target) {
        // 12.1
        case randomChx:
            loopChx.checked = false;
            loopChx.disabled = randomChx.checked;
            // 12.2
            if (randomChx.checked) {
                if (previous.disabled) {
                    disableButton(previous, false);
                }

                if (next.disabled) {
                    disableButton(next, false);
                }
            // 12.3
            } else {
                checkIndex();
            }
            break;
        // 13.1
        case loopChx:
            checkIndex();
            break;
        // 14.1
        case autoChx:
            if (autoChx.checked) {
                // 14.2
                if (loopChx.checked) {
                    playQuotes();
                } else {
                    14.3
                    if (index < quotes.length - 1 || randomChx.checked) {
                        // 14.5
                        playQuotes();
                    } else {
                        // 14.6
                        alert("Fin des citations atteinte !");
                        autoChx.checked = false;
                    }
                }
            } else {
                // 14.7
                stopQuotes()
                checkIndex();
            }
            break;
        default:
            console.log("default");
            break;
    }
}

/** 
 * 
 * 20.1. Déclarez la fonction playQuotes() qui va jouer automatiquement les citations à un interval défini.
 * 20.2. Définissez la valeur de intervalID sur le retour de la fonction setInterval appelant la fonction playTimer avec un interval défini dans la proriété DELAY de l'objet Interval.
 * 20.3. Désactivez le bouton précédent.
 * 20.4. Désactivez le bouton suivant.
 *  
 **/
function playQuotes() {
    // 20.2
    intervalID = setInterval(playTimer, Interval.DELAY);
    // 20.3
    disableButton(previous, false);
    // 20.4
    disableButton(next, false);
}

/** 
 * 
 * 18.1. Déclarez la fonction stopQuotes() qui arrêter la lecture auto des citations.
 * 18.2. Redéfinir la valeur de timer à 0.
 * 18.3. Cacher la div de timer.
 * 18.4. Arrêtez l'interval de lecture automatique.
 *  
 **/
function stopQuotes(){
    // 18.1
    timer = 0;
    // 18.2
    timerDiv.style.display = "none";
    // 18.4
    clearInterval(intervalID);
}

/** 
 * 
 * 19.1. Déclarez la fonction playTimer() qui va faire progresser la barre de lecture automatique de citations.
 * 19.1. Si la timerDiv est cachée, affichez la.
 * 19.2. Déclarez une const "limit" dont la valeur est égale à la propriété Interval.DEBUG si on est en mode debug, sinon Interval.PROD.
 * 19.3. Déclarez une const "percent" servant à faire progresser la barre de lecture auto.
 * 19.4. Incrémentez la variable timer avec la valeur de Interval.DELAY.
 * 19.5. Définissez la largeur de la div de timer sur la valeur de percent.
 * 19.6. Déclarez une condition pour évaluer si le timer est supérieur ou égal à la limit.
 * 19.7. Dans cette condition, si le nombre de citations est supérieur à 1, appelez la fonction changeIndex().
 * 19.8. Sinon, appelez la fonction d'arrêt de lecture auto de citations et décochez la case de lecture auto.
 * 19.9. Réinitialiser la valeur du timer à 0.
 *  
 **/
function playTimer(){
    // 19.1
    if(timerDiv.style.display == "none"){
        timerDiv.style.display = "block";
    }
    // 19.2
    const limit = debug ? Interval.DEBUG : Interval.PROD;
    // 19.3
    const percent = Math.round(timer / limit * 100);
    // 19.4
    timer += Interval.DELAY;
    console.log("playTimer", limit, timer, percent + "%");
    // 19.5
    timerDiv.setAttribute("style", "width:" + percent.toString() + "%");
    // 19.6
    if(timer >= limit){
        // 19.7
        if(quotes.length > 1){
            changeIndex();
        }else{
            // 19.8
            stopQuotes();
            autoChx.checked = false;
        }
        // 19.9
        timer = 0;
    }
}

/** 
 * 
 * 6.1. Déclarez une fonction nommée "disableButton" acceptant un paramètre nommé "button" et un autre nommé "bool" défini à true par défaut.
 * 6.2. Utilisez le param "bool" pour définir la propriété disabled du boutton.
 * 6.3. Si bool est à true, la classe CSS du bouton est "disabled", sinon la classe CSS est "buttonNextPrevious". De même pour le style de pointeur de souris.
 * 6.4. Si bool est à true, supprimez l'écouteur d'évènement EventNames.CLICK, sinon il faut l'ajouter. Cet écouteur exécutera le gestionnaire previousNextClickHandler.
 * 
 **/

function disableButton(button, bool = true) {
    // 6.2
    button.disabled = bool;
    // 6.3
    button.className = bool ? "disabled" : "buttonNextPrevious";
    button.style.cursor = bool ? "auto" : "pointer";
    // 6.4
    if (bool) {
        button.removeEventListener(EventNames.CLICK, previousNextClickHandler);
    } else {
        button.addEventListener(EventNames.CLICK, previousNextClickHandler);
    }
}

/** 
 * 
 * 7.1. Déclarez le gestionnaire previousNextClickHandler appelé lors du clic sur les boutons suivant / précédent.
 * 7.2. Ce getionnaire appelle lui-même la fonction changeIndex avec le paramètre Direction.PREVIOUS ou Direction.NEXT en fonction du bouton qui a été cliqué.
 * 
 **/
function previousNextClickHandler(evt) {
    changeIndex(evt.target == previous ? Direction.PREVIOUS : Direction.NEXT);
}

/** 
 * 
 * 🍒 sur le gâteau : déclarez une fonction getZeroFormat servant à formater le numéro de citation en cours afin qu'il ait le nombre de zéros requis pour une bonne présentation (ex : 01 / 10, 001 / 100, 0001 / 1000, etc...). Cette fonction accepte 2 paramètres nommé "num" recevant l'index en cours et limit recevant le total d'éléments.
 * Déclarez une const "strNum" dont la valeur est égale au num convertie en string.
 * Déclarez une const "strLimit" dont la valeur est égale à la limit convertie en string.
 * Déclarez une let "zero" de type string.
 * Déclarez une const "loop" égale à la longueur de strLimit - la longueur de strNum.
 * Déclarez une let "start" égale à 0.
 * Déclarez une boucle while qui tourne tant que start est < loop.
 * Dans cette boucle, ajoutez "0" à zero.
 * Après la boucle, déclarez une const "format" égale à zero + num afin d'obtenir le formatage recherché.
 * Retournez la const format.
 *  
 **/
function getZeroFormat(num, limit) {
    const strNum = num.toString();
    const strLimit = limit.toString();

    let zero = "";
    const loop = strLimit.length - strNum.length;
    let start = 0;
    while (start < loop) {
        zero += "0";
        start++;
    }
    const format = zero + num;
    return format;
}

/** 
 * 
 * 3.1. Déclarez une fonction nommée "loadQuote" acceptant un paramètre nommé "index".
 * 3.2. Dans la fonction, Déclarez une const nommée "quote" dont la valeur est égale à l'élément du tableau quotes dont l'index est le paramètre "index".
 * 3.3. Changez le texte de la div #numero pour y afficher le numéro de la citation / total de citations (ex : "3/14").
 * 3.4. Changez le texte de la div #citation pour y afficher le texte de la citation.
 * 3.5. Changez le texte de la div #auteur pour y afficher l'auteur de la citation.
 * 
 * Cette fonction évolue au fur et à mesure du programme notamment avec la fonctionnalité de filtre à la toute fin pour gérer l'erreur de 0 citation trouvée lors d'un filtrage.
 *  
 **/
function loadQuote(index) {
    const numeroDiv = document.querySelector("#numero");
    const citationDiv = document.querySelector("#citation");
    const authorDiv = document.querySelector("#auteur");
    const errorDiv = document.querySelector("#error");
    numeroDiv.textContent = getZeroFormat(index + 1, quotes.length) + "/" + quotes.length;
    if (index == -1) {
        citationDiv.textContent = "";
        authorDiv.textContent = "";
        errorDiv.textContent = "Aucun résultat.";
    } else {
        const quote = quotes[index];
        citationDiv.textContent = quote[0];
        authorDiv.textContent = quote[1];
        errorDiv.textContent = "";
    }
}

/** 
 * 
 * 9.1. Déclarez une fonction nommée "changeIndex" acceptant un paramètre nommé "direction" avec une valeur définie à Direction.NEXT par défaut.
 * 9.2. Si la case aléatoire est cochée, on s'assure d'avoir un autre index que celui en cours avec un do while.
 * 9.3. Sinon, si la direction est Direction.NEXT, on incrémente l'index ou on le décrémente puis on check l'index.
 * 9.4. Après le if / else, on affiche la citation avec l'index nouvellement changé.
 *  
 **/
function changeIndex(direction = Direction.NEXT) {
    console.log("changeIndex", direction == Direction.NEXT ? "next" : "previous");

    // 9.2
    if (randomChx.checked) {
        let randomIndex;
        do {
            randomIndex = getRandomArbitrary(0, quotes.length);
            console.log("randomIndex", randomIndex);
        } while (index == randomIndex);
        index = randomIndex
    } else {
        // 9.3
        direction == Direction.NEXT ? index++ : index--;
        checkIndex();
    }
    console.log("changeIndex", "index", index);
    // document.cookie = "index=" + index;
    // 9.4
    loadQuote(index);
}

/** 
 * 
 * 2.1. Déclarez une const nommée "nouveau" stockant le résultat de la requête de l'élément HTML #nouveau.
 * 2.2. Déclarez une const nommée "previous" stockant le résultat de la requête de l'élément HTML #previous.
 * 2.3. Déclarez une const nommée "next" stockant le résultat de la requête de l'élément HTML #next.
 * 2.4. Déclarez une const nommée "randomChx" stockant le résultat de la requête de l'élément HTML #random_chx.
 * 2.5. Ecoutez l'évènement de clic sur randomChx qui exécutera la fonction chxClickHandler.
 * 2.6. Déclarez une const nommée "loopChx" stockant le résultat de la requête de l'élément HTML #loop_chx.
 * 2.7. Ecoutez l'évènement de clic sur loopChx qui exécutera la fonction chxClickHandler.
 * 2.8. Déclarez une let nommée "index" définie à 0.
 * 
 * 4.1. Appelez la fonction loadQuote() avec la var index en paramètre (devient dépréciée par la suite).
 * 
 * 16.1. Déclarez une let intervalID qui servira à créer une identifiant d'interval pour la fonction de lecture automatique de citations.
 * 16.2. Déclarez une let timer qui servira à incrémenter la barre de progression de lecture auto d'une citation et dont la valeur est égale à 0.
 * 
 * 17.1. Déclarez une const "timerDiv" stockant le résultat de la requête de l'élément HTML #timer.
 * 17.2. Cachez cette div.
 * 
 * 21.1. Déclarez une const "searchIpt" stockant le résultat de la requête de l'élément HTML #search_ipt.
 * 21.2. Ecoutez l'évènement de saisie sur searchIpt qui exécutera la fonction searchTypeHandler.
 * 
 * 25.1. Déclarez une const "clearSearchBtn" stockant le résultat de la requête de l'élément HTML #clear_search_ipt_btn.
 * 25.2. Ecoutez l'évènement de saisie sur searchIpt qui exécutera la fonction clearSearchBtnClickHandler.
 *  
 **/

// 2.1
const nouveau = document.querySelector("#nouveau");
// 2.2
const previous = document.querySelector("#previous");
// 2.3
const next = document.querySelector("#next");

// 2.4
const randomChx = document.querySelector("#random_chx");
// 2.5
randomChx.addEventListener(EventNames.CLICK, chxClickHandler);

// 2.6
const loopChx = document.querySelector("#loop_chx");
// 2.7
loopChx.addEventListener(EventNames.CLICK, chxClickHandler);

const autoChx = document.querySelector("#auto_chx");
autoChx.addEventListener(EventNames.CLICK, chxClickHandler);

// 17.1
const timerDiv = document.querySelector("#timer");
// 17.2
timerDiv.style.display = "none";

// 21.1
const searchIpt = document.querySelector("#search_ipt");
// 21.2
searchIpt.addEventListener(EventNames.INPUT, searchTypeHandler);

// 25.1
const clearSearchBtn = document.querySelector("#clear_search_ipt_btn");
// 25.2
clearSearchBtn.addEventListener(EventNames.CLICK, clearSearchBtnClickHandler);


/** 
 * 
 * 27.1. Déclarez le gestionnaire clearSearchBtnClickHandler.
 * 27.2. Videz le champ de texte.
 * 27.3. Remettre les données de base de tableau de citations.
 * 27.4. Rafrachir l'interface.
 *  
 **/
function clearSearchBtnClickHandler(evt) {
    // 27.2
    searchIpt.value = "";
    // 27.3
    quotes = [...baseQuotes];
    // 27.4
    refresh();
}

/** 
 * 
 * 28.1. Déclarez le gestionnaire searchTypeHandler.
 * 28.2. Stockez le retour de la fonction filtreQuotes dans quotes afin d'écraser les éléments du tableau de citations.
 * 28.3. Si le nombre de citations filtrées est supérieur à 0, on rafraichit l'interface.
 * 28.4. Sinon, on affiche le message de citation non trouvée.
 *  
 **/
function searchTypeHandler(evt) {
    // 28.2
    quotes = filtreQuotes(baseQuotes, searchIpt.value);
    console.log(quotes);
    // 28.3
    if (quotes.length > 0) {
        refresh();
    // 28.4
    } else {
        loadQuote(-1);
    }
}

/** 
 * 
 * 26.1. Déclarez la fonction refresh() qui va rafrachir l'interface.
 * 26.2. L'index revient à 0.
 * 26.3. On ré-affiche la première citation.
 * 26.4. On verrifie si les boutons doivent êtes activés / désactivés avec checkIndex().
 *  
 **/
function refresh() {
    // document.cookie = "toto=tata"
    // console.dir(document.getElementById("cookie"));
    
    // index = debug ? getRandomArbitrary(0, quotes.length) : 0;
    // 26.2
    index = 0;
    // 26.3
    loadQuote(index);
    // 26.4
    checkIndex();
}

/** 
 * 
 * 24.1. Déclarez la fonction filtreQuotes acceptant un paramètre nommé "arr" et un autre nommé "filter".
 * 24.2. Cette fonction fait un test sur l'auteur de chaque citation pour voir si le filtre saisi contient les mêmes caractères convertis en minuscule (car sensible à la casse). 
 *  
 **/
function filtreQuotes(arr, filter) {
    return arr.filter(function (element) {
        const author = element[1];
        const bool = author.toLowerCase().includes(filter.toLowerCase());
        return bool;
    })
}

// 2.8
let index = 0;
let intervalID;
let timer = 0;
disableButton(next);
disableButton(previous);
refresh();

// getText();