
$(document).ready(function(){
	$('.pre-education').click(function(){
		console.log('The click worked');
		$(this).removeClass('pre-education').addClass('education');
	})
})




// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
    $scope.edu = 
    [
    {
    	school: 'University of Washington',
    	degree: 'Bachelors in Arts',
    	GPA: 3.76,
    	accomplishments: ['Dean’s List Winter and Spring 2011','2011 Sigma Tau Foundation Scholarship recipient','Lived and worked in St. Petersburg, Russia for five months through the CIEE Study Abroad Program']
    },
    {
    	school: 'Eastern Washington University',
    	degree: '45 Credits earned through Running Start Program',
    	GPA: 3.33,
    	accomplishments: ['Attended two courses a day while still attending high school']

    }
    ]
    console.log($scope.edu);
    console.log($scope.edu.school)
}]);

// Chart.js

var speedCanvas = document.getElementById("container");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Achievement First Network",
    data: [41, 51],
    lineTension: 0.3,
    fill: false,
    borderColor: 'red',
    backgroundColor: 'transparent',
    pointBorderColor: 'red',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
  };

var dataSecond = {
    label: "Apollo Middle School",
    data: [43, 73],
    lineTension: 0.3,
    fill: false,
    borderColor: 'purple',
    backgroundColor: 'transparent',
    pointBorderColor: 'purple',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2
  };

var dataThird = {
    label: "NYC Averages",
    data: [34, 43],
    lineTension: 0.3,
    fill: false,
    borderColor: 'blue',
    backgroundColor: 'transparent',
    pointBorderColor: 'blue',
    pointBackgroundColor: 'lightgreen',
    pointRadius: 5,
    pointHoverRadius: 15,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    pointStyle: 'rect'
  };

var speedData = {
  labels: ['2015-16', '2016-17'],
  datasets: [dataFirst, dataSecond, dataThird],
  backgroundColor: '#E5E1D1'
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions,
});

/*		{
        name: 'Apollo Middle School',
        data: [43, 73]
    }, {
        name: 'Achievement First Network Average',
        data: [41, 51]
    },{
        name: 'New York State Average',
        data: [20, 30] 
    }, */


/*
Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }]

});
*/