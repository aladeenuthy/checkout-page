function decrement(){
 const counter = document.getElementById("counter");
 let counterContent = parseInt(counter.innerHTML) 
 if(counterContent > 1){
  counter.innerHTML = counterContent-=1
 }
}
function increment(){
  const counter = document.getElementById("counter");
 let counterContent = parseInt(counter.innerHTML) 
 
  counter.innerHTML = counterContent+=1
}