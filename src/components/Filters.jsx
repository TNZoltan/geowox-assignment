import React from 'react'
import Title from 'components/generic/Title'
import Dropdown from 'react-dropdown'
import { Row, Col } from 'react-bootstrap'
import PropertyTypes from 'library/models/property_types.json'

const Filters = ({ onFilterChange, onResetFilters, filters }) => {
  const propertyTypeOptions = PropertyTypes
  const bathroomOptions = [
    { value: "", label: "None" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" }
  ]
  const bedroomOptions = [
    { value: "", label: "None" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" }
  ]
  return (
    <React.Fragment>
      <Title title="Filters" />
      <Row>
        <Col lg={4}>
          <Dropdown
            options={propertyTypeOptions}
            onChange={obj => onFilterChange("propertyType", obj)}
            value={filters["propertyType"]}
            placeholder="Property Type" />
        </Col>
        <Col lg={4}>
          <Dropdown
            options={bathroomOptions}
            onChange={obj => onFilterChange("baths", obj)}
            value={filters["baths"]}
            placeholder="Bathrooms" />
        </Col>
        <Col lg={4}>
          <Dropdown
            options={bedroomOptions}
            onChange={obj => onFilterChange("beds", obj)}
            value={filters["beds"]}
            placeholder="Bedrooms" />
        </Col>
      </Row>
      <button onClick={onResetFilters}>Reset</button>
    </React.Fragment>
  )
}

export default Filters