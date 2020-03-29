const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://meuapp.com' // Endereço do frontend para indicar que apenas ele pode acessar o backend
// }));
app.use(express.json());
app.use(routes);

app.listen(2601);