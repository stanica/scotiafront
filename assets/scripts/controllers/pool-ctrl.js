Scotiafront.controller('PoolCtrl', ['$scope', '$routeParams', '$window', 'API', function($scope, $routeParams, $window, API) {
	var dataSet = [
		['Ruby Welch','3','16679','9658'],
		['Rebecca Meyer','3','17003','7485'],
		['Anthony Fisher','5','26945','8786'],
	    ["Clarence Frazier","3","17306","10225"],
	    ["Kathryn Coleman","7","16764","8279"],
	    ["Judy Ryan","7","27107","9650"],
	    ["Tammy Diaz","5","24621","8544"],
	    ["Gloria Rodriguez","3","16672","8506"],
	    ["Julia Robinson","6","19725","6142"],
	    ["Sara Stone","6","12902","8731"],
	    ["Benjamin Jordan","3","17643","7668"],
	    ["Margaret Spencer","6","14303","10999"],
	    ["Aaron Ruiz","4","19615","6045"],
	    ["Evelyn Williamson","7","27547","11918"],
	    ["Gregory Young","6","16048","10904"],
	    ["Anna Howell","5","21864","7072"],
	    ["Antonio Wilson","7","14514","6209"]
	];

    $('#medium-pool').DataTable({
        data: dataSet,
        columns: [
            { title: "Name" },
            { title: "Interest Rate" },
            { title: "Amount Requested" },
            { title: "Amount Funded" },
        ]
    });
}]);