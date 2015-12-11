angular.module('book') //이미 만들어진 모듈을 사용할때에는  ,[]를 만들지 않음
.controller('bookListCtrl',function($scope, $filter){//$filter : angular가 쓰는 내부 필더
	var selectedGrade = null;
	$scope.selectGrade = function(newGrade){
		selectedGrade =newGrade;
	}
	$scope.gradeFilterFn = function(book){
		return selectedGrade == null || parseInt(book.grade) == selectedGrade;
	}
})
