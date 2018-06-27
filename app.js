console.log("coucou !!")
var table = $("#tab");
var tabval = [1,2,3,4,5,6,7,8,9,10];


for (i= 0; i<=0; i++){
	var case0 = table.append("<th> x </th>");
}
for (i= 0; i<=9; i++){
	var head = table.append("<th>" + tabval[i]+ "</th>");
}


for (i= 0; i<=9; i++) {
	var row = table.append("<tr></tr>");
	for (j=0; j<=0; j++) {
		var cell = row.append("<th>" + tabval[i] + "</th>");
	}

	for (j=0; j<=9; j++) {
		var cellempty = row.append("<td></td>");
	}

}


function mult() {
	table.empty();


	for (i= 0; i<=0; i++){
		var case0 = table.append("<th> x </th>");
	}
	for (i= 0; i<=9; i++){
		var head = table.append("<th>" + tabval[i]+ "</th>");
	}


	for (i= 0; i<=9; i++) {
		var row = table.append("<tr></tr>");
		for (j=0; j<=0; j++) {
			var cell = row.append("<th>" + tabval[i] + "</th>");
		}
		
		for (j=0; j<=9; j++) {
			var result = tabval[j]*tabval[i];
			console.log(result)
			if(result>10){
				var cellempty = row.append("<td>" + (tabval[j]*tabval[i])+ "</td>");
				var color = this.cell.css("background-color", "pink")
			}
			else{
				var cellempty = row.append("<td>" + (tabval[j]*tabval[i]) + "</td>");
			}
			
		}


	}

}

function div() {
	table.empty();

	for (i= 0; i<=0; i++){
		var case0 = table.append("<th> x </th>");
	}
	for (i= 0; i<=9; i++){
		var head = table.append("<th>" + tabval[i]+ "</th>");
	}


	for (i= 0; i<=9; i++) {
		var row = table.append("<tr></tr>");
		for (j=0; j<=0; j++) {
			var cell = row.append("<th>" + tabval[i] + "</th>");
		}
		
		for (j=0; j<=9; j++) {
			var cellempty = row.append("<td>" + (tabval[j]/tabval[i]).toFixed(2) + "</td>");

		}

	}

}

function more() {
	table.empty();

	for (i= 0; i<=0; i++){
		var case0 = table.append("<th> x </th>");
	}
	for (i= 0; i<=9; i++){
		var head = table.append("<th>" + tabval[i]+ "</th>");
	}


	for (i= 0; i<=9; i++) {
		var row = table.append("<tr></tr>");
		for (j=0; j<=0; j++) {
			var cell = row.append("<th>" + tabval[i] + "</th>");
		}
		
		for (j=0; j<=9; j++) {
			var cellempty = row.append("<td>" + (tabval[j]+tabval[i]) + "</td>");
		}

	}

}

function less() {
	table.empty();

	for (i= 0; i<=0; i++){
		var case0 = table.append("<th> x </th>");
	}
	for (i= 0; i<=9; i++){
		var head = table.append("<th>" + tabval[i]+ "</th>");
	}


	for (i= 0; i<=9; i++) {
		var row = table.append("<tr></tr>");
		for (j=0; j<=0; j++) {
			var cell = row.append("<th>" + tabval[i] + "</th>");
		}
		
		for (j=0; j<=9; j++) {
			var cellempty = row.append("<td>" + (tabval[j]-tabval[i]) + "</td>");
		}

	}

}

$("#mult").click(function(){
	mult()

});

$("#div").click(function(){
	div()
	
});

$("#more").click(function(){
	more()
	
});

$("#less").click(function(){
	less()
	
});


