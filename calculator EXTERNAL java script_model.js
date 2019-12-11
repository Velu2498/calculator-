//only two
function call(){
    var r=document.getElementById("a").value 
    console.log(r)
    n = r.includes("+");
    if(n){
        z=r.split("+")
        console.log(z)
        a=parseInt (z[0])+parseInt(z[1])
        console.log(a)
    }
    w=r.includes("-")
    if(w){
       z=r.split("-")
       console.log(z)
       a=parseInt (z[0])-parseInt(z[1])
       console.log(a)
   }
   e=r.includes("/")
   if(e){
      z=r.split("/")
      console.log(z)
      a=parseInt (z[0])/parseInt(z[1])
      console.log(a)
  }
  t=r.includes("*")
  if(t){
    z= r.split("*")
     console.log(z)
     a= parseInt (z[0]) * parseInt(z[1])
     console.log(a)
  }
 document.calculator.ans.value=a
}

//more than 2
function call(){
   var r=document.getElementById("a").value 
   console.log(r)
   n = r.includes("+");
   if(n){
       z=r.split("+")
       console.log(z)
       a=0
       for(i=0;i<z.length;i++){
           a+=parseInt(z[i])
       }
       console.log(a)
   }
   w=r.includes("-")
   if(w){
      z=r.split("-")
      console.log(z)
      a=0
      for(i=0;i<z.length;i++){
          a=parseInt(z[i])-a
      }
      console.log(a)
  }
  e=r.includes("/")
  if(e){
     z=r.split("/")
     console.log(z)
     a=1
     for(i=0;i<z.length;i++){
         a/=parseInt(z[i])
     }
     console.log(a)
 }
 t=r.includes("*")
 if(t){
   z= r.split("*")
    console.log(z)
    a=1
    for(i=0;i<z.length;i++){
        a*=parseInt(z[i])
    }
    console.log(a)
 }
document.calculator.ans.value=a
}


// //using eval
// function call()
// {
// var r=document.getElementById("a").value 
// c=eval(r)
// document.calculator.ans.value=c
// }
