angular.module('moneyBook',[])
.controller('moneyBookCtrl',function($scope, $http, $filter){
	$scope.loadData = function(){
		$http.get('/money-book/data')
		.success(function(data){
			$scope.records = data;
		});
	}
	$scope.pushData = function(){
		var date = $filter('date')(new Date(),'yyyy. M. dd. a H:mm:ss');
		var ampm = date.split(' ')[3];
		if(ampm==='am'){
			ampm='오전';
		}else{
			ampm='오후';
		}
		$scope.record.date = $filter('date')(new Date(),'yyyy. M. dd. '+ampm+' h:mm:ss');
		$http.post('/money-book/data', $scope.record)
			.success(function(data){
				$scope.loadData();
			});
	};
	// $scope.totalMoney = function(){
	// 	var total = 0
	// 	for(var i =0; i<$scope.record.length;i++){
	// 		total += $scope.records[i].money;
	// 	}
	// 	return total;
	// }
});
