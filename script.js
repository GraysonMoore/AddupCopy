$("#button").click(function(event) {
	var a = Number($("#inputh").val());
	var b = Number($("#inputm").val());
	var answer = a * 170 + b * 3.35;
	$("#answer h1").detach();
	$("p").detach();
	$("#answer").append("<p>Standard Price: </p><h1>$" + answer.toFixed(2) + "</h1>");
	var answer2 = answer * 1.75;
	$("#answer2 h1").detach();
	$("#answer2").append("<p>After Hours Price: </p><h1>$" + answer2.toFixed(2) + "</h1>");
});
