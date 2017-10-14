'use strict';

/**
 * @ngdoc function
 * @name jfsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jfsApp
 */
angular.module('Resume')
  .controller('MainCtrl', function ($scope,$uibModal,$document) {
    $scope.comingsoon={waiting:false};
    $scope.scrollTo = function(Element) {
    var someElement = angular.element(document.getElementById(Element));
    $document.scrollToElement(someElement, 0, 900);
  };
    $scope.OpenModal = function(modalname,size,data,options){
      var default_options = {
       animation: true,
       templateUrl: modalname,
       controller: 'ModalCtrl',
       size: size,
       resolve: {
         items: function () {
           return data;
         }
       }
     };
     default_options = _.assign(default_options,options);
     var modalInstance = $uibModal.open(default_options);
     modalInstance.result.then(function (selectedItem) {
       //console.log(selectedItem);
     }, function () {
       console.log('done');
     });

    };
    $scope.jobs=[
      {years:"2013-Present",title:"Curriculum Data Analyst",company:"Imagine Learning",logo:"imaginelearning.png",
          detail:{bullets:['Led initiative to re-design data architecture to accommodate external reporting as well as internal research, analytics, and business intelligence teams.',
                          'Fostered reliance on data driven decision making among curriculum designers and implemented a system of internal reports to facilitate the use of data when creating new content.',
                          'Transformed placement of students from a weakness of the product to a strength through a focus on student sequencing that was predictive rather than reactive.',
                          'Drove efforts to make feedback to students more immediate, implementing a Naïve Bayes Model to grade student free responses and achieving 95% accuracy in classification.',
                          'Standardized data practices, and reporting definitions, creating greater reliability and parity between the information being reported on internal/external reports and internal analysis.'
                        ]}},
      {years:"2011-2012",title:"Foreman",company:"Seasons 4 Landscaping",logo:"seasons4.png",
      detail:{bullets:['Worked with teams across multiple companies to coordinate deadlines, and resource, with a focus on creating better relationships to prevent conflict and reduce overlap.',
                      'Managed and motivated landscapers from a large variety of backgrounds.',
                      'Coordinated access to job sites, OSHA training and drug testing.'
                    ]}},
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
      {name:"Angularjs",level:5},
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
