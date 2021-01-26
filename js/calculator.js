
function trim(stringToTrim) {
  return stringToTrim.replace(/^\s+|\s+$/g,"");
  }
  function Validate(frm){
  if(trim(frm.fname.value)==""){
  alert('Please enter a First Name.');
  frm.fname.focus();
  return false;
  }
  if(trim(frm.phone.value)==""){
  alert('Please enter a valid phone number!');
  frm.phone.focus();
  return false;
  }
  if(trim(frm.city.value)==""){
  alert('Please enter your city.');
  frm.city.focus();
  return false;
  }
  if(trim(frm.state.value)==""){
  alert('Please enter your state.');
  frm.city.focus();
  return false;
  }
  if(trim(frm.email.value)==""){
  alert('Please enter an Email Address.');
  frm.email.focus();
  return false;
  }
  else {
  var str = frm.email.value;
  var reg = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3,4}|[0-9]{1,4})(\]?)$/; // valid
  var reg = /^[^@]+@[^@]+.[a-z]{2,}$/i;
  if( !reg.test(str) ) {
  alert( str + " is not a valid e-mail address!" );
  frm.email.focus();
  return false;
  }
  }
  if(trim(frm.phone.value)==""){
  alert('Please enter a Phone Number.');
  frm.phone.focus();
  return false;
  }
  if(frm.email.value!=frm.conf_email.value){
  alert('The confirmation e-mail does not match the e-mail. Please re-enter both.');
  frm.email.value="";
  frm.conf_email.value="";
  frm.email.focus();
  return false;
  }
  }


  var hrs = 0
function doCalc(){
hrs = 0
frm = document.form1;
divheight = 0
document.getElementById('quote_des').value = '';
document.getElementById('quote_des').style.background = '#45108A';
document.getElementById('quote_des').style.color = '#fff';
for ( var i=0;i<document.form1.elements.length;i++ ){
if(frm.elements[i].type=='checkbox' || frm.elements[i].type=='radio'){
if(frm.elements[i].checked){
v = eval("frm.val" + frm.elements[i].value);
mult = eval("frm.mult" + frm.elements[i].value);
mult = mult.value;
if(mult==''){mult=1}else{mult=parseInt(mult)}
hrs = hrs + parseInt(v.value) * mult;
var cur_val = frm.elements[i].title;
var make_rfp = cur_val.replace("___", mult);
document.getElementById('quote_des').value += make_rfp + "\n";
divheight ++;
}
} 
}
premium = hrs * 75
medium = hrs * 40
budget = hrs * 19
p_hi = premium * 1.15
p_lo = premium * 0.85
m_hi = medium * 1.15
m_lo = medium * 0.85
b_hi = budget * 1.15
b_lo = budget * 0.85
document.form1.calc_total_p.value=premium
document.form1.calc_total_m.value=medium
document.form1.calc_total_b.value=budget
document.getElementById("bpP").innerHTML = formatCurrency(p_lo) + " - " + formatCurrency(p_hi)
document.getElementById("bpM").innerHTML = formatCurrency(m_lo) + " - " + formatCurrency(m_hi)
document.getElementById("bpB").innerHTML = formatCurrency(b_lo) + " - " + formatCurrency(b_hi)
document.getElementById('quote_des').value += "\n Estimated Budget: " + formatCurrency(b_hi) + " ~ " +formatCurrency(p_lo) ;
//document.getElementById('quote_des').value += "\n "+divheight;
// document.getElementById("BP").innerHTML = "Budget:<br><b>" + getBudget(premium) + "<\/b>"
// document.getElementById("BM").innerHTML = "Budget:<br><b>" + getBudget(medium) + "<\/b>"
// document.getElementById("BB").innerHTML = "Budget:<br><b>" + getBudget(budget) + "<\/b>"
document.getElementById("tbl1").style.display = 'inline'
new_height = ((divheight * 14)+45);
if (new_height > 250) new_height = 250;
document.getElementById('quote_des').style.height = new_height+'px';
}
function formatCurrency(num) {
num = num.toString().replace(/\$|\,/g,'');
if(isNaN(num))
num = "0";
sign = (num == (num = Math.abs(num)));
num = Math.floor(num*100+0.50000000001);
cents = num%100;
num = Math.floor(num/100).toString();
if(cents<10)
cents = "0" + cents;
for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
num = num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));
return (((sign)?'':'-') + '$' + num );
}
function getBudget(a){
amt = parseFloat(a)
if(amt < 100){return "Under $100";}
if(amt > 99 && amt < 250){return "$100 - $250";} 
if(amt > 249 && amt < 500){return "$250 - $499";} 
if(amt > 499 && amt < 1000){return "$500 - $999";} 
if(amt > 999 && amt < 2500){return "$1,000 - $2,499";} 
if(amt > 2499 && amt < 5000){return "$2,500 - $4,999";}
if(amt > 4999 && amt < 7500){return "$5,000 - $7,499";} 
if(amt > 7499 && amt < 10000){return "$7,500 - $9,999";} 
if(amt > 9999 && amt < 15000){return "$10,000 - $14,999";} 
if(amt > 14999 && amt < 30000){return "$15,000 - $30,000";}
if(amt > 30000 && amt < 50000){return "$30,000 - $50,000";}	
if(amt > 49999){return "$50,000+";} 
}