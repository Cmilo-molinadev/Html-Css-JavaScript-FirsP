//Global variables 
let attackSelectPj
let attackSelectPc
let winners
//let attackSelectedPj = document.getElementById('attack-selected-pj');
//let attackSelectedpc = document.getElementById('attack-selected-pc');

//Reload all page and start Game 
function starGame(){
    let selectCreature = document.getElementById('Select-a-creauture');
    selectCreature.addEventListener('click', selectCreaturePj);

    let attackElectric = document.getElementById('attack-electric');
    attackElectric.addEventListener('click', electricAttack);
    let attackSnow = document.getElementById('attack-snow');
    attackSnow.addEventListener('click', snowAttack);
    let attackFire = document.getElementById('attack-fire');
    attackFire.addEventListener('click', fireAttack);
    let attackLuminous = document.getElementById('attack-luminous');
    attackLuminous.addEventListener('click', luminousAttack);
    let attackAbyss = document.getElementById('attack-abyss');
    attackAbyss.addEventListener('click', abbysmAttack);
    let attackWather = document.getElementById('attack-wather');
    attackWather.addEventListener('click', watherAttack);
    let attackPlant = document.getElementById('attack-plant');
    attackPlant.addEventListener('click', plantAttack);
    let attackGeo = document.getElementById('attack-geo');
    attackGeo.addEventListener('click', geoAttack);

    

};
window.addEventListener('load', starGame);

//Function select creature PJ and select attack 
function selectCreaturePj(){
    let electrion = document.getElementById('electrion');
    let snowda = document.getElementById('snowda');
    let firecat = document.getElementById('firecat');
    let fairy = document.getElementById('fairy');
    let darkghost = document.getElementById('darkghost');
    let octopuset = document.getElementById('octopuset');
    let talltree = document.getElementById('talltree');
    let mrfigth = document.getElementById('mrfigth');
    let creatureSelected = document.getElementById('creature-pj');

    if (electrion.checked){
        creatureSelected.innerHTML = 'Electrion'; 
    }else if(snowda.checked){
        creatureSelected.innerHTML = 'Snowda'; 
    }else if (firecat.checked){
        creatureSelected.innerHTML = 'Firecat'; 
    }else if (fairy.checked){
        creatureSelected.innerHTML = 'Fairy'; 
    }else if (darkghost.checked){
        creatureSelected.innerHTML = 'Darkghost'; 
    }else if (octopuset.checked){
        creatureSelected.innerHTML = 'Octopused'; 
    }else if (talltree.checked){
        creatureSelected.innerHTML = 'Talltree'; 
    }else if (mrfigth.checked){
        creatureSelected.innerHTML = 'Mr. Figth'; 
    }else{
        alert('Please select a creature');
    };
    creaturePC();
}; 
function electricAttack(){
    attackSelectPj = 'Electric attack';
    attackAleatorieEnemy();
};
function snowAttack(){
    attackSelectPj = 'Snow attack';
    attackAleatorieEnemy();
};
function fireAttack(){
    attackSelectPj = 'Fire attack';
    attackAleatorieEnemy();
    
};
function luminousAttack(){
    attackSelectPj = 'Luminous attack';
    attackAleatorieEnemy();
};
function abbysmAttack(){
    attackSelectPj = 'Abbysm attack';
    attackAleatorieEnemy();
};
function watherAttack(){
    attackSelectPj = 'Wather attack';
    attackAleatorieEnemy();
};
function plantAttack(){
    attackSelectPj = 'Plant attack';
    attackAleatorieEnemy();
};
function geoAttack(){
    attackSelectPj = 'Geo attack';
    attackAleatorieEnemy();
};


//PC Select the aleatorie creaute and attack aleatorie 
function creaturePC(){
    let ataleatorieAttack = selecCeaturePc(1, 8);
    let creatureSelectedPc = document.getElementById('creture-pc');
     // DOM manipulation with innerHTML
    if (ataleatorieAttack == 1){
        creatureSelectedPc.innerHTML ='Electrion';
    }else if (ataleatorieAttack == 2){
        creatureSelectedPc.innerHTML ='Snowda';
    }else if(ataleatorieAttack == 3){
        creatureSelectedPc.innerHTML ='Firecat';
    }else if (ataleatorieAttack == 4){
        creatureSelectedPc.innerHTML ='Fairy';
    }else if(ataleatorieAttack == 5){
        creatureSelectedPc.innerHTML ='Darkghost';
    }else if(ataleatorieAttack == 6){
        creatureSelectedPc.innerHTML ='Octopused';
    }else if(ataleatorieAttack == 7){
        creatureSelectedPc.innerHTML ='Talltree';
    }else{
        creatureSelectedPc.innerHTML ='Mr. Figth';
    };

};
function selecCeaturePc(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
};
function attackAleatorieEnemy(){
    let attackAleatories = attackAleatorie (1, 8);
    function attackAleatorie(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    };
    if (attackAleatories == 1){
        attackSelectPc = 'Electric attack';
    }else if (attackAleatories == 2){
        attackSelectPc = 'Snow attack';
    }else if (attackAleatories == 3){
        attackSelectPc = 'Fire attack';
    }else if(attackAleatories == 4){
        attackSelectPc = 'Luminous attack';
    }else if(attackAleatories == 5){
        attackSelectPc = 'Abbysm attack';
    }else if (attackAleatories == 6){
        attackSelectPc = 'Wather attack';
    }else if (attackAleatories == 7){
        attackSelectPc = 'Plant attack';
    }else{
        attackSelectPc = 'Geo attack';
    };   
    Combat();
};
//Notifications of the comvbat in HTML 
function createElements(){
    let notifications = document.getElementById('notifications');
    let pagraph = document.createElement('p');
    let pagraphEnemy = document.createElement('p');
    let Champ = document.createElement('p');

    pagraph.innerHTML = 'You tell your creature that attack with ' + attackSelectPj;
    pagraphEnemy.innerHTML = 'The enemy attacks with '+ attackSelectPc;
    Champ.innerHTML = 'The combat is fhinishes ' + winners; 


    notifications.appendChild(pagraph);
    notifications.appendChild(pagraphEnemy);
    notifications.appendChild(Champ);
    
};
// Combat of the game and logicstic of elements 
function Combat(){
    if (attackSelectPc == attackSelectPj){
        winners = 'The combats is very hard the attacks is not efective';
    }else if(attackSelectPc == 'Electric attack' && attackSelectPj == 'Fire attack'){  
        winners ='Reaction of Electrocharged you lost 1 live';
    }else if (attackSelectPc == 'Snow attack' && attackSelectPj == 'Luminous attack'){
        winners = 'The Lominus neutralizes your attack of snow you lost 1 live'; 
    }else if(attackSelectPc == 'Fire attack' && attackSelectPj == 'Abbysm attack'){
        winners ='Your fire attack is very efective enemy lost 1 live'; 
    }else  if (attackSelectPc == 'Luminous attack' && attackSelectPj == 'Wather attack'){
        winners ='Your wather attack is neutral against th e luminus attak to enamy is tie'; 
    }else if(attackSelectPc == 'Abbysm attack' && attackSelectPj == 'Plant attack' ){
        winners ='The enemy attack is very efective against your plant attak is withered you lost 1 live'; 
    }else if(attackSelectPc == 'Wather attack' && attackSelectPj == 'Geo attack'){
        winners ='Your attack not is very efective against the wather attack you los 1 live';
    }else if(attackSelectPc == 'Plant attack' && attackSelectPj == 'Electric attack'){
        winners ='The electric attack is very efective against plant attack the enemy lost 1 live'; 
    }else {
        winners ='The enemy uses strong attack break your attack snow you lost 1 live'; 
    }
    createElements();
};




