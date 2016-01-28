//namespace 패턴
/*function helloController(){

}
이렇게 사용하지 않는 이유 :
*/

angular.module('hello',[])
	.controller('HelloController', function($scope, $filter, $http, $timeout, $q){ //$http :  ajax를 사용하기 위해
		$scope.hello = {
			msg: 'hello'
		}

		$scope.toUpper =function(){
			$scope.hello.msg = $filter('uppercase')($scope.hello.msg);
		}
		//$scipe.helllo.msg = '안녕하세요' 동일하지만, 위의 객체형태 선언 방식이 추가하기가 편하다.
		$scope.delete =function(index){
			//console.log($scope.items[index]);
			$scope.items.splice(index, 1);
		}

		$scope.items = [
		{
			title : '볼펜',
			count : 4,
			price : 1800
		},
		{
			title : '지우개',
			count : 1,
			price : 800
		}
		,{
			title : '연필',
			count : 12,
			price : 400
		}
		]

		$scope.loadData = function(){
			$http.get('/hello/data')
			.success(function(data){
				$scope.products = data;
			});
		};

		$scope.result = false;
		$scope.showQuiz = function(){
			$scope.result = true;
			var promiseObj = $timeout(function(){
				return $scope.answer;
			}, 3000);

			promiseObj.then(function(input){
				if(input == 39){
					$scope.result = true;
					$scope.msg = "정답!";
				}else{
					$scope.result = false;
					$scope.msg = "틀렸어요!";
				}
				$scope.info = "다시 시작하려면 refresh 해주세요."
			})
		}

		// $scope.promiseTest = function(number){
		// 	var defer = $q.defer();
		// 	defer.promise
		// 		.then(function(){
		// 			return $timeout(function(){//return 받은 값이 primise이면 앞단계가 끝날 때 까지 기다려줌. return값이  promise가 아니라면 $timeout대신 $http.get.
		// 				//return는 값을 다음 then이 받을 수 있음
		// 				alert('asyncA');
		// 			},3000);
		// 		})
		// 		.then(function(){
		// 			return $timeout(function(){
		// 				alert('asyncB');
		// 			},1000)
		// 		})
		// 		defer.resolve();
		// };
		// $scope.promiseTest();

		$scope.promiseQuiz = function(number){
			var defer = $q.defer();
			defer.promise
				.then(
					asyncC();
				)
				.then(
					 asyncA();
				)
				.then(
					asyncB();
				)
				.then(function(){
					alert('끝났다!');
				});
			defer.resolve();

		};
		function asyncA() {
			alert('a시작');
			return $timeout(function(){
				alert('asyncA');
			},3000);
		};
		function asyncB() {
			return $timeout(function(){
				alert('asyncB');
			},1000);
		};
		function asyncC() {
			alert('c시작');
				alert('asyncC');
			},2000);
		};
		$scope.promiseQuiz();

	});
