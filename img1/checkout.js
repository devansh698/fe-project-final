let total;
function refresh(){
    let a,d,sc,tax;
    a=parseInt(localStorage.getItem("total"));
    d=0;
    sc=(5*a)/100;
    tax=(18*a)/100;
    total=a+d+sc+tax;
document.getElementById("amount").innerHTML=' Rs.'+a.toFixed(2);
document.getElementById("disc").innerHTML=' Rs.'+d.toFixed(2);
document.getElementById("sc").innerHTML=' Rs.'+sc.toFixed(2);
document.getElementById("taxes").innerHTML=' Rs.'+tax.toFixed(2);
document.getElementById("total").innerHTML=' Rs.'+total.toFixed(2);

}