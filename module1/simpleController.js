
mainApp.controller("simpleController", function($scope) {
	$scope.people = [{firstName : 'Jon', lastName : 'Snow'}, {firstName : 'Stannis', lastName : 'Baratheon'}, {firstName : 'Arya', lastName : 'Stark'}];
	$scope.statuses = [{value : 'Unknown', label : 'Unknown'},
		{value : 'Alive', label : 'Alive'},
		{value : 'Dead', label : 'Dead'}];
	for(var i = 0; i < $scope.people.length; i++) {
		$scope.people[i].status = 'Alive';
	}

	$scope.addChar = function() {
		$scope.people.push({
			firstName : $scope.fname,
			lastName : $scope.lname,
			status : $scope.status
		});
		$scope.fname = $scope.lname = $scope.status = 'Unknown';
	}
});
