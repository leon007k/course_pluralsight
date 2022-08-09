// Accessing the objects
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let yearlyLabel = document.getElementById('yearlyTotal');

// Values from to form
let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

// Monthly Totals
let yearlyTotal = 0;
const monthlySales = new Set();
const monthlyLabels = new Set();
const categories = new WeakSet();

let hiking = { categories: 'hiking' };
let runnin = { categories: 'running' };
let hunting = { categories: 'hunting' };

const addSale = () => {
    monthlySales.add(parseInt(newAmount.value));
    monthlyLabels.add(newMonth.value);

    let yearlyTotal = 0;

    monthlySalesChart.data.datasets.forEach(dataset => {
        dataset.data = [];
    });

    for (let amout of monthlySales) {
        yearlyTotal = amout + yearlyTotal;
        yearlyLabel.innerHTML = yearlyTotal;

        monthlySalesChart.data.datasets.forEach(dataset => {
            dataset.data.push(amout);
        });
    }
    monthlySalesChart.data.labels = Array.from(monthlyLabels);
    monthlySalesChart.update();

    switch (true) {
        case hikingRadio.checked:
            categories.add(hiking);
            break;
        case runningRadio.checked:
            categories.add(running);
            break;
        case huntingRadio.checked:
            categories.add(hunting);
            break;
    }

    console.log(categories);
};

const deleteValue = () => {
    monthlySales.forEach((value1, value2, monthlySales) => {
        alert(value1);
    });
    console.log(monthlySales);
};

const addTotal = () => {

};

// Bar chart
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of Sales',
            data: [],
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie Chart
/*var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})*/