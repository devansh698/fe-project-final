let total1,ds=0;
function refresh(){
    document.getElementById("bill").style.display="block";
    document.getElementById("btns1").style.color = "#ff0000";
    refres();
}
function detailspge(){
    document.getElementById("btns2").style.color = "#ff0000";
    document.getElementById("btns1").style.color = "white";
    document.getElementById("bill").style.display="none"; 
    document.getElementById("pdetails").style.display="block";  
}
function Paypage(){
    document.getElementById("btns3").style.color = "#ff0000";
    document.getElementById("btns2").style.color = "white";
    document.getElementById("pdetails").style.display="none"; 
    document.getElementById("payment").style.display="block";
    // event.preventDefault();
}
function successfullypaid(){
    alert("Thanks for placeing odder! :)");
    document.getElementById("btns1").style.color = "#ff0000";
    document.getElementById("btns3").style.color = "white";
    localStorage.clear();
      let totalAmount=0;
  localStorage.setItem("total", totalAmount.toString());
      location.reload();
}
function refres() {
    let a,d, sc, tax;
    a = parseInt(localStorage.getItem("total"));
    d = (ds*a)/100;
    sc = (5 * a) / 100;
    tax = (18 * a) / 100;
    total1 = a - d + sc + tax;
    document.getElementById("amount").innerHTML = ' Rs.' + a.toFixed(2);
    document.getElementById("disc").innerHTML = ' Rs.' + d.toFixed(2);
    document.getElementById("sc").innerHTML = ' Rs.' + sc.toFixed(2);
    document.getElementById("taxes").innerHTML = ' Rs.' + tax.toFixed(2);
    document.getElementById("total").innerHTML = ' Rs.' + total1.toFixed(2);
    // itms();
}
function promo(){
    let z=document.getElementById("Promocode").value;
if(z=="first10"){
    ds=10;
    refresh();

}
if(z=="first20"){
    ds=20;
    refresh();
}
if(z=="first30"){
    ds=30;
    refresh();
}
if(z=="first40"){
    ds=40;
    refresh();
}
if(z==""){
    ds=0;
    refresh();
}


}


