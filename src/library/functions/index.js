export const isBounded = (top, left,
  bottom, right,
  latitude, longitude) => {
  if (top >= latitude && latitude >= bottom) {
    if (left <= right && left <= longitude && longitude <= right) {
      return true;
    } else if (left > right && (left <= longitude || longitude <= right)) {
      return true;
    }
  }
  return false;
}

export const sameCoordinates = (a, b) => {
  return a.lat === b.lat && a.lon && b.lon
}