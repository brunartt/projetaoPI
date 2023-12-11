const fs = require('fs');
const csv = require('csv');

const csvFile = fs.readFileSync('escolas.csv', 'utf-8');
const reader = csv.parse(csvFile);

const connection = mysql.createConnection({
  host: 'bubble.db.elephantsql.com',
  port: 3306,
  database: 'bpouibyw',
  user: 'bpouibyw',
  password: 'VXwwTywLX_4hvCkRsInW31q5v73mDZXy',
});

const fetchSchools = () => {
  connection.query('SELECT escola.nome, internet.internetAdminstrativo FROM escola INNER JOIN internet ON escola.codEscola = internet.codEscola;', (error, results) => {
    if (error) {
      throw error;
    }

    const response = {
      schools: results.rows,
    };

    return response;
  });
};

console.log(fetchSchools());

app.get('/consulta'), (requisicao, resposta) => {
    
  client.connect;{(err) => {
       client.query(consulta1, (err, res) => {
            resposta.send(JSON.stringify(res.rows))
            console.log(err ? err.stack : res)
        })     
      }  
  }};

app.get('/consulta'), (requisicao, resposta) => {
    
    client.connect;{(err) => {
         client.query(consulta1, (err, res) => {
              resposta.send(JSON.stringify(res.rows))
              console.log(err ? err.stack : res)
        })     
      }  
  }};
// Mover um arquivo
//fs.rename('/path/to/file.txt', '/path/to/new-file.txt');

// Renomear um arquivo
//fs.renameSync('/path/to/file.txt', '/path/to/new-file.txt');

// Copiar um arquivo
//fs.copyFileSync('/path/to/file.txt', '/path/to/new-file.txt');
