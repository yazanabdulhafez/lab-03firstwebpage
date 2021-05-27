alert("WELLCOM TO OUR WEBSITE")
var txt;
var r = confirm("DO YOU WANT TO CHOOSE  THE GREAT WONDER?");
if (r == true) {
 var userFav=prompt("what wonder you think its the greatest(in uppercase please)Hint:PETRA")
if (userFav==="PETRA"){
  alert("I HOPE THAT YOU VISIT THIS SITE SOON ")
  document.write('<img src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/11/tahw71-1.jpg " width="100%"/> ')

}
else if (userFav!=="PETRA"){
  alert("THE "+userFav+" IS GREAT WONDER")

}
}

 else {
  txt = "You pressed Cancel!"
  alert(txt)
}

