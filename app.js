
// var txt;
// var r = confirm("DO YOU WANT TO CHOOSE  THE GREAT WONDER?");
// if (r == true) {
//  var userFav=prompt("what wonder you think its the greatest(in uppercase please)Hint:PETRA")
// if (userFav==="PETRA"){
//   alert("I HOPE THAT YOU VISIT THIS SITE SOON ")
//   document.write('<img src="https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2020/11/tahw71-1.jpg " width="100%"/> ')

// }
// else if (userFav!=="PETRA"){
//   alert("THE "+userFav+" IS GREAT WONDER")

// }
// }

//  else {
//   txt = "You pressed Cancel!"
//   alert(txt)
// // }
// var userName =prompt('what is your name')
// alert('welcome to our website '+userName)

var userAge=prompt('please input your age?')
while (userAge<18){
  userAge=prompt('please input your age again ?')
}
alert("WELLCOM TO OUR WEBSITE")
var r = confirm("DO YOU WANT TO RATE OUR WEBSITE?");
 if (r == true) {
var userRating=prompt('please rate our website from 1 to 5?')
for (let i=0 ; i<userRating && i<5 ; i++)
{
  document.write('<img id=jsimg src="https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png"/>')
  //console.log(i+1)
  document.write(i+1)

}
 }
 else{
alert('you did not rated our web site')
 }
