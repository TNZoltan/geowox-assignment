import React from 'react'
import Title from 'components/generic/Title'
import PieChart from 'react-minimal-pie-chart'
import PropertyTypes from 'library/models/property_types.json'

const Stats = ({ properties }) => {
  const pieData = PropertyTypes.map(pt => ({
    title: pt.label,
    value: properties.filter(p => p.propertyType === pt.value && p.visible).length,
    color: pt.color
  }))
  return (
    <React.Fragment>
      <Title title="Stats" />
      <div className="pie-desc">
        {PropertyTypes.map((pt, k) => {
          return <p key={k} style={{ color: pt.color, fontSize: '11px', margin: '.2em' }}>{pt.label}</p>
        })}
      </div>
      {properties[0].hasOwnProperty("visible") &&
        <PieChart data={pieData} className="pie" />
      }
      <p style={{ fontSize: '11px', margin: '.2em', textAlign: "right" }}>
        Drag the map to refresh stats
      </p>
    </React.Fragment>
  )
}

export default Stats