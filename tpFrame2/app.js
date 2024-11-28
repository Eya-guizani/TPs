const express = require('express');
const app = express();
const port =3000;
app.use(express.json());// Middleware pour analyser les requêtes JSON
app.use(express.urlencoded({ extended: true }));

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
    ];
    
    // GET all users
app.get('/users', (req, res) => {
    res.json(users);
    });


    // GET a user by ID
app.get('/users/:id', (req, res) => { // .find cherche une valeur dans un tableau 
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
    });
    
    // POST a new user
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.json(newUser);
    });


app.listen(port, () => {
    console.log('Server running on port 3000')
});
