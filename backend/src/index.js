//importar o módulo express
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//criando / a minha aplição 
const app = express();

app.use(cors());
//em produção usar:
//app.use(cors({
//  origin: 'http://meuapp.com.br' => endereço onde meu front estiver hospedado.
//}))
app.use(express.json());
app.use(routes);

// minha aplição fica ouvindo a porta 3333
app.listen(3333);