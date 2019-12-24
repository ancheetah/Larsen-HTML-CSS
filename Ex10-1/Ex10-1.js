//Larsen Ex10-1
//Create a script to write out the multiplication table for the number 5 from 1 to 20 using a while loop

function times5(max){
	var i=1;
	var myArr = new Array(max/5);

	while(i*5 <= max){ 
		myArr[i-1] = i*5;
		//document.body.innerHTML += "<p>" + i + " x 5 = " + (i*5) + "</p>";
		i++;
	}
	
	return myArr;
}

function printTable(times5arr){
	for(i=0; i<times5arr.length; i++){
		document.body.innerHTML += "<p>" + (i+1) + " x 5 = " + times5arr[i] + "</p>";
	}
}


printTable(times5(20));
