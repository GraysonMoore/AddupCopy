$("#button").click(function(event) {
	var hours = Number($("#inputh").val());
	var b = Number($("#inputm").val());
	var matcost = 0;
	if (b < 20) {
		matcost = b * 5;
	} else if (b >= 20 && b <= 500) {
		matcost = b * (13.9142 + (-3.9008 * Math.log(b)) + 0.3088 * (Math.log(b) ** 2));
	} else if (b > 500) {
		matcost = b * 1.6;
	}
	var answer = hours * 170 + matcost;
	$("#answer h1").detach();
	$("p").detach();
	$("#answer").append("<h1>$" + answer.toFixed(2) + "</h1>");
	/*var answer2 = answer * 1.75;
	$("#answer2 h1").detach();
	$("#answer2").append("<p>After Hours Price: </p><h1>$" + answer2.toFixed(2) + "</h1>");*/
});
