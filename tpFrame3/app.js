const express = require('express'); // Importer le module express
const app = express(); // Créer une instance d'application Express


//Middleware de journalisation 
const loggerMiddleware = (req,res,next) => {
   const now = new Date();
   const date = now.toLocaleDateString();
   const time = now.toLocaleTimeString();
   console.log(`[${date} ${time}] ${req.method} ${req.path}`);
   next();
}


// utiliser le Middleware dans l'application
app.use(loggerMiddleware);


//exemple de route pour tester le middleware

app.get('/',(req,res) => {
    res.send('Exercice 1!');
});

app.get('/exercice1', (req,res )=> {
    res.send("une deuxieme API");
});




app.listen(3000, () =>{
    console.log("serveur démaré sur le port 3000");
});



