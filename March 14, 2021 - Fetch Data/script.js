const ctx = document.getElementById('myChart').getContext('2d');
const xLabels = [];
const yData = [];

chartification()

async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/datasets/london-air-quality/master/data/monthly-averages.csv');
    const dataSet = await response.text();
    const rows = dataSet.split('\n').slice(25);
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[0];
        xLabels.push(year);
        const tempDelta = row[1];
        yData.push(tempDelta);
    });
}

async function chartification() {
    await getData();
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'London Mean Roadside Nitric Oxide (ug/m3)',
                data: yData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            tooltips: {
                mode: 'point'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                }]
            }
        }
    });
}