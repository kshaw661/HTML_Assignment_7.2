function findSum(){
	var len = arguments.length;
	var i = 0;
	var sum = 0;
	while(  i < len ){
		sum+=parseInt(arguments[i]);
		i++;
	}
	return sum;
}

var find_sum = findSum(1,2,3);
console.log('Sum of Given arguments: '+find_sum);

var find_sum = findSum(1,2,3,4,5,6,7,8,9,10) ;
console.log('Sum of Given arguments: '+find_sum);
