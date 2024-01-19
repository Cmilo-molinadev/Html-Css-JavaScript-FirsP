//Global variables 
let attackSelectPj
let attackSelectPc
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
    }else if(attackAleatories == 4){
        attackSelectPc = 'Abbysm attack';
    }else if (attackAleatories == 6){
        attackSelectPc = 'Wather attack';
    }else if (attackAleatories == 7){
        attackSelectPc = 'Plant attack';
    }else{
        attackSelectPc = 'Geo attack';
    };   
    createElements();
};
//Notifications of the comvbat in HTML 
function createElements(){
    let notifications = document.getElementById('notifications');
    let pagraph = document.createElement('p');
    let pagraphEnemy = document.createElement('p');
    pagraph.innerHTML = 'You tell your creature that attack with ' + attackSelectPj;
    pagraphEnemy.innerHTML = 'The enemy attacks with '+ attackSelectPc;

    notifications.appendChild(pagraph);
    notifications.appendChild(pagraphEnemy);
    
}




