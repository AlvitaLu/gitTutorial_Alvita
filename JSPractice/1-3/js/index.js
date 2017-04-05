var cars=new Array(); //先宣告一個空陣列
cars[0]="Saab";       //幫第一空格給值
cars[1]="Volvo";
cars[2]="BMW";
cars[100]="Toyota";
console.log(cars);
$("#result").append(cars[0]+"<br/>");
$("#result").append(cars[100]+"<br/>");
$("#result").append(cars[99]+"<br/>");