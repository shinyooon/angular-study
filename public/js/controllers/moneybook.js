angular.module('moneyBook',[])
.controller('moneyBookCtrl',function($scope, $http, $filter){
	$scope.loadData = function(){
		$http.get('/money-book/data')
		.success(function(data){
			$scope.records = data;
		});
	}
	$scope.pushData = function(record){
		// var date = $filter('date')(new Date(),'yyyy. M. dd. a H:mm:ss');
		// // 시각을 입력받았을대 이곳에서 시간을 받을수도, app,js에서 받을 수도 있다.
		// var ampm = date.split(' ')[3];
		// if(ampm==='am'){
		// 	ampm='오전';
		// }else{
		// 	ampm='오후';
		// }
		// $scope.record.date = $filter('date')(new Date(),'yyyy. M. dd. '+ampm+' h:mm:ss');
		record.date = new Date().toLocaleString(); //2016. 1. 16. 오전 10:03:08 형태로 변환
		// $http.post('/money-book/data', $scope.record)
		// 	.success(function(data){
		// 		$scope.loadData();
		// 	}); // angular이전 버전 방식
			// angular최신 버전 방식 (국제 표준 방식)
			//.then(fn, fn) 첫번째 fn 성공했을 때 두번째 fn 실패했을때(서벗단의 오류들)
		//Ajax promise then 추가
		$http.post('/money-book/data', record)
			.then(function(data){// 1.success function
				if(data){
					alert('데이터가 추가되었습니다.');
					$scope.records.push(record);
					$scope.record = {};
				}else{
					alert('데이터가 추가되지 못했습니다.');
				}
			}, function(response){ // 2.error function
				if(response.status === 500){
					alert('서버에서 오류가 발생하였습니다..\n잠시후 시도해주세요.'); //혹은 다른 페이지로 이동
				}else if(response.status === 404){
					alert('Ajax 호출 url이 잘못되었습니다.');
				}else{
					alert('알수없는 오류 발생\n'+response.data);
				}
			});
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
