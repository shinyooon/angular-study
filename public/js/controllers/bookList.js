angular.module('book') //이미 만들어진 모듈을 사용할때에는  ,[]를 만들지 않음
.constant('bookListActiveClass', 'btn-success')
.constant('bookListPageCount', 2)
.controller('bookListCtrl',function($scope, $filter, bookListActiveClass, bookListPageCount){//$filter : angular가 쓰는 내부 필더
	var selectedGrade = null;
	$scope.selectedPage = 1;
	$scope.pageSize = bookListPageCount;
	$scope.selectGrade = function(newGrade){
		selectedGrade =newGrade;
		selectedItem = newGrade;
		$scope.selectedPage = 1;
	}
	 $scope.selectPage = function(newPage){
		$scope.selectedPage = newPage;
	};
	$scope.getGradeClass = function(grade){
		return selectedGrade == grade? bookListActiveClass : '';
	};
	$scope.getPageClass = function(page){
		return $scope.selectedPage == page? bookListActiveClass : '';
	}
	$scope.gradeFilterFn = function(book){
		return selectedGrade == null || parseInt(book.grade) == selectedGrade;
	}
	// $scope.alertInfoFn=function(book){
	// 	alert('category : '+book.category+'\ngrade : '+book.grade+'\nname : '+book.name + '\nprice : '+book.price+'  \nid : '+book.id);
	// }
	$scope.alertInfoFn = function(book){
		var msg = '';
		for(prop in book){
			if(prop != '$$hashKey'){
				msg += prop + ' : ' + book[prop] + '\n';
			}
		}
		alert(msg);
	}
})
