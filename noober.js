async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
let outputElement = document.querySelector('.rides')

let rides = json
console.log(rides)

for (let i=0; i < rides.length; i++) {
 if(rides[i].length > 1) {
    levelOfService="Noober Pool"
 } 
 else if (rides[i][0].purpleRequested == true) {
    levelOfService = "Noober Purple"
 } 
 else if (rides[i][0].numberOfPassengers > 3) {
    levelOfService = "Noober XL"
 }
  else levelOfService = "Noober X"
  outputElement.insertAdjacentHTML('beforeend', `
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>
      </h1>`)
      
  for (let a=0; a < rides[i].length; a++) {
    passengerName = rides[i][a].passengerDetails.first + " " + rides[i][a].passengerDetails.last
    passengerPhone = rides[i][a].passengerDetails.phoneNumber
    passengerNumberOfPassengers = rides[i][a].numberOfPassengers
    passengerPickupAddressLine1 = rides[i][a].pickupLocation.address
    passengerPickupAddressLine2 = rides[i][a].pickupLocation.city + ", " + rides[i][a].pickupLocation.state + " " + rides[i][a].pickupLocation.zip
    passengerDropoffAddressLine1 = rides[i][a].dropoffLocation.address
    passengerDropoffAddressLine2 = rides[i][a].dropoffLocation.city + ", " + rides[i][a].dropoffLocation.state + " " + rides[i][a].dropoffLocation.zip
    
    if (rides[i][0].purpleRequested ==true) {
    outputElement.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${passengerName}</h2>
                <p class="font-bold text-gray-600">${passengerPhone}</p>
              </div>
              <div class="w-1/2 text-right">
                <span class="rounded-xl bg-purple-600 text-white p-2">
                  ${passengerNumberOfPassengers} passenger(s)
                </span>
              </div>
            </div>
            <div class="mt-4 flex">
              <div class="w-1/2">
                <div class="text-sm font-bold text-gray-600">PICKUP</div>
                  <p>${passengerPickupAddressLine1}</p>
                  <p>${passengerPickupAddressLine2}</p>
                </div>
                <div class="w-1/2">
                  <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                    <p>123 ${passengerDropoffAddressLine1}</p>
                    <p> ${passengerDropoffAddressLine2}</p>
                </div>
              </div>
            </div>
          </div>`)
    }
else {outputElement.insertAdjacentHTML('beforeend', `
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengerNumberOfPassengers} passenger(s)
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${passengerPickupAddressLine1}</p>
              <p>${passengerPickupAddressLine2}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
                <p>123 ${passengerDropoffAddressLine1}</p>
                <p> ${passengerDropoffAddressLine2}</p>
            </div>
          </div>
        </div>
      </div>`)
  }
 }  
}
}
window.addEventListener('DOMContentLoaded', pageLoaded)