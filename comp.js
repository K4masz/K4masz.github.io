function start(){

    for (let quantity = 1; quantity <= 1000; quantity++) {
        let args = Array.from({length: quantity}, () => Math.floor(Math.random() * quantity));

        let timeForConstant = measureForConstantNumberOfArguments(args);
        let timeForVariable = measureForVariableNumberOfArgmuents(args);

        addData(args.length , { zmienna: timeForVariable, stala: timeForConstant });
    }
}

function measureForConstantNumberOfArguments(args){
    let StartTime = performance.now();
    
    console.log(...args);

    let EndTime = performance.now();
    return EndTime - StartTime;
}

function measureForVariableNumberOfArgmuents(args){
    let StartTime = performance.now();
    
    console.log(args);

    let EndTime = performance.now();
    return EndTime - StartTime;
}

function addData(label, data){
    myChart.data.labels.push(label);
    myChart.data.datasets[0].data.push(data.stala);
    myChart.data.datasets[1].data.push(data.zmienna);
    myChart.update();
}

let chartColors = {
    "red": "rgb(255, 99, 132)",
    "orange": "rgb(255, 159, 64)",
    "yellow": "rgb(255, 205, 86)",
    "green": "rgb(75, 192, 192)",
    "blue": "rgb(54, 162, 235)",
    "purple": "rgb(153, 102, 255)",
    "grey": "rgb(201, 203, 207)"
  };
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
        {
            label: 'Stała',
            data: [],
            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
            fill: false
        },
        {
            label: 'Zmienna',
            data: [],
            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Wykres zależności czasu wykonania w zależności od stałej lub zmiennej liczby parametrów'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Liczba parametrów'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Czas [ms]'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

start();