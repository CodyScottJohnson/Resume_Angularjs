'use strict';

/**
 * @ngdoc function
 * @name jfsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jfsApp
 */
angular.module('Resume')
  .controller('MainCtrl', function ($scope) {
    $scope.jobs=[
      {years:"2013-Present",title:"Curriculum Data Analyst",company:"Imagine Learning",logo:"imaginelearning.png"},
      {years:"2011-2012",title:"Foreman",company:"Seasons 4 Landscaping",logo:"seasons4.png"}
    ];
    $scope.education=[
      {years:"2017-2019",school:"University of Utah",degree:"MBA",logo:"uofu.png"},
      {years:"2017-2019",school:"University of Utah",degree:"Masters of Science Business Analytics",logo:"uofu.png"},
      {years:"2011-2014",school:"BYU",degree:"Bachelors of Science",majors:"Double Major Math and Applied Statistics",logo:"byu.png"},
    ];
    $scope.skills=[
      {name:"SQL",level:9},
      {name:"R",level:8},
      {name:"Python",level:5},
      {name:"Javascript",level:5},
      {name:"CSS",level:8},
      {name:"HTML",level:8},
      {name:"PHP",level:7},
      {name:"Golang",level:4},
      {name:"C++",level:4},
      {name:"GIT",level:7},
      {name:"Docker",level:4},
      {name:"Excel",level:7},
      {name:"Powershell",level:5},
      {name:"Nodejs",level:4},
      {name:"GraphQL",level:4},
    ];

  });
