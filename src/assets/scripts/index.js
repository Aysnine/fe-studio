;(function init() {

console.log(1)

var ctx = document.getElementById("total-chart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["day21", "day22", "day23", "day24", "day25", "day26"],
        datasets: [{
            data: [45, 17, 78, 34, 25, 93],
            backgroundColor: 'rgba(255, 247, 0, 0.7)',
            borderColor: '#797979',
            borderWidth: 2,
            fill: 'start'
        }]
    },
    options: {
      legend: false,
      title: false,
      responsive: true,
      maintainAspectRatio: false
    }
});

})();