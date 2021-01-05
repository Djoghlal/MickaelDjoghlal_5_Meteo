//Récupération sur l'API Key mon compte météo.
const APIKEY = '1b32ad96d0408ae5a6fe750c204c5bbb';

//On fait un appel de l'API Openweather avec ville en paramètre de la fonction
let apiCall = function(city) {
    //On créer la variable qui contiendra l'adresse de l'API météo + notre key.
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    //On créer une promesse principale qui nous oblige à afficher le par défaut du contenu.
    fetch(url).then((response) => 
        response.json().then((data) => { 
            console.log(data);
            document.querySelector('#city').innerHTML = '<i class="fas fa-city"></i>' + data.name;
            document.querySelector('#temp').innerHTML = '<i class="fas fa-thermometer-half"></i>' + data.main.temp + '°C';
            document.querySelector('#humidity').innerHTML = '<i class="fas fa-tint"></i>' + data.main.humidity + '%';
            document.querySelector('#wind').innerHTML = '<i class="fas fa-wind"></i>' + data.wind.speed + 'km/h';
        })
    )
    .catch(err => console.log('Erreur: ' + err));
};


//On séléctionne le formulaire, on écoute celui-ci au submit on déclare une function callBack pour casser l'évent par défaut (preventDefault()).
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    //Création de la variable "ville" en selectionnant l'id "inputCity" (champ de formulaire) donc on veut le contenu (value).
    let ville = document.querySelector('#inputCity').value;

    //On appelle la variable apiCall qui contient la fonction de l'API et on lui met en paramètre "ville" donc le résultat du formulaire du demandeur.
    apiCall(ville);
});

//Appel par défaut au chargement de la page.
apiCall('Bergerac');