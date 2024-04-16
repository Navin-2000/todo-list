function add(){
  var a=document.getElementById("inp").value
  if(a.length!==0){
     var b=document.getElementById("div")
    b.className="t"
   document.getElementById("inp").value=" "
    var c=document.createElement("p")
    c.className="l"
    c.innerText=a
    b.appendChild(c)
    var d=document.createElement("button")
    // d.src=""
    d.innerText="{X}"
    d.classname="remove"
    c.append(d)
    c.className="c"
    d.onclick=(()=>{c.remove()})

  }
  
 
  }
  
 

