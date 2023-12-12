const bar = document.getElementById('bar');

  new Chart(bar, {
    type: 'bar',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [97, 93, 91],
        borderWidth: 1,
        backgroundColor: '#022E57'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 100,
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
        data: [95, 60, 71],
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
        data: [0, 4, 2],
        borderWidth: 1,
        backgroundColor: '#022E57'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 4,
          stepSize: 1
        }
      },
      
    }
  });


    const bar3 = document.getElementById('bar3');

  new Chart(bar3, {
    type: 'bar',
    data: {
      labels: ['Recife', 'Pernambuco', 'Brasil'],
      datasets: [{
        label: 'Dados demostrados por %',
        data: [10, 35, 11],
        borderWidth: 1,
        backgroundColor:'#022E57'
      }]
    },
    options: {
        indexAxis: 'y',
        scales: {
          x: {
            suggestedMin: 0,
            suggestedMax: 40,
            stepSize: 20
          }
        }
      }
      });



