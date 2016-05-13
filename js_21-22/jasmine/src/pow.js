var app = {
	pow: function(base, exponent){
		var result = 1;
		for (var i = 0; i < Math.abs(exponent); i++) {
			result *= base;
		}
		if(exponent < 0) {
			return 1/result;
		} else {
			return result;
		}
		return false;
	}
}