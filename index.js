(function () {
    var db_app = angular.module('databyte', ['ngMaterial', 'ngRoute']);

    db_app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: "src/partials/home.html",
            controller:"home_controller"
        })
        .when('/projects', {
            templateUrl: "src/partials/projects.html",
            controller:"projects_controller"
        })
        .when('/members', {
            templateUrl: "src/partials/members.html",
            controller: "members_controller"
        })
        .when('/members/ds', {
            templateUrl: "src/partials/members_ds.html",
            controller: "members_ds_controller"
        })
        .when('/members/ba', {
            templateUrl: "src/partials/members_ba.html",
            controller: "members_ba_controller"
        });
    });

    db_app.controller('db_control_main', db_control_main)
    .controller('home_controller', home_controller)
    .controller('projects_controller', projects_controller)
    .controller('members_controller', members_controller)
    .controller('members_ds_controller', members_ds_controller)
    .controller('members_ba_controller', members_ba_controller);

    function db_control_main($scope) {
        $scope.currentNavItem = 'page1';
        console.log("main");
    }

    function home_controller($scope) {
        $scope.msg = "Home";
        console.log("home");
    }

    function projects_controller($scope) {
        $scope.var1 = "projects";
        console.log('projects');
        $scope.rep = [{
            "name": "2048-AI",
            "members": ["Member 1", "Member 2", "Member 3"],
            "desc": "AansmaiooadsmcopadncomcoimaoidkninklndiunKSKDNCOAHIJNDJNMCNDNNDNKNKNPAKEJIkjnakjndlkandnaoweiendkjnoidkdnpa",
            "github-repo": "https://github.com/DataByteNITT/2048-AI",
            "profile":"DS"
        },
        {
            "name": "Image Segmentation",
            "members": ["Member 2", "Member 4", "Member 3"],
            "desc": "AansmaiooadsmcopadncomcoimaoidkninklndiunKSKDNCOAHIJNDJNMCNDNNDNKNKNPAKEJIkjnakjndlkandnaoweiendkjnoidkdnpa",
            "github-repo": "https://github.com/DataByteNITT/ImageSegmentation",
            "profile": "DS"
        },
        {
            "name": "Image Compression",
            "members": ["Member 3", "Member 4", "Member 5"],
            "desc": "AansmaiooadsmcopadncomcoimaoidkninklndiunKSKDNCOAHIJNDJNMCNDNNDNKNKNPAKEJIkjnakjndlkandnaoweiendkjnoidkdnpa",
            "github-repo": "github link 3",
            "profile":"DS"
        },
        {
            "name": "Demonetisation",
            "members": ["Member 4", "Member 5", "Member 6"],
            "desc": "AansmaiooadsmcopadncomcoimaoidkninklndiunKSKDNCOAHIJNDJNMCNDNNDNKNKNPAKEJIkjnakjndlkandnaoweiendkjnoidkdnpa",
            "github-repo": "https://github.com/DataByteNITT/Demonetization-DataByte",
            "profile":"BA"
        },
        {
            "name": "Tax Evasion Behavours",
            "members": ["Member 4", "Member 5", "Member 6"],
            "desc": "AansmaiooadsmcopadncomcoimaoidkninklndiunKSKDNCOAHIJNDJNMCNDNNDNKNKNPAKEJIkjnakjndlkandnaoweiendkjnoidkdnpa",
            "github-repo": "https://github.com/DataByteNITT/Tax-Evasion-Behaviours",
            "profile":"BA"
        }
        ];
        $scope.liker = function() {
            console.log("Picture clicked");
        }
        $scope.veiwer = function() {
            console.log("Viewer Clicked");
        }
    }

    function members_controller($scope) {
        $scope.var2 = "members";
        $scope.mem = [{
            "name": "Jeet",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Palash",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Abhishekh",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Anjishnu",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Aditya",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Anjishnu",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        }
        ]; 
    }

    function members_ds_controller($scope) {
        $scope.var3 = "members_ds"; 
        $scope.mem = [{
            "name": "Jeet",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "Jeet1994",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Palash",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "Palashsk7",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Abhishek",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Anjishnu",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Aditya",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Prajwal",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "PrajwalVaichalkar",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Chakri Sebastian",
            "profile":"BA",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "chakri-palli",
            "year": "3",
            "yrex": "rd"
        },
        {
            "name": "Joy",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Yashodhan",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "codexetreme",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Udit",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "udit003",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Kunaal",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "kunparekh18",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Shubham J",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "shubhamjangid",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Anirudh",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Shubham S",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "2",
            "yrex": "nd"
        },        
        {
            "name": "Rajiv",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "Rajiv2605",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Arijit",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "Arijit987",
            "year": "2",
            "yrex": "nd"
        },
        {
            "name": "Akshay",
            "profile":"DS",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "PaiAkshay998",
            "year": "1",
            "yrex": "st"
        }
        ]; 
 
    }

    function members_ba_controller($scope) {
        $scope.var4 = "members_ba"; 
        $scope.memba = [{
            "name": "Anjishnu",
            "profile":"DS, Founder",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "AizenStorm",
            "year": "4",
            "yrex": "th"
        },
        {
            "name": "Chakri Sebastian",
            "profile":"BA",
            "projects": ["ML1", "ML2","ML3"],
            "github-handle": "chakri-palli",
            "year": "3",
            "yrex": "rd"
        }
        ]; 
    }

}) ();
