
function GetResult(){
    var ex1 = document.getElementById('formaZNO').exersice1.value;
    var ex2 = document.getElementById('formaZNO').exersice2.value;
    var ex3 = document.getElementById('formaZNO').exersice3.value;
    var ex4 = document.getElementById('formaZNO').exersice4.value;
    var Res = 80;
    if (ex1 == 4){
        Res += 5;
    }
    if (ex2 == 4){
        Res += 5;
    }
    if (ex3 == 3){
        Res += 5;
    }
    if (ex4 == 1){
        Res += 5;
    }
    alert("Твій результат : " + Res + " зі 100 балів");
}