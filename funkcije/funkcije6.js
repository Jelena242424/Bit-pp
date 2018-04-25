var graphValues = [5,3,7,15,55];

function lines (values) {
	var star = "*";
    var asterix = "";
    for (var i = 0; i < values.length; i++) {
    	for (var j = 1; j <= values[i]; j++) {
			asterix += star;
			if (i< values[i]){
				asterix += " ";
			}
		}
		asterix +="\n";
    }
    return asterix;
}

console.log(lines(graphValues));
