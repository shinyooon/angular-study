//namespace 패턴
/*function helloController(){

}
이렇게 사용하지 않는 이유 :
*/

angular.module('hello',[])
	.controller('HelloController', function($scope, $filter, $http, $timeout){ //$http :  ajax를 사용하기 위해
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

	});
