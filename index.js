// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let HQ = 42;
  let result;
  result = Math.abs(HQ - someValue);
  return result
}

function distanceFromHqInFeet(someValue){
  let HQ = 42;
  let result;
  result = Math.abs(HQ - someValue);
  return result*264
}

function distanceTravelledInFeet(someValue, someValue2){
  let HQ = 42;
  let result;
  result = Math.abs(someValue - someValue2);
  return result*264;
}

function calculatesFarePrice(someValue, someValue2) {
  let result
  if (Math.abs(someValue - someValue2) * 264 > 2500) {
    result = "cannot travel that far";
  }
  else if (Math.abs(someValue - someValue2) * 264 >= 2000) {
    result = 25;
  }
  else if (Math.abs(someValue - someValue2) * 264 <= 400 && <= 2000) {
    result;
  }
  else if (Math.abs(someValue - someValue2) * 264 <= 400) {
    result;
  }
  return result
}
