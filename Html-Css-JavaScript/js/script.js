//Reload all page and start Game 
function starGame(){
    let selectCreature = document.getElementById('Select-a-creauture');
    selectCreature.addEventListener('click', selectCreaturePj);
};
window.addEventListener('load', starGame);

//Function select creature 
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

//PC Select the aleatorie creaute 
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

