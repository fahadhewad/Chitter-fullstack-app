import React from 'react'
import "../../peepBox.css"


const Container = ({ data }) => {
  return (
    <div className="peep-box">
      <p className="peep-text">{data.peep}</p>
      <p className="peep-metadata">
        <strong className="peep-username">{data.email}</strong>
        <span className="peep-time">{data.dateCreated}</span>
      </p>
    </div>
  )
}

export default Container