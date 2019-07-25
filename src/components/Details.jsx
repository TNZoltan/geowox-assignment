import React from 'react'
import { CenterTitle } from 'components/generic/Title'
import Separator from 'components/generic/Separator'
import { Container, Row, Col } from 'react-bootstrap'

const MiniTitle = ({ title }) => {
  return (
    <h6 className="blue"
      style={{ marginTop: "1.3rem" }}>{title}</h6>
  )
}

const Value = ({ value }) => {
  return (
    <div>
      {value || "N/A"}
    </div>
  )
}

const Details = ({ property }) => {
  return (
    <React.Fragment>
      <CenterTitle title="Property Details" />
      <Separator />
      {property && <Container>
        <Row>
          <Col>
            <MiniTitle title="Beds" />
            <Value value={property.beds} />
          </Col>
          <Col>
            <MiniTitle title="Baths" />
            <Value value={property.baths} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MiniTitle title="Address" />
            <Value value={property.address} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MiniTitle title="Property Type" />
            <Value value={property.propertyType} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MiniTitle title="Square Meters m²" />
            <Value value={property.sqm} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MiniTitle title="Price" />
            <Value value={property.price} />
          </Col>
        </Row>
      </Container>}
    </React.Fragment>
  )
}

export default Details