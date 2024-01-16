//Reload all page and start Game 
function starGame(){
    let selectCreature = document.getElementById('Select-a-creauture');
    selectCreature.addEventListener('click', selectCreaturePj);
}
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

    if (electrion.checked){
        alert('Select Electrion');
    }else if(snowda.checked){
        alert('Select Snowda')
    }else if (firecat.checked){
        alert('Select Firecat')
    }else if (fairy.checked){
        alert('Select Fairy')
    }else if (darkghost.checked){
        alert('Select Darkghost')
    }else if (octopuset.checked){
        alert('Select Octopuset')
    }else if (talltree.checked){
        alert('Select Talltree')
    }else if (mrfigth.checked){
        alert('Select Mr. Figth')
    }else{
        alert('Please select a creature')
    };
}; 



