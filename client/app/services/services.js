angular.module('PairMatching.servics',[])

//===================================================================
/*							student factory 	     			   */
//===================================================================
	.factory('Student',function($http){
		
		var addStudent = function(data){
			return $http({
				method:'POST',
				url:'/api/student/addStudent',
				data:data
			}).then(function(resp){
				return resp.data;
			});
		};

		var getAllStudent = function(data){
			return $http({
				method : 'GET',
				url : '/api/student/getAllStudent'
			}).then(function(resp){
				return resp;
			});
		};

		var getStudent = function (data) {
			return $http({
				method : 'POST',
				url : '/api/student/getStudent',
				data : data
			}).then(function (resp) {
				return resp;
			});
		};

		var deleteStudent = function (data) {
			return $http({
				method : 'POST',
				url : '/api/student/deleteStudent',
				data : data
			}).then(function (resp) {
				return resp
			});
		};

		return{
			addStudent : addStudent,
			getAllStudent : getAllStudent,
			getStudent : getStudent,
			deleteStudent : deleteStudent 
		};
	})

//===================================================================
/*							history factory 	     			   */
//===================================================================
	.factory('History',function ($http) {
		var addStudentHistory = function (data) {
			return $http({
				method : 'POST',
				url : '/api/history/addStudentHistory',
				data : data
			}).then(function (resp) {
				return resp;
			});
		};

		var getAllStudentHistory = function (data) {
			return $http({
				method : 'GET',
				url : '/api/history/getAllStudentHistory'
			}).then(function (resp) {
				return resp;
			});
		};
		
		var deleteStudentHistory = function (data) {
			return $http({
				method : 'POST',
				url : '/api/history/deleteStudentHistory',
				data : data
			}).then(function (resp) {
				return resp;
			});
		};

		return{
			addStudentHistory : addStudentHistory,
			getAllStudentHistory : getAllStudentHistory,
			deleteStudentHistory : deleteStudentHistory
		};
	})

//============================================================================
/* 									dayBord  								*/
//============================================================================	
	.factory('DayBord', function ($http) {
		var addSlot = function (data) {
			return $http({
				method : 'POST',
				url : '/api/dayBord/addSlot',
				data : data
			}).then(function (resp) {
				return resp;
			});
		};

		var getAllSlots = function (data) {
			return $http({
				method : 'GET',
				url : '/api/dayBord/getAllSlots' 
			}).then(function (resp) {
				return resp;
			});
		};

		var deleteSlot = function (data) {
			return $http({
				method : 'POST',
				url : 'deleteSlot',
				data : data
			}).then(function (resp) {
				return resp;
			});
		};

		return{
			addSlot : addSlot,
			getAllSlots : getAllSlots,
			deleteSlot : deleteSlot
		};
	})
