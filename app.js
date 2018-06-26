console.log("coucou")
var table = $("#tab");
var tabval = [1,2,3,4,5,6,7,8,9,10];

// function mult() {

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
// }

function mult() {


for (i= 0; i<=9; i++) {
	var row = table.append("<tr></tr>");
	for (j=0; j<=9; j++) {
			var cellempty = replaceWith("<td>" + tabval[i]*tabval[j] + "</td>");
	}
}

}




$("#mult").click(function(){
	mult()
	
});


