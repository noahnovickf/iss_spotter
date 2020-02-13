const { fetchMyIP, fetchCoordsByIP, fetchISSflyOverTimes } = require("./iss");

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

fetchISSflyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  (error, data) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }
    console.log("the flyby time is:", data);
  }
);
