angular.module('moneyBook',[])
.controller('moneyBookCtrl',function($scope, $http, $filter){
	$scope.loadData = function(){
		$http.get('/money-book/data')
		.success(function(data){
			$scope.records = data;
		});
	}
	$scope.pushData = function(){
		// var date = $filter('date')(new Date(),'yyyy. M. dd. a H:mm:ss');
		// // 시각을 입력받았을대 이곳에서 시간을 받을수도, app,js에서 받을 수도 있다.
		// var ampm = date.split(' ')[3];
		// if(ampm==='am'){
		// 	ampm='오전';
		// }else{
		// 	ampm='오후';
		// }
		// $scope.record.date = $filter('date')(new Date(),'yyyy. M. dd. '+ampm+' h:mm:ss');
		$scope.record.date = new Date().toLocaleString(); //2016. 1. 16. 오전 10:03:08 형태로 변환
		$http.post('/money-book/data', $scope.record)
			.success(function(data){
				$scope.loadData();
			}); // angular이전 버전 방식
			// angular최신 버전 방식 (국제 표준 방식)
			//.then(fn, fn) 첫번째 fn 성공했을 때 두번째 fn 실패했을때(서벗단의 오류들)
	};
	 $scope.totalMoney = function(){
		var sum = 0, records = $scope.records;

		if(angular.isArray(records)){
			for(var i=0;i<records.length;i++){
				sum += parseInt(records[i].money);
			}
		}

		return sum;
	}
});
