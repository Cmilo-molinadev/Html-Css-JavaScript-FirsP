//Global variables 
let attackSelectPj
let attackSelectPc
let winners
let NlivesJ = 5 ;
let NlivesPc = 5;
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

    let reset = document.getElementById('reload');
    reset.addEventListener('click', rechargeGame)
    

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
    let Champ = document.createElement('h2');

    pagraph.innerHTML = 'You tell your creature that attack with ' + attackSelectPj;
    pagraphEnemy.innerHTML = 'The enemy attacks with '+ attackSelectPc;
    Champ.innerHTML =  winners; 


    notifications.appendChild(pagraph);
    notifications.appendChild(pagraphEnemy);
    notifications.appendChild(Champ);
    

};
// Combat of the game and logicstic of elements 
function Combat(){
    // Los lives in which attacks 
    let livesJ = document.getElementById('lives');
    let livesPc = document.getElementById('lives-enemy');


    // Attacks win 
    if (attackSelectPc == attackSelectPj){
        winners = 'The combats is very hard the attacks is not efective';
    }else if(attackSelectPj == 'Electric attack' && attackSelectPc == 'Snow attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Electric attack' && attackSelectPc == 'Fire attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Electric attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Electric attack' && attackSelectPc == 'Abbysm attack'){
        winners ='Enemy Wins';
        NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else  if (attackSelectPj == 'Electric attack' && attackSelectPc == 'Wather attack'){
        winners ='The combats is very hard the attacks is not efective'; 
    }else if(attackSelectPj == 'Electric attack' && attackSelectPc == 'Plant attack' ){
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc; 
    }else if(attackSelectPj == 'Electric attack' && attackSelectPc == 'Geo attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Snow attack' && attackSelectPc == 'Electric attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Snow attack' && attackSelectPc == 'Fire attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Snow attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Snow attack' && attackSelectPc == 'Abbysm attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else  if (attackSelectPj == 'Snow attack' && attackSelectPc == 'Wather attack'){
        winners ='The combats is very hard the attacks is not efective'; 
    }else if(attackSelectPj == 'Snow attack' && attackSelectPc == 'Plant attack' ){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Snow attack' && attackSelectPc == 'Geo attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Fire attack' && attackSelectPc == 'Snow attack'){  
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Fire attack' && attackSelectPc == 'Electric attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Fire attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Fire attack' && attackSelectPc == 'Abbysm attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else  if (attackSelectPj == 'Fire attack' && attackSelectPc == 'Wather attack'){
        winners ='You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Fire attack' && attackSelectPc == 'Plant attack' ){
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc; 
    }else if(attackSelectPj == 'Fire attack' && attackSelectPc == 'Geo attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Luminous attack' && attackSelectPc == 'Snow attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Luminous attack' && attackSelectPc == 'Electric attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Luminous attack' && attackSelectPc == 'Fire attack'){
        winners = 'Enemy wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Luminous attack' && attackSelectPc == 'Abbysm attack'){
        winners ='The combats is very hard the attacks is not efective'; 
    }else  if (attackSelectPj == 'Luminous attack' && attackSelectPc == 'Wather attack'){
        winners ='Enemy wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Luminous attack' && attackSelectPc == 'Plant attack' ){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Luminous attack' && attackSelectPc == 'Geo attack'){
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Snow attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Electric attack'){  
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if (attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Luminous attack'){
        winners = 'The combats is very hard the attacks is not efective'; 
    }else if(attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Fire attack'){
        winners ='You Wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else  if (attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Wather attack'){
        winners ='Enemy  wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Plant attack' ){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Abbysm attack' && attackSelectPc == 'Geo attack'){
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Wather attack' && attackSelectPc == 'Snow attack'){  
        winners ='The combats is very hard the attacks is not efective';
    }else if(attackSelectPj == 'Wather attack' && attackSelectPc == 'Electric attack'){  
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if (attackSelectPj == 'Wather attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Wather attack' && attackSelectPc == 'Abbysm attack'){
        winners ='You Wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else  if (attackSelectPj == 'Wather attack' && attackSelectPc == 'Fire attack'){
        winners ='Enemy wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Wather attack' && attackSelectPc == 'Plant attack' ){
        winners ='The combats is very hard the attacks is not efective'; 
    }else if(attackSelectPj == 'Wather attack' && attackSelectPc == 'Geo attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Plant attack' && attackSelectPc == 'Snow attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Plant attack' && attackSelectPc == 'Electric attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Plant attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Plant attack' && attackSelectPc == 'Abbysm attack'){
        winners ='You Wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else  if (attackSelectPj == 'Plant attack' && attackSelectPc == 'Wather attack'){
        winners ='The combats is very hard the attacks is not efective'; 
    }else if(attackSelectPj == 'Plant attack' && attackSelectPc == 'Fire attack' ){
        winners ='You Wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Plant attack' && attackSelectPc == 'Geo attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }else if(attackSelectPj == 'Geo attack' && attackSelectPc == 'Snow attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Geo attack' && attackSelectPc == 'Electric attack'){  
        winners ='You Wins';
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if (attackSelectPj == 'Geo attack' && attackSelectPc == 'Luminous attack'){
        winners = 'You wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Geo attack' && attackSelectPc == 'Abbysm attack'){
        winners ='The combats is very hard the attacks is not efective'; 
    }else  if (attackSelectPj == 'Geo attack' && attackSelectPc == 'Wather attack'){
        winners ='Enemy wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ; 
    }else if(attackSelectPj == 'Geo attack' && attackSelectPc == 'Plant attack' ){
        winners ='You Wins'; 
        NlivesPc--;
        livesPc.innerHTML = NlivesPc;
    }else if(attackSelectPj == 'Geo attack' && attackSelectPc == 'Fire attack'){
        winners ='Enemy Wins';
         NlivesJ--
        livesJ.innerHTML = NlivesJ;
    }
    createElements();
    checkLives();
};

//Check lives in combat apart 
function checkLives(){
    if (NlivesJ == 0){
        champion("THE ENEMY WINS YOU LOST ¡RETRY!")
    }else if (NlivesPc == 0){
        champion("CONGRATULATIONS YOU WIN")
    };
};
// Show the champion of game 
function champion(checkLivesend){
    let notifications = document.getElementById('notifications');
    let end = document.createElement('h2');

    end.innerHTML =  checkLivesend;
    notifications.appendChild(end);
    let attackElectric = document.getElementById('attack-electric');
    attackElectric.disabled = true;
    let attackSnow = document.getElementById('attack-snow');
    attackSnow.disabled = true;
    let attackFire = document.getElementById('attack-fire');
    attackFire.disabled = true;
    let attackLuminous = document.getElementById('attack-luminous');
    attackLuminous.disabled = true;
    let attackAbyss = document.getElementById('attack-abyss');
    attackAbyss.disabled = true;
    let attackWather = document.getElementById('attack-wather');
    attackWather.disabled = true;
    let attackPlant = document.getElementById('attack-plant');
    attackPlant.disabled = true;
    let attackGeo = document.getElementById('attack-geo');
    attackGeo.disabled = true;
};
//Recharge window 
function rechargeGame(){
    location.reload();
};



