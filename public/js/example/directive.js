angular.module('example') //뒤에 배열에 있으면 처음 만들어진 컨트롤러 배열이 없으면 존에 만들어진 모듈 사용.
	.directive('ngInitFocus',function(){
		return{
			link : function(scope, element){
				element[0].focus();
			}
		}
	})
	.directive('helloWorld',function(){
		return{
			restrict : 'E', //E: element, A:attribute, C:class, M:comment.
			template : '<div><h3>헬로우 월드</h3></div>'
		}
	})
	.directive('movie', function(){
		return{
			restrict : 'E',
			link : function(scope, element, attrs) {//attrs 요소들의 배열
				scope.username = attrs.username;
				scope.reputation = attrs.reputation;
				scope.img = attrs.img;
			},
			template : '<div><p><h3>영화소개</h3></p><p>Username : {{username}}</p><p>Reputation : {{reputation}}</p><p><img src="{{img}}" width="410" height="294" /></p></div>'
		}

	})
	.directive('restricted', function(){
		return{
			restrict : 'A',
			link : function(scope, element, attrs){
				var isAuth = Math.floor((Math.random() * 10) +1) > 5;
				if(!isAuth){
					element.css('display', 'none');
				}
			}
		}
	})
	.directive('products', function(){
		return{
			restrict : 'E',
			link:function(scope){
				var products = [
					{category : 'Watersports', description:'1인용 보트', name:'카약', price:'270000', id:1},
					{category : 'Watersports', description:'보호 장비', name:'보호재킷', price:'48000', id:2},
					{category : 'Soccer', description:'FIFA 규격의 무게', name:'축구공', price:'28000', id:3},
					{category : 'Soccer', description:'Nike', name:'축구화', price:'160000', id:4},
					{category : 'Soccer', description:'상,하의', name:'유니폼', price:'97000', id:5},
					{category : 'BasketBall', description:'KBL 공식 지정구', name:'농구공', price:'56000', id:6},
					{category : 'BasketBall', description:'2015 서울 StreetBall', name:'대회참가권', price:'20000', id:7},
					{category : 'BasketBall', description:'조던 6', name:'농구화', price:'180000', id:8},
					{category : 'BasketBall', description:'겨울용', name:'이너웨어', price:'46000', id:9}
				];
				scope.products=products;
			},
			template : '<ul ><li ng-repeat="product in products">{{product.name}}</li></ul>'
		}
	})
	// .directive('successClass',function(){
	// 	return{
	// 		restrict : 'C', //E: element, A:attribute, C:class, M:comment.
	// 		template : 'success'
	// 	}
	// })

