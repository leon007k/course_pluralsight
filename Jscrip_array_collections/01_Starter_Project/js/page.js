"use strict";

// # ChartJs
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

// * Array.of es otra forma de crear un arreglo
const monthlySales = Array.of(500, 9000, 8000, 500);
const monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

const deptSales = Array.of(12, 9, 8);
const deptLabels = Array.of('Hiking', 'Running', 'Hunting');

let yearlyTotal = 0;

// * function to calculate total expenses of the year
const addYearlyTotal = (x) => {
  return yearlyTotal = x + yearlyTotal;
};

let octNums = [500, 1000, 9000];
octNums = addYearlyTotal(...octNums);
let novNums = [2400, 32000, 49000];
novNums = addYearlyTotal(...novNums);
let dicNums = [2000, 10000, 2300];
dicNums = addYearlyTotal(...dicNums);

/* let total = addYearlyTotal(octNums, novNums, dicNums); */
monthlySales.forEach(addYearlyTotal);
/* let yearlyTotal = addYearlyTotal(...monthlySales); */
yearlyLabel.innerHTML = `$${yearlyTotal}`;

// * function to look for the first expense greater than a thousand pesos
const findOver = () => {
  /**
   * * find, devuelve el valor que se desea obtener
   * * findIndex, devuelve la posicion que tiene el valor deseado a obtener
   */
  let firstThousand = monthlySales.find(element => element > 1000);
  alert(firstThousand);
};

const reset = () => {
  /**
   * * Fill, permite cambiar los valores del array. Se puede indicar que cambie todos,
   * * o indicar donde comienza y termina
   * ! fill(value)
   * ! fill(value,start)
   * ! fill(value,start,end)
   */
  monthlySales.fill(0);
  monthlySalesChart.update();
};

// Bar
var monthlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: monthlyLabels,
    datasets: [{
      label: '# of Sales',
      data: monthlySales,
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

// Pie
var deptSalesChart = new Chart(pieCtx, {
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
});