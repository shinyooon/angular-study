angular.module('customFilter',[])
//module이 제공하는 filter사용
.filter('unique',function(){
	return function(data, prop){
		if(angular.isArray(data) && angular.isString(prop)){
			var results = [];
			var keys = {}; // 자바스크립트에서 객체는 배열. 키값이 문자열인 즉 map으로 된 배열이다.
			for(var i =0;i<data.length;i++){
				var val = data[i][prop]; //data[i]['category']
				if(prop==='grade'){
					val = parseInt(val);
				}
				if(angular.isUndefined(keys[val])){
					keys[val] = true; //카테고리가 겹치지 않도록 최초 한번 나왔을때 result에 push.
					results.push(val);
				}
			}
			return results;
		}else{
			return data;
		}
	}
})
