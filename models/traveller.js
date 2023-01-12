const Traveller = function(journeys) {
  this.journeys = journeys;
};

// we're expecting a list of startLocations here. We need to loop through all journeys, pull the startLocations and store them in a list. We could create an empty list and loop through the journeys with forEach, but map will do both: loop and create a list with the item required.

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    
    return journey.startLocation
  })
  
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
// console.log(getJourneyEndLocations())
};

//we're expecting a list of 2 journeys (transport: train). We need to loop through the jouneys, identify the ones that have train as mode of transport and return them. Find is not good here, as it will only return the first journey it finds. So should we use filter? Then we need to check if any journey.transport is equal to the mode of transport that we're testing for (train), return if yes.

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};


//this should return a list of 2 journeys that match the criteria (>1000)
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.every((journey) => {
    return journey.distance >= minDistance
  })
  // return this.journeys.map((jounrey) => {
  //   if (jounrey.distance >= minDistance) {
  //     return jounrey
  //   }
  // })
};

//this will return a number, a sum of all distances. We can use reduce

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)
}

//Should return a list of all modes of transport without duplicates. So we need to check somehow for duplicates. Maybe an if statement, that adds to the list if the item doesn't yet exist there and discard if it does

Traveller.prototype.getUniqueModesOfTransport = function () {
  const listOfUniqueTransport = []
  const filteredElements = listOfUniqueTransport.filter(transport => {
    if (listOfUniqueTransport.has(transport)) {
      listOfUniqueTransport.delete(transport)
    }
    else {
      listOfUniqueTransport.push(transport)  
    }
  })
    
    return listOfUniqueTransport


}


module.exports = Traveller;
