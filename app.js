
function numberview(num){
   var result = document.getElementById("result");
   result.value += num;
}
function clearC(){
    var result = document.getElementById("result");
    result.value=""
 }
 
function getresult(){
    var result = document.getElementById("result");
    result.value= eval(result.value)
}
function back(){
    var result = document.getElementById("result");
    result.value= result.value.slice(0,-1)
}
