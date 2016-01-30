angular.module('example', []) //뒤에 배열에 있으면 처음 만들어진 컨트롤러 배열이 없으면 존에 만들어진 모듈 사용.

.controller('ExampleController', function($scope){
	$scope.message = {
		text : '아무것도 클릭되지 않음'
	};

	$scope.clickUnfocused = function(){
		$scope.message.text = '포커스 X';
	};

	$scope.clickFocused = function(){
		$scope.message.text = '포커스 O';
	};
});
