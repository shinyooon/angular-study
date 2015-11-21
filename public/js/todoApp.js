var model = {
	user : '신윤아',
	items : [
		{ action : '출근하기', done : false},
		{ action : '스터디예습',done:true},
		{ action : '도서 구매', done:false},
		{ action : '데이트',done:false}
	]
};
var todoApp = angular.module('todoApp', []);
todoApp.controller("TodoController", function($scope){
	$scope.todo = model;

	$scope.incompleteCount = function(){
		var count = 0;
		angular.forEach($scope.todo.items, function(item){
			if(!item.done){
				count++;
			}
		});
		return count;
	}
})
