import React from 'react'

const Title = ({ title, center }) => {
  return (
    <h5 className={`dark-blue b ${center ? 'text-center' : ''}`}>
      {title}
    </h5>
  )
}

export const CenterTitle = (props) => Title({
  center: true, ...props
})

export default Title
