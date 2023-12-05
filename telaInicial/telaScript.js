var csvFilePath = '../data/Escola.csv';

function processarCSV(csvData) {
  Papa.parse(csvData, {
    header: true,
    dynamicTyping: true,
    complete: function (results) {
      console.log(results.data); 

      atualizarGraficoBar(results.data);

      atualizarGraficoDoughnut(results.data);

      atualizarGraficoBar2(results.data);

      atualizarGraficoBar3(results.data);
      
      console.log(data)
    }
  });
}

function atualizarGraficoBar(data) {
  const bar = document.getElementById('bar');

  const variaveis = ['QT_FUNCIONARIOS', 'QT_PROF_MONITORES'];

  new Chart(bar, {
    type: 'bar',
    data: {
      labels: data.map(item => item.NO_MUNICIPIO),
      datasets: variaveis.map((variavel, index) => ({
        label: variavel,
        data: data.map(item => item[variavel]),
        borderWidth: 1,
        backgroundColor: `cor_para_variavel_${index}`,
      })),
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
          stepSize: 10,
        },
      },
    },
  });
}



const pie = document.getElementById('pie');

new Chart(pie, {
  type: 'doughnut',
  data: {
    labels: ['Recife', 'Pernambuco', 'Brasil'],
    datasets: [{
      label: 'Dados demostrados por %',
      data: [19, 9, 9],
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
      data: [75, 37, 30],
      borderWidth: 1,
      backgroundColor: '#022E57'
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        suggestedMin: 0,
        suggestedMax: 80,
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
      data: [97, 81, 80],
      borderWidth: 1,
      backgroundColor: '#022E57'
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        suggestedMin: 0,
        suggestedMax: 100,
        stepSize: 20
      }
    }
  }
});



