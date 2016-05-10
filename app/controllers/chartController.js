thecharts.controller('chartController', ['$scope', function($scope) {
  'use strict';
  $scope.label = "";
  $scope.data = "";
  var radarchart = false;
  var barchart = false;
  var linechart = false;

  var click = 0;

  $scope.setradarchart = function() {
    radarchart = true;
    barchart = false;
    linechart = false;
    if(click === 0) {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");

      $scope.setChartData();
    }
    else {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");
      canvaswrapper.removeChild(canvas);
      $scope.setChartData();
    }
    click++;
  };

  $scope.setbarchart = function() {
    barchart = true;
    radarchart = false;
    linechart = false;
    if(click === 0) {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");
      $scope.setChartData();
    }
    else {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");
      canvaswrapper.removeChild(canvas);
      $scope.setChartData();
    }
    click++;
  };


  $scope.setlinechart = function() {
    linechart = true;
    radarchart = false;
    barchart = false;
    if(click === 0) {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");
      $scope.setChartData();
    }
    else {
      var canvaswrapper = document.getElementById("canvaswrapper");
      var canvas = document.getElementById("myChart");
      canvaswrapper.removeChild(canvas);
      $scope.setChartData();
    }
    click++;
  };

  $scope.setChartData = function() {
    var arrayLab = $scope.label;
    var resultArrayLab = arrayLab.split(',').map(function(arrayLab){return String(arrayLab);});
    var arrayData = $scope.data;
    var resultArrayData = arrayData.split(',').map(function(arrayData){return Number(arrayData);});

      if(!$scope.labels && !$scope.data) {
      } else {
        var chart = document.createElement('canvas');
        chart.id = 'myChart';
        chart.className = "animated bounceIn"
        canvaswrapper.appendChild(chart);
      }

    var mychart = {
         labels : resultArrayLab,
         datasets :
          [
             {
               fillColor : "rgba(172,194,132,0.4)",
               strokeColor : "#ACC26D",
               pointColor : "#fff",
               pointStrokeColor : "#9DB86D",
               data : resultArrayData
             }
          ]
         };
var chart = document.getElementById('myChart').getContext('2d');
    if(radarchart === true) {
      new Chart(chart).Radar(mychart);
    } else if(barchart === true) {
      new Chart(chart).Bar(mychart);
    } else if(linechart === true) {
      new Chart(chart).Line(mychart);
    }
  }
}]);
