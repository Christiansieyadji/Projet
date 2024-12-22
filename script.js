// Reference de l'affichage
const result = document.getElementById('result');

//Ajouter un caractere a l'affichage
function append(value){
    result.value += value;
}

// Effacer tout l'affichage
function clearDisplay(){
    result.value ='';
}

// Supprimer le dernier caractere
function deleteLast(){
    result.value = result.value.slice(0, -1);
}

// Calculer le resultat
function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value = 'Erreur;'
    }
}