//const { fetchMyIP, fetchCoordsByIP, fetchISSflyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("66.207.199.230", (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("Here are our coordinates:", data);
// });

// fetchISSflyOverTimes(
//   { latitude: "49.27670", longitude: "-123.13000" },
//   (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log("the flyby time is:", data);
//   }
// );

const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
