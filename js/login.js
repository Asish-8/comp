
// let a = document.getElementById('Username').innerHTML
// console.log(a)


function checking(){
  const checkbox = document.getElementById('Username').checked
  if (checkbox===true){
    console.log("True");
  }
  else{
    console.log("False");
  }
}
checking();