const stringyarray = localStorage.getItem('ARRAY');
let array = JSON.parse(stringyarray);

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: array.map(item => item.id),
        datasets: [{
            label: 'How many times shown',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: array.map(item => item.timesSeen)
        }]
    },

    // Configuration options go here
    options: {}
});

var ctxx = document.getElementById('myChartTwo').getContext('2d');
new Chart(ctxx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: array.map(item => item.id),
        datasets: [{
            label: 'How many times picked',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: array.map(item => item.timesPicked)
        }]
    },

    // Configuration options go here
    options: {}
});