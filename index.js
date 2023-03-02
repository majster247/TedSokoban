const express = require('express'); 
const app = express();             
const port = 2137;                 



app.get('/', (req, res) => {      
    res.sendFile('index.html', {root: __dirname});      
});

app.listen(port, () => {          
    console.log(`Pierdole cie kurwa, w co ty teraz grasz, w co ty grasz ${port}`); 
});
