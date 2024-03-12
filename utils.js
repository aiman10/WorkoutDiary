const MILES_TO_KM = 1.60934;

export function convertToKilometers(miles) {
  return miles * MILES_TO_KM;
}

export function convertToMiles(kilometers) {
  return kilometers / MILES_TO_KM;
}
