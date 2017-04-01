/* Common Service file */
app.service('commonService', ['$http', function($http){

	/* Function used to fetch TV Remote data */
	this.fetchRemoteDetails = function(obj){
		var url = 'https://www.cubical.in/ir/remotes/tvIKrq';
		url = 'data/remoteData.json';
		return $http({
					method: 'GET',
					url: url
				}).success(function (data, status, headers, config) {
		            return;
		        }).error(function (data, status, headers, config) {
		            return;
		        });
	};
}]);