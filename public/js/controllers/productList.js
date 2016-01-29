//카테고리별 상품들만 가지고 올 controller
angular.module('product') //이미 만들어진 모듈을 사용할때에는  ,[]를 만들지 않음
.controller('prodcutListCtrl',function($scope, $filter, $http){//$filter : angular가 쓰는 내부 필더
	var selectedCategory = null;
	var cart = []
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
	$scope.loadCart = function(){
		$http.get('/products/cart')
		.success(function(data){
			$scope.cart= data;
		});
		return $scope.cart;
	}
	$scope.putInCartFn = function(product){
		$scope.loadCart();
		$http.post('/products/cart', product)
			.then(function(data){
				$scope.cart.push(product);
				$scope.product = {};
			})
	}
	 $scope.totalMoney = function(){
		var sum = 0, cart = $scope.cart;
		if(angular.isArray(cart)){
			for(var i=0;i<cart.length;i++){
				sum += parseInt(cart[i].price);
			}
		}
		return sum;
	}
})
