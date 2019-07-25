import React, { useState } from 'react';
import 'App.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Stats from 'components/Stats.jsx'
import Details from 'components/Details.jsx'
import Filters from 'components/Filters.jsx'
import Map from 'components/Map.jsx'
import { fetchProperties } from 'api'
import { sameCoordinates } from 'library/functions'

const mapCenter = {
  lat: 53.257640,
  lng: -6.120774
}

function App() {
  const allProperties = fetchProperties()
  const [properties, setProperties] = useState(allProperties)
  const [selectedCoords, setSelectedCoords] = useState({})
  const [filters, setFilters] = useState({})

  const resetProperties = () => setProperties(allProperties)
  const resetFilters = () => setFilters({})
  const resetSelectedCoords = () => setSelectedCoords({})

  const updateFilters = (filterObj) => {
    setFilters(filterObj)
  }
  const updatePropertiesWithFilters = (filterObj = {}) => {
    setProperties(properties.map(p => {
      for (let [fkey, fvalue] of Object.entries(filterObj || filters)) {
        const fvalueInt = parseInt(fvalue, 10)
        if (p[fkey] !== fvalue && p[fkey] !== fvalueInt)
          return { ...p, disabled: true }
      }
      return { ...p, disabled: false }
    }))
  }
  const updatePropertiesWithVisibility = (visibleProperties) => {
    setProperties(properties.map(p => {
      return {
        ...p,
        visible: visibleProperties.some(vp => sameCoordinates(vp, p))
      }
    }))
  }

  const filterChanged = (criteriaKey, criteriaObj) => {
    const filterObj = {
      ...filters,
      [criteriaKey]: criteriaObj.value
    }
    updateFilters(filterObj)
    updatePropertiesWithFilters(filterObj)
  }
  return (
    <Container>
      <Row className="top">
        <Col md={8}>
          <Filters onFilterChange={filterChanged} onResetFilters={() => {
            resetFilters()
            resetProperties()
            resetSelectedCoords()
          }} filters={filters} />
        </Col>
        <Col md={4}>
          <Stats properties={properties} />
        </Col>
      </Row>
      <Row className="content">
        <Col md={3} className="details">
          <Details property={properties.find(e => {
            return sameCoordinates(e, selectedCoords)
          })} />
        </Col>
        <Col md={9} className="map">
          <Map
            points={properties}
            center={mapCenter}
            selected={selectedCoords}
            onPointsCollected={updatePropertiesWithVisibility}
            onPointSelected={(selected) => setSelectedCoords(selected)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
