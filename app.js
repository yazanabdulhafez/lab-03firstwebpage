var userAge=prompt('please input your age?')
while (userAge<13){
  userAge=prompt('please input your age again ?')
}


function choosingWonder(){
var txt;
var r = confirm("DO YOU WANT TO CHOOSE  THE GREAT WONDER?");
if (r == true) {
 var userFav=prompt("what wonder you think its the greatest(in uppercase please)Hint:PETRA")
if (userFav==="PETRA"){
  alert("I HOPE THAT YOU VISIT THIS SITE SOON ")
 
}
else if ( userFav !== null && userFav !== "PETRA"  ){
  if (userFav !== " "){
    alert("you dont enter name of wonder!!")
  }
  else{
  alert("THE "+userFav+" IS GREAT WONDER")
  }
}

else  {
  txt = "You pressed Cancel!"
  alert(txt)}
 
}

 else {
  txt = "You pressed Cancel!"
  alert(txt)
}
}




function welcome(){
var userName =prompt('what is your name')
alert('welcome to our website '+userName)}




function rating(){
var r = confirm("DO YOU WANT TO RATE OUR WEBSITE?");

 if (r == true) {
var userRating=prompt('please rate our website from 1 to 5?')

for (let i=0 ; i<userRating && i<5 ; i++)
{
  document.write('<img id=jsimg src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png"/>')  //console.log(i+1)
  document.write(i+1)

}
 }
 
 else{
alert('you did not rated our web site')
 }
}

welcome()
choosingWonder()
rating()