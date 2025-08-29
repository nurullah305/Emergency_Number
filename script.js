 //copy alert section


document.getElementById("nationalEmergency-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number Copied 999...")


})


document.getElementById("police-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Number Copied 999...")


})


document.getElementById("fire-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number Copied 999...")


})

document.getElementById("health-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number Copied 1994-999999...")


})


document.getElementById("women-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number copied 109...")


})

document.getElementById("ach-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number Copied 106...")


})

document.getElementById("electricity-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert(" Number Copied 16216...")


})

document.getElementById("brac-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("  Number Copied 16445...")


})

document.getElementById("railway-copy").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("  Number Copied 163...")


})

   
 // call history section
 
 
 
 const callHistory = []



document.getElementById("nationalEmergency").addEventListener("click", function(e){
  e.preventDefault
  
  
      
alert("Calling National Emergency Number 999...")
 const data = {
  name : "National Emergency Number",
  num : 999,
  time : new Date().toLocaleTimeString()
}

 callHistory.push(data)

console.log(callHistory)

})


document.getElementById("police").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Police Helpline Number 999...")

const data ={
  name : "Police Helpline Number",
  num : 999,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)

})


document.getElementById("fire").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Fire Service Number 999...")


const data ={
  name : " Fire Service Number",
  num : 999,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)

})

document.getElementById("health").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Ambulance Service 1994-999999...")


const data ={
  name : "Ambulance Service",
  num : 1994999999,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)



})


document.getElementById("women").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Women & Child Helpline Number 109...")

const data ={
  name : " Women & Child Helpline",
  num : 109,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)





})

document.getElementById("ach").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Anti-Corruption Helpline Number 106...")

const data ={
  name : " Anti-Corruption Helpline ",
  num: 106,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)


})

document.getElementById("electricity").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling  Electricity Helpline Number 16216...")

const data ={
  name : " Electricity Helpline ",
  num: 16216,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)


})

document.getElementById("brac").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling Brac Helpline Number 16445...")

const data ={
  name : "Brac Helpline ",
  num : 16445,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)



})

document.getElementById("railway").addEventListener("click", function(e){
  e.preventDefault
 
      
alert("Calling  Bangladesh Railway Helpline Number 163...")

const data ={
  name : " Bangladesh Railway Helpline",
  num : 163,
 time : new Date().toLocaleTimeString()


}
 callHistory.push(data)

console.log(callHistory)

})


// Call History

document.getElementById("nationalEmergency").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})


 
document.getElementById( "police").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})




document.getElementById("fire").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})



document.getElementById(" health").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})



document.getElementById("women").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})



document.getElementById("ach").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})



document.getElementById("electricity").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})



document.getElementById("brac").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})




document.getElementById("railway").addEventListener("click",function(){
   const callHistoryContainer = document.getElementById("callHistory-container")


   for (const data of callHistory){
    const div  = document.createElement("div")
    div.innerHTML =`
   <div class="flex justify-between items-center bg-[#FAFAFA] p-6 rounded-lg">
<div>
  <h1 class="font-semibold text-xl">${data.name}</h1>
  <p >${data.num}</p>
</div>
<div>
   ${data.time}
</div>
</div>
    `

    callHistoryContainer.appendChild(div)

   }
})




