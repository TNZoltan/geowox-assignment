import React from 'react'

const Separator = () => {
  const styles = {
    lineHeight: 0.4,
    margin: 0,
    paddingBottom: "7px",
    borderTop: "1px solid black",
    borderBottom: "1px solid black"
  }

  return (
    <h1 className="text-center" style={styles}>
      ···
    </h1>
  )
}

export default Separator
