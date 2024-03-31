
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


    const returnFirstTwoDrivers = (drivers) =>{
        return drivers.slice(0, 2);
    }
    const returnLastTwoDrivers = (drivers) => {
        return drivers.slice(-2);
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

    function createFareMultiplier(multiplier) {
        return (fare) => {
          return fare * multiplier;
        };
      }
      //const doubleFare = createFareMultiplier(2);
      //const tripleFare = createFareMultiplier(3);
      //const selectDifferentDrivers = [drivers,returnFirstTwoDrivers]
      // Fare doubler and tripler
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Example usage
console.log(fareDoubler(50)); // Output: 100 (50 * 2)
console.log(fareTripler(50)); // Output: 150 (50 * 3)

// Function to select different drivers
function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}
