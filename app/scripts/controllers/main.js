'use strict';

/**
 * @ngdoc function
 * @name jfsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jfsApp
 */
angular.module('Resume')
  .controller('MainCtrl', function ($rootScope,$scope, $uibModal, $document, $timeout, $location) {
    $timeout(function () {
      if (angular.isDefined(location.hash) && location.hash != '') {
        $scope.scrollTo(location.hash.replace("#", ""));
      }
    }, 100);
    $rootScope.loading = false;
    $scope.comingsoon = {
      waiting: false
    };
    $scope.SetScroll = function (position) {
      console.log('position');
    };
    $scope.comingsoon.wait = function () {
      $scope.comingsoon.waited = false;
      $scope.comingsoon.waiting = true;
      $timeout(function () {
        $scope.comingsoon.waiting = false;
        $scope.comingsoon.waited = true;
      }, 4000);
    };
    $scope.toggleLoading = function(){
      console.log("loading");
      $rootScope.loading = !$rootScope.loading
    }
    //$scope.addHash
    $scope.scrollTo = function (Element) {
      console.log(Element);
      $location.hash(Element);
      var someElement = angular.element(document.getElementById(Element));
      $document.scrollToElement(someElement, 0, 900);
    };

    $scope.OpenModal = function (modalname, size, data, options) {
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
      default_options = _.assign(default_options, options);
      var modalInstance = $uibModal.open(default_options);
      modalInstance.result.then(function (selectedItem) {
        //console.log(selectedItem);
      }, function () {
        console.log('done');
      });

    };
    $scope.jobs = [
      {
        years: "2019-Present",
        title: "ITS & BI ",
        company: "Dropbox",
        logo: "dropbox.png",
        detail: {
          bullets: ["•	Helped unite product management and marketing efforts - identifying key levers and interdependencies impacting the customer journey.",
          "Drove collaboration with data team to identify a cohesive customer journey and increase customer retention and acquisition."
        
        ]
        }
      },
      {
        years: "2018-Present",
        title: "Product Marketing Strategy & Analytics",
        company: "Pluralsight",
        logo: "pluralsight.png",
        detail: {
          bullets: ["•	Helped unite product management and marketing efforts - identifying key levers and interdependencies impacting the customer journey.",
          "Drove collaboration with data team to identify a cohesive customer journey and increase customer retention and acquisition."
        
        ]
        }
      },
      {
        years: "2018-2018",
        title: "Product Manager - Studio Technology",
        company: "Walt Disney Studios",
        logo: "disney.png",
        detail: {
          bullets: ["Developed and championed Go-To-Market strategy to position internal software and tooling as industry standard.",
           "Synthesized insights from internal/external users, developers, and stake holders to develop a product roadmap."
        ]
        }
      },
      {
        years: "2019",
        title: "Product Manager | Project Consultant",
        company: "Homie",
        logo: "homie.png",
        detail: {
          bullets: ["Conducting analysis on customer interactions and building roadmap to iterate on customer experience.",
           "Analyzing product and market data to improve competitive positioning and product messaging.",
           "Working with cross-functional teams to design, build, and deliver software automation tool and make recommendations to Homie’s executive team."
        ]
        }
      },
      {
        years: "2013-2018",
        title: "Curriculum Data Analyst",
        company: "Imagine Learning",
        logo: "imaginelearning.png",
        detail: {
          bullets: ['Led initiative to re-design data architecture to accommodate external reporting as well as internal research, analytics, and business intelligence teams.',
            'Fostered reliance on data driven decision making among curriculum designers and implemented a system of internal reports to facilitate the use of data when creating new content.',
            'Transformed placement of students from a weakness of the product to a strength through a focus on student sequencing that was predictive rather than reactive.',
            'Drove efforts to make feedback to students more immediate, implementing a Naïve Bayes Model to grade student free responses and achieving 95% accuracy in classification.',
            'Standardized data practices, and reporting definitions, creating greater reliability and parity between the information being reported on internal/external reports and internal analysis.'
          ]
        }
      },
      {
        years: "2014-2017",
        title: "Software Architect and Data Analyst",
        company: "Johnson Financial Services",
        logo: "JohnsonFinanceMain.png",
        detail: {
          bullets: ['Designed and developed public facing web page.',
            'Identified friction points in recruiting process and implemented new processes and automated systems to alliaviate them.',
            'Designed and implemented recruiting management system.',
            'Developed and implemented database schema for management of recruiting and employee data',
            'Deployed and managed backend systems including: web server, git repository, sql database, api documentation',
            'Developed and Deployed mobile apps for recruiting management and for existing agents'
          ]
        }
      },
      {
        years: "2011-2012",
        title: "Foreman",
        company: "Seasons 4 Landscaping",
        logo: "seasons4.png",
        detail: {
          bullets: ['Worked with teams across multiple companies to coordinate deadlines, and resource, with a focus on creating better relationships to prevent conflict and reduce overlap.',
            'Managed and motivated landscapers from a large variety of backgrounds.',
            'Coordinated access to job sites, OSHA training and drug testing.'
          ]
        }
      },
    ];
    $scope.education = [{
        years: "2017-2019",
        school: "University of Utah",
        degree: "MBA",
        logo: "uofu.png"
      },
      {
        years: "2017-2019",
        school: "University of Utah",
        degree: "Masters of Science Business Analytics",
        logo: "uofu.png"
      },
      {
        years: "2011-2014",
        school: "BYU",
        degree: "Bachelors of Science",
        majors: "Double Major Math and Applied Statistics",
        logo: "byu.png"
      },
    ];
    $scope.awards = [{
      date: "2017",
      what: "Finalist Adobe Analytics Challenge",
      logo: "Adobe2.png",
      screencap: "AAC.png",
      summary: ""
    },
    {
      date: "2018",
      what: "Finalist McGill International Portfolio Challenge",
      logo: "mcgill.png",
      screencap: "",
      summary: ""
    },
    {
      date: "2018",
      what: "MBSA - President",
      logo: "uofu.png",
      screencap: "",
      summary: ""
    },
    {
      date: "2018",
      what: "Product Manager | Co-founder - Product Management Association",
      logo: "PMA.png",
      screencap: "",
      summary: "The University of Utah Product Management Association is a student-run organization at the University of Utah designed to help the full-time MBA students navigate their way into a product management focused career. UofUPMA provides students with opportunities to network with experienced product managers, while providing student opportunities for project/consulting/internship work for the state's top technology organizations. We help students learn where and how to build relationships with local professionals, coordinate company site visits, host professional interviews and panels, and teach skill-building workshops."
    },
    {
      date: "2018",
      what: "Director | Co-founder - Utah MBA Consulting Group",
      logo: "Consulting.jpeg",
      screencap: "",
      summary: ""
    },
  ];
    $scope.skills = [
      {
        name: "SQL",
        level: 9
      },
      {
        name: "R",
        level: 8
      },
      {
        name: "Python",
        level: 5
      },
      {
        name: "Javascript",
        level: 5
      },
      {
        name: "Angularjs",
        level: 5
      },
      {
        name: "CSS",
        level: 8
      },
      {
        name: "HTML",
        level: 8
      },
      {
        name: "PHP",
        level: 7
      },
      {
        name: "Golang",
        level: 4
      },
      {
        name: "C++",
        level: 4
      },
      {
        name: "GIT",
        level: 7
      },
      {
        name: "Docker",
        level: 4
      },
      {
        name: "Excel",
        level: 7
      },
      {
        name: "Powershell",
        level: 5
      },
      {
        name: "Nodejs",
        level: 4
      },
      {
        name: "GraphQL",
        level: 4
      },
    ];
    $scope.Projects = [
      {
        title: "YouTube 8m Challenge",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/8m.jpg',
        tags: ['TensorFlow', 'Python', 'unix'],
        state: 'ongoing'
      },
      {
        title: "Super Bowl Tweet Analytics Challenge",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/SuperBowl.jpg',
        tags: ['Python', 'R', 'MongoDB', 'Sentiment Analysis'],
        state: 'finished'
      },
      {
        title: "Backend Redesign",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/GoQL.jpg',
        tags: ['Golang', 'GraphQL'],
        state: 'ongoing'
      },
      {
        title: "Johnson Financial Public Site",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/JFS_Public_Home_Preview.jpg',
        tags: ['Angularjs', 'HTML', 'CSS', 'Sketch'],
        state: 'finished'
      },
      {
        title: "Recruiting Management App",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/JFS_Admin_Home_Preview.jpg',
        tags: ['PHP', 'SQL', 'Angularjs', 'HTML', 'CSS'],
        state: 'finished'
      },
      {
        title: "MBSA Allumni Database",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/mbsa1.jpg',
        tags: ['Go', 'Angular', 'Firebase'],
        state: 'finished'
      },
      {
        title: "Am I Sam",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/AmISam.png',
        tags: ['R', 'Facial Recognition', 'Python', 'Tensor Flow','Deep Learning'],
        state: 'finished'
      },
      {
        title: "Product Management Association",
        preview: 'https://jfsapp.com/Images/JobSearch/Projects/PMA.png',
        tags: ['Go', 'Angular', 'Sketch','Product Management'],
        state: 'finished'
      },
    ];
    
  });
