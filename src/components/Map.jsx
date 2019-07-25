import React from 'react'
import { Map as GoogleMaps, Marker, GoogleApiWrapper } from 'google-maps-react'
import { isBounded, sameCoordinates } from 'library/functions'
import HighlightPin from "library/images/HighlightPin"

const getGoogleCoords = (obj) => ({
  lat: obj.lat, lng: obj.lon
})

const getCoords = (obj) => ({
  lat: obj.lat, lon: obj.lon
})

const Map = ({ google, points, center, selected, onPointsCollected, onPointSelected }) => {
  const collectPoints = (mapProps, map) => {
    const bounds = map.getBounds()
    onPointsCollected(points.filter(p => {
      return isBounded(bounds.na.l, bounds.ia.j, bounds.na.j, bounds.ia.l, p.lat, p.lon) && !p.disabled
    }).map(i => ({ lat: i.lat, lon: i.lon })))
  }
  return (
    <GoogleMaps
      google={google}
      onDragend={collectPoints}
      onTilesloaded={collectPoints}
      initialCenter={center}
      zoom={13}
    >
      {points.map((point, index) => {
        return !point.disabled ?
          <Marker key={index}
            position={getGoogleCoords(point)}
            onClick={() => onPointSelected(getCoords(point))}
            icon={sameCoordinates(selected, point) ? HighlightPin : null}
          />
          : null
      })}
    </GoogleMaps>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBNiYk5kwXrsCY-pUFOO5UJ3ETRx9SYp50"
})(Map) 