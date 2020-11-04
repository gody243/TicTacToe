const statut=document.querySelector("h2")
let jeuActif=true
let joueurActif="X"
let etatJeu=["","","","","","","","",""]
const conditionsVictoire=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]]

const gagne =()=>`le joueur ${joueurActif} a gagné`
const egalite =()=>"Egalite"
const tourJoueur =()=>`C'est au tour du Joueur ${joueurActif}`
statut.innerHTML=tourJoueur()

document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click",gestionClicCase))
document.querySelector("#recommencer").addEventListener("click",recommencer)

function gestionClicCase(){
    console.log(this)
    const indexCase= parseInt(this.dataset.index)

     if(etatJeu[indexCase]!= ""||!jeuActif){
        return
    }
    etatJeu[indexCase]=joueurActif
    this.innerHTML=joueurActif

    verifGagne()
}

function verifGagne(){
    let tourGagnant=false
    for (let cV of conditionsVictoire){
        let val1=etatJeu[cV[0]]
        let val2=etatJeu[cV[1]]
        let val3=etatJeu[cV[2]]

        if(val1==""||val2==""||val3==""){
            continue
        }
        if(val1==val2 &&val2==val3){
            tourGagnant=true
            break
        }
    }
    if (tourGagnant){
        statut.innerHTML=gagne()
        jeuActif=false
        return
    }
    if(!etatJeu.includes("")){
        statut.innerHTML=egalite()
        jeuActif=false
        return
    }
    joueurActif=joueurActif=="X"?"O":"X"
    statut.innerHTML=tourJoueur()
    
}
function recommencer(){
    joueurActif='X'
    jeuActif=true
    etatJeu=["","","","","","","","",""]
    statut.innerHTML=tourJoueur()
    document.querySelectorAll(".case").forEach(cell=>cell.innerHTML="")
}