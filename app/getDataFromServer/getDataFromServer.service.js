'use strict';

function getDataFromServerService() {
  // Service logic
  // ...
// mock data
  var userData = {
		  userStats: {
			  name: 'Wojciech',
			  ranking: 3,
			  happyHours: 5
		  },
		  userActivities: [
			{name:'Zumba',time:'20.30',male:2,female:7,subscribed:true},
			{name:'Samba',time:'18.00',male:10,female:23,subscribed:false},
			{name:'Rumba',time:'21.15',male:6,female:5,subscribed:true}	,	
			{name:'Trap',time:'19.00',male:1,female:2,subscribed:false},
			{name:'EDM',time:'21.15',male:2,female:3,subscribed:true}				
		  ]
	  
  };

  // Public API here
      return userData;

  };



angular.module('sappApp')
  .factory('getDataFromServer', getDataFromServerService);
