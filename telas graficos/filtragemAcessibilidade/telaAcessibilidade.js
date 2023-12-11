
const getAccessibilityData = (city) => {
  const query = `
    SELECT
      escola.codEscola,
      escola.nome,
      escola.municipio,
      acessibilidade.banheiro,
      acessibilidade.dependencia,
      acessibilidade.salaAtencaoEspecial
    FROM
      escola
    INNER JOIN
      acessibilidade
    ON
      escola.codEscola = acessibilidade.codEscola
    WHERE
      escola.municipio = ?
  `;

  connection.query(query, [city], (error, results) => {
    if (error) {
      throw error;
    }

    const response = results.rows;

    return response;
  });
};

const city = document.querySelector('#pie').dataset.city;

const data = getAccessibilityData(city);

console.log(data);
const bar = document.getElementById('bar');

  new Chart(bar, {
    type: 'bar',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [79, 75, 69],
        borderWidth: 1,
        backgroundColor: '#022E57'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 80,
          stepSize: 10
        }
      },
      
    }
  });



  const pie = document.getElementById('pie');

  new Chart(pie, {
    type: 'doughnut',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [68, 42, 49],
        borderWidth: 1,
        backgroundColor: [
          '#032E58',
          '#2C8BB9 ',
          '#113F57'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });



  const bar2 = document.getElementById('bar2');

  new Chart(bar2, {
    type: 'bar',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [60,36,41],
        borderWidth: 1,
        backgroundColor: '#022E57'
      }]
    },
    options: {
        indexAxis: 'y',
        scales: {
          x: {
            suggestedMin: 0,
            suggestedMax: 60,
            stepSize: 20
          }
        }
      }
      });

      const bar3 = document.getElementById('bar3');

  new Chart(bar3, {
    type: 'bar',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [47, 20, 25],
        borderWidth: 1,
        backgroundColor:'#022E57'
      }]
    },
    options: {
        indexAxis: 'y',
        scales: {
          x: {
            suggestedMin: 0,
            suggestedMax: 50,
            stepSize: 20
          }
        }
      }
      });


