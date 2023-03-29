
//ici mon tableau de donné qui correspond au value dans mon html
tabCatcheur = [
    {
        "name" : "Jhon Cena",
        "finish" : "test",
        "title" : "16",
        "coupSPE" : "bottleShuffle",
        "other" : "rien",
        "score" : 0
    },
    {
        "name" : "Randy Orton",
        "finish" : "rko",
        "title" : "14",
        "coupSPE" : "rien",
        "other" : "rien",
        "score" : 0
    },
    {
        "name" : "Seth 'Freakin' Rollins",
        "finish" : "stomp",
        "title" : "5",
        "coupSPE" : "rien",
        "other" : "rien",
        "score" : 0
    },
    {
        "name" : "The Rock",
        "finish" : "rien",
        "title" : "9",
        "coupSPE" : "rockbottom",
        "other" : "rien",
        "score" : 0
    }
]

//ici je creer des varriables finish,title etc..  que je vais utiliser dans ma function
function generatedKO(finish,title,coupSPE,other) {
    //ici je fais un foreach pour verifier que chaque value de mon html correspond a une de mes donnes de mon tableau tabCatcheur
    tabCatcheur.forEach(element => {
        if (element.finish == finish) {
            //Si c'est le cas je rajoute au catcheur en question +1 a son score
            //son score de base est 0
            element.score += 1
        }
        if (element.title == title) {
            element.score += 1
        }
        if (element.coupSPE == coupSPE) {
            element.score += 1
        }
        if (element.other == other) {
            element.score += 1
        }
        //
        // if (element.score >= 3) {
        //     console.log(element.name);
        // }
    });

    //Puis ici je trie le score dans l'ordre DESC avec .sort()
    tabCatcheur.sort((a, b) => b.score - a.score);
    // tabCatcheur.forEach(element => {
    //     console.log(element.name,element.score);
    // });

    //Puis je retourne le nom du catcheur 
    //tabCatcheur mon tableau mais trier [0] le premier du tableau 'name pour son nom
    return tabCatcheur[0].name

    
}


//je recupere mon bouton du html
let button = document.querySelector("#button")

//je lui met un event 'click'
button.addEventListener("click", () => {

    //je recupere tout les select avec leurs value
    let finish = document.querySelector('#finish').value
    let title = document.querySelector('#title').value
    let coupeSPE = document.querySelector('#coupeSPE').value
    let other = document.querySelector('#other').value
    //recup le h1 pour y afficher le resultat dans mon HTML
    let text = document.querySelector('#text')

    //ensuite j'atribut ses valeurs a la fonction precedent que j'appel ici
    //et qui va me retourner le nom du catcheur
    let name = generatedKO(finish,title,coupeSPE,other);
    

    //Et pour finir je donne le resultat a ma page HTML
    text.innerText = name


    console.log(finish,title,coupeSPE,other);
    console.log("---", name);
})





   
