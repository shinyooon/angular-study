//카테고리별 상품들만 가지고 올 controller
angular.module('product') //이미 만들어진 모듈을 사용할때에는  ,[]를 만들지 않음
.controller('prodcutListCtrl',function($scope, $filter){//$filter : angular가 쓰는 내부 필더
	var selectedCategory = null;
	$scope.selectCategory = function(newCategory){
		selectedCategory =newCategory;
	}
	$scope.categoryFilterFn = function(product){
		return selectedCategory == null || product.category == selectedCategory;

		/*
		var selectedCateory = null;
		var product = { category : 'baseball'}
		selectedCategory
		console.log(selectedCateogory == null)
		*/
	}
})
