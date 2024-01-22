// importer le module dotenv pour accéder aux variables d'environnement
require('dotenv').config();
 

//définir les variables 
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;
const message = `I am ${name}, wilder in ${city}, and I love ${language}.`

//afficher le message sur le console
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);